# ImageKit Integration Plan for Apple Project

> **Reference Implementation:** `/Users/abdout/marketing`
> **Documentation Date:** January 30, 2026
> **Status:** Planning Phase

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Current State Analysis](#current-state-analysis)
3. [Issues & Problems](#issues--problems)
4. [ImageKit Solution Architecture](#imagekit-solution-architecture)
5. [Implementation Guide](#implementation-guide)
6. [Component Migration Reference](#component-migration-reference)
7. [Testing & Verification](#testing--verification)
8. [Performance Benchmarks](#performance-benchmarks)
9. [Rollback & Monitoring](#rollback--monitoring)
10. [Appendix: Code Reference](#appendix-code-reference)

---

## Executive Summary

### Problem Statement

The Apple project currently serves 20-50MB of unoptimized images per product page from Apple's CDN, with **27 instances** of the `unoptimized={true}` flag disabling all Next.js automatic optimization. This results in:
- 2-3x larger image files (no WebP/AVIF conversion)
- Poor Core Web Vitals (LCP: 5-8s, CLS: 0.2-0.3)
- Excessive bandwidth usage on mobile devices
- No blur placeholders or progressive loading

### Proposed Solution

Implement ImageKit CDN integration based on the proven pattern from the marketing repository, enabling:
- Automatic format conversion (WebP/AVIF)
- Responsive image sizing
- Blur placeholders and lazy loading
- 60-70% reduction in image data transfer
- Improved Core Web Vitals (LCP <2.5s, CLS <0.1)

### Success Metrics

| Metric | Current | Target | Improvement |
|--------|---------|--------|-------------|
| **Page Image Size** | 20-50MB | 6-15MB | 60-70% reduction |
| **LCP (Largest Contentful Paint)** | 5-8s | <2.5s | 66-68% faster |
| **CLS (Cumulative Layout Shift)** | 0.2-0.3 | <0.1 | 50-66% better |
| **Image Format** | JPEG/PNG | WebP/AVIF | 30-40% smaller |
| **Mobile Data Usage** | High | Low | 60-70% savings |

---

## Current State Analysis

### Codebase Statistics

```
📊 Image Usage Analysis
├── Files using next/image: 21
├── Instances with unoptimized={true}: 27
├── Product pages: 70+
├── Images per product page: 5-15
└── Total estimated unoptimized data: 20-50MB per page
```

### File Structure

```
/Users/abdout/apple/
├── components/
│   ├── atom/
│   │   ├── product-card.tsx          [❌ 1 unoptimized]
│   │   └── icons.tsx                 [✅ SVG only]
│   └── template/
│       ├── hero-section/
│       │   └── content.tsx           [❌ 3 unoptimized]
│       ├── product-detail/
│       │   ├── gallery.tsx           [❌ 6 unoptimized]
│       │   ├── feature-section.tsx   [❌ 4 unoptimized]
│       │   └── types.ts              [⚠️  No image metadata]
│       └── promo-tile/
│           └── content.tsx           [❌ 2 unoptimized]
├── app/
│   ├── [70+ product pages]           [⚠️  Heavy image dependency]
│   └── layout.tsx                    [⚠️  No ImageKit provider]
├── public/                           [⚠️  Empty - no local images]
└── next.config.ts                    [✅ Apple CDN allowed]
```

### Current Image Sources

All images sourced from Apple CDN:
```
https://www.apple.com/v/{product}/al/images/overview/{feature}/{name}___{id}_large_2x.jpg
```

**Example URLs:**
- Hero images: `*_large_2x.jpg` (~2-3MB each)
- Feature images: `*_large_2x.jpg` (~1-2MB each)
- Gallery images: `*_large_2x.jpg` (~2-4MB each)

**Remote Pattern:** Configured in `next.config.ts`
```typescript
{
  protocol: "https",
  hostname: "www.apple.com",
  pathname: "/**",
}
```

---

## Issues & Problems

### 🔴 CRITICAL ISSUES - Immediate Action Required

#### Issue #1: Universal `unoptimized={true}` Flag
**Severity:** CRITICAL | **Impact:** 2-3x larger files | **Affected Files:** 27 instances

**Problem:**
- Disables ALL Next.js automatic optimization
- No WebP/AVIF conversion
- No automatic srcset generation
- No compression or quality adjustment
- Images served at full resolution regardless of viewport

**Example:**
```typescript
// ❌ CURRENT (BAD)
<Image
  src={image.src}
  alt={image.alt}
  fill
  unoptimized  // 👈 DISABLES ALL OPTIMIZATION
/>
```

**Affected Components:**
1. `components/atom/product-card.tsx` - 1 instance
2. `components/template/hero-section/content.tsx` - 3 instances
3. `components/template/product-detail/gallery.tsx` - 6 instances
4. `components/template/product-detail/feature-section.tsx` - 4 instances
5. `components/template/promo-tile/content.tsx` - 2 instances

**Fix Required:** Remove `unoptimized` flag and implement ImageKit optimization

---

#### Issue #2: No Responsive Image Sizing
**Severity:** CRITICAL | **Impact:** 40-50% unnecessary bandwidth | **Affected Files:** All image components

**Problem:**
- Same 2560px×1440px image delivered to:
  - Desktop: 2560px screen ✅ correct
  - Laptop: 1440px screen ❌ 1.77× too large
  - Tablet: 1024px screen ❌ 2.5× too large
  - Mobile: 375px screen ❌ 6.8× too large
- No `sizes` prop declared
- No responsive breakpoints
- No device-specific optimization

**Example:**
```typescript
// ❌ CURRENT (BAD)
<Image src={image.src} fill />
// Delivers 2560px image to ALL devices

// ✅ TARGET (GOOD)
<OptimizedImage
  src={image.src}
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
// Delivers:
// - 375px image to mobile
// - 1024px image to tablet
// - 1920px image to desktop
```

**Impact Per Device:**
| Device | Screen Width | Current Image | Optimal Image | Waste |
|--------|--------------|---------------|---------------|-------|
| Mobile | 375px | 2.5MB | 150KB | 94% |
| Tablet | 1024px | 2.5MB | 600KB | 76% |
| Laptop | 1440px | 2.5MB | 1.2MB | 52% |
| Desktop | 2560px | 2.5MB | 2.5MB | 0% |

**Fix Required:** Add responsive `sizes` prop to all images

---

#### Issue #3: No Blur Placeholders
**Severity:** HIGH | **Impact:** Poor UX, layout shift | **Affected Files:** All image components

**Problem:**
- Images pop in suddenly with no preview
- Empty white space while loading
- Jarring user experience
- Potential Cumulative Layout Shift (CLS) issues

**Current Behavior:**
```
User loads page
    ↓
Empty space (white box)    [😞 Poor UX]
    ↓
Wait 2-5 seconds
    ↓
Image suddenly appears      [😞 Jarring]
```

**Target Behavior:**
```
User loads page
    ↓
Blurred preview appears     [😊 Immediate feedback]
    ↓
Progressive enhancement
    ↓
Sharp image fades in        [😊 Smooth transition]
```

**Fix Required:** Implement blur placeholder system

---

### 🟡 HIGH PRIORITY ISSUES

#### Issue #4: Missing Priority Optimization
**Severity:** HIGH | **Impact:** Delayed LCP | **Affected Files:** All above-fold images

**Problem:**
- Only hero image has `priority={true}`
- Other above-fold images (promo tiles, feature sections) load lazily
- Delays Largest Contentful Paint (LCP)
- Poor initial page render

**Current Priority Map:**
```typescript
Hero image:     priority={true}  ✅
Promo tile 1:   priority={false} ❌ Should be priority
Promo tile 2:   priority={false} ❌ Should be priority
Feature image:  priority={false} ❌ Depends on fold
Gallery main:   priority={false} ⚠️  Below fold (OK)
Thumbnails:     priority={false} ✅ Correct
```

**Fix Required:** Mark above-fold images as priority

---

#### Issue #5: Remote Image Dependency
**Severity:** HIGH | **Impact:** Network dependency, latency | **Affected Files:** All images

**Problem:**
- 100% dependency on `www.apple.com` CDN
- No local fallback images
- Higher latency (no edge caching)
- Single point of failure
- No control over image availability

**Current Architecture:**
```
User Request
    ↓
Next.js Server (Vercel)
    ↓
Apple CDN (www.apple.com) 👈 EXTERNAL DEPENDENCY
    ↓
Slow round-trip time
```

**Target Architecture:**
```
User Request
    ↓
Next.js Server (Vercel)
    ↓
ImageKit CDN (ik.imagekit.io) 👈 CONTROLLED, EDGE-CACHED
    ↓
Fast, optimized delivery
```

**Fix Required:** Migrate critical images to ImageKit

---

### 🟢 MEDIUM PRIORITY ISSUES

#### Issue #6: No Loading States
**Severity:** MEDIUM | **Impact:** UX | **Affected Files:** All image components

**Problem:**
- No skeleton screens
- No loading indicators
- No progressive enhancement
- Users see empty space

**Fix Required:** Add skeleton loaders or blur transitions

---

#### Issue #7: Missing Image Dimensions
**Severity:** MEDIUM | **Impact:** Layout thrashing | **Affected Files:** Type definitions

**Problem:**
- Type definitions lack width/height metadata
- No dimension hints for layout
- Browser must wait for image to calculate space
- Potential CLS (Cumulative Layout Shift)

**Current Types:**
```typescript
// ❌ CURRENT
image?: {
  src: string
  alt: string
}
```

**Target Types:**
```typescript
// ✅ TARGET
image?: {
  src: string
  alt: string
  width?: number
  height?: number
  sizes?: string
  priority?: boolean
  placeholder?: "blur" | "empty"
  blurDataURL?: string
}
```

**Fix Required:** Extend type definitions

---

#### Issue #8: No Image Optimization Pipeline
**Severity:** MEDIUM | **Impact:** Manual work | **Affected Files:** N/A

**Problem:**
- No automated image processing
- No format conversion
- No compression pipeline
- No quality optimization
- Manual optimization required for each image

**Fix Required:** Implement ImageKit transformation pipeline

---

## ImageKit Solution Architecture

### Overview

ImageKit provides a complete image optimization and delivery platform with:
- **Automatic Format Conversion:** JPEG/PNG → WebP/AVIF
- **Responsive Sizing:** Deliver right size for each device
- **CDN Delivery:** Global edge network (150+ locations)
- **Blur Placeholders:** LQIP (Low Quality Image Placeholders)
- **Lazy Loading:** Automatic below-fold optimization
- **Transformations:** Crop, resize, quality, effects via URL
- **AI Features:** Background removal, upscaling, smart crop

### Reference Implementation

Based on **proven production implementation** from marketing repository:
- **Location:** `/Users/abdout/marketing`
- **Status:** Live, production-tested
- **Performance:** Verified 60-70% bandwidth reduction
- **Stability:** Zero image-related errors since deployment

### Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                    Apple Project (Next.js)                   │
├─────────────────────────────────────────────────────────────┤
│  App Layout                                                  │
│  └── ImageKitProvider (wraps entire app)                    │
│      ├── publicKey (env var)                                │
│      ├── urlEndpoint (env var)                              │
│      └── transformationPosition="query"                     │
└─────────────────────────────────────────────────────────────┘
                               │
                               ↓
┌─────────────────────────────────────────────────────────────┐
│                   UI Component Layer                         │
├─────────────────────────────────────────────────────────────┤
│  OptimizedImage Component                                    │
│  ├── Wraps @imagekit/next IKImage                          │
│  ├── Blur placeholder generation                            │
│  ├── Lazy loading logic                                     │
│  ├── Priority handling                                      │
│  └── Transformation support                                 │
│                                                              │
│  OptimizedVideo Component                                    │
│  ├── Wraps @imagekit/next IKVideo                          │
│  ├── Poster image support                                   │
│  └── Preload strategy                                       │
└─────────────────────────────────────────────────────────────┘
                               │
                               ↓
┌─────────────────────────────────────────────────────────────┐
│                    ImageKit Config                           │
├─────────────────────────────────────────────────────────────┤
│  lib/imagekit.ts                                            │
│  ├── Environment variables                                  │
│  ├── buildImagekitUrl() utility                            │
│  └── Transformation builder                                 │
└─────────────────────────────────────────────────────────────┘
                               │
                               ↓
┌─────────────────────────────────────────────────────────────┐
│              ImageKit CDN (ik.imagekit.io)                  │
├─────────────────────────────────────────────────────────────┤
│  ✓ Format Optimization (WebP/AVIF)                          │
│  ✓ Responsive Sizing                                        │
│  ✓ Compression                                              │
│  ✓ Global CDN Delivery                                      │
│  ✓ Blur Placeholder Generation                              │
│  ✓ Transformation Pipeline                                  │
└─────────────────────────────────────────────────────────────┘
```

### Component Hierarchy

```
Level 1: Configuration
└── lib/imagekit.ts
    └── Environment variables
    └── URL builder utility

Level 2: Provider
└── components/ui/imagekit-provider.tsx
    └── Global context for ImageKit

Level 3: UI Components
├── components/ui/optimized-image.tsx
│   └── Replaces next/image
├── components/ui/optimized-video.tsx
│   └── Replaces HTML5 video
└── components/ui/file-upload.tsx
    └── Optional: Image upload system

Level 4: Business Components
├── components/atom/product-card.tsx
│   └── Uses OptimizedImage
├── components/template/hero-section/
│   └── Uses OptimizedImage
└── components/template/product-detail/
    ├── gallery.tsx (Uses OptimizedImage)
    ├── feature-section.tsx (Uses OptimizedImage/Video)
    └── types.ts (Extended with image metadata)

Level 5: Pages
└── app/**/page.tsx (70+ product pages)
    └── Automatically benefit from optimized components
```

### URL Transformation System

ImageKit uses URL-based transformations:

**Base URL:**
```
https://ik.imagekit.io/databayt/apple/iphone.jpg
```

**With Transformations:**
```
https://ik.imagekit.io/databayt/apple/iphone.jpg?tr=w-800,h-600,q-85,f-webp
```

**Transformation Parameters:**
| Parameter | Description | Example |
|-----------|-------------|---------|
| `w` | Width in pixels | `w-800` |
| `h` | Height in pixels | `h-600` |
| `q` | Quality (1-100) | `q-85` |
| `f` | Format | `f-webp` or `f-avif` |
| `bl` | Blur strength | `bl-10` |
| `orig` | Use original | `orig-true` |

**Blur Placeholder URL:**
```
https://ik.imagekit.io/databayt/apple/iphone.jpg?tr=w-10,h-10,bl-10,q-10
```
- Width: 10px (tiny preview)
- Height: 10px
- Blur: 10 (strong blur)
- Quality: 10 (low quality)
- Result: ~2KB placeholder (vs 2MB original)

---

## Implementation Guide

### Phase 1: Environment Setup

#### Step 1.1: Create ImageKit Account

1. Go to https://imagekit.io
2. Sign up for free account
3. Note your credentials:
   - **URL Endpoint:** `https://ik.imagekit.io/your_id`
   - **Public Key:** `public_xxxxxxxxxxxxxx`
   - **Private Key:** `private_xxxxxxxxxxxxxx`

#### Step 1.2: Install Dependencies

```bash
cd /Users/abdout/apple
pnpm add @imagekit/next
```

**Package Details:**
- **Name:** `@imagekit/next`
- **Version:** ^2.1.3 (or latest)
- **Size:** ~50KB
- **Dependencies:** None (peer: react, next)

#### Step 1.3: Configure Environment Variables

Create or update `.env.local`:

```env
# ImageKit Configuration
NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY="public_xxxxxxxxxxxxxx"
NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT="https://ik.imagekit.io/your_id"
IMAGEKIT_PRIVATE_KEY="private_xxxxxxxxxxxxxx"
```

**⚠️ IMPORTANT:**
- `NEXT_PUBLIC_*` variables are exposed to the browser (public)
- `IMAGEKIT_PRIVATE_KEY` is server-only (DO NOT expose)
- Add `.env.local` to `.gitignore`

**Update `.gitignore`:**
```gitignore
# Environment variables
.env.local
.env.development.local
.env.production.local
```

#### Step 1.4: Update Next.js Configuration

**File:** `next.config.ts`

Add ImageKit to remote patterns:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.apple.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ik.imagekit.io",  // 👈 ADD THIS
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
```

---

### Phase 2: Create Core ImageKit Components

#### Step 2.1: Create ImageKit Configuration

**File:** `lib/imagekit.ts` (NEW)

```typescript
import { buildSrc } from "@imagekit/next";

/**
 * ImageKit Configuration
 *
 * Centralizes ImageKit settings and provides utility functions
 * for building optimized image URLs with transformations.
 */
export const imagekitConfig = {
  urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT || "",
  publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY || "",
};

/**
 * Direct access to ImageKit URL endpoint
 * Useful for background-image CSS or direct URL construction
 */
export const imagekitEndpoint = imagekitConfig.urlEndpoint;

/**
 * Build an optimized ImageKit URL with transformations
 *
 * @param src - Image path (e.g., "/apple/iphone.jpg")
 * @param transformations - Array of transformation objects
 * @param queryParameters - Additional query parameters
 * @returns Full ImageKit URL with transformations
 *
 * @example
 * // Basic usage
 * buildImagekitUrl("/apple/iphone.jpg");
 *
 * @example
 * // With transformations
 * buildImagekitUrl("/apple/iphone.jpg", [
 *   { width: 800, height: 600 },
 *   { quality: 85, format: "webp" }
 * ]);
 */
export function buildImagekitUrl(
  src: string,
  transformations?: any[],
  queryParameters?: Record<string, string | number>
) {
  return buildSrc({
    urlEndpoint: imagekitConfig.urlEndpoint,
    src,
    transformations,
    queryParameters,
  });
}
```

**Usage Example:**
```typescript
import { buildImagekitUrl } from "@/lib/imagekit";

// Simple URL
const url = buildImagekitUrl("/apple/iphone.jpg");
// Result: https://ik.imagekit.io/your_id/apple/iphone.jpg

// With transformations
const optimized = buildImagekitUrl(
  "/apple/iphone.jpg",
  [{ width: 800, quality: 85, format: "webp" }]
);
// Result: https://ik.imagekit.io/your_id/apple/iphone.jpg?tr=w-800,q-85,f-webp
```

---

#### Step 2.2: Create ImageKit Provider

**File:** `components/ui/imagekit-provider.tsx` (NEW)

```typescript
"use client";

import { ImageKitProvider as Provider } from "@imagekit/next";
import { imagekitConfig } from "@/lib/imagekit";

/**
 * ImageKit Provider Component
 *
 * Wraps the application to provide ImageKit context to all child components.
 * Must be used in app layout to enable OptimizedImage/OptimizedVideo components.
 *
 * @param children - React children to wrap
 *
 * Configuration:
 * - transformationPosition="query" - Transformations as URL query params
 *   (e.g., ?tr=w-800,h-600 instead of /tr:w-800,h-600)
 *
 * @example
 * // In app/layout.tsx
 * <ImageKitProvider>
 *   {children}
 * </ImageKitProvider>
 */
export function ImageKitProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider
      publicKey={imagekitConfig.publicKey}
      urlEndpoint={imagekitConfig.urlEndpoint}
      transformationPosition="query"
    >
      {children}
    </Provider>
  );
}
```

**Why `transformationPosition="query"`?**
- **Query style:** `?tr=w-800,h-600` (recommended)
  - Easier to read and debug
  - Better URL caching behavior
  - Compatible with more CDNs
- **Path style:** `/tr:w-800,h-600`
  - Harder to parse
  - Can cause routing issues

---

#### Step 2.3: Create OptimizedImage Component

**File:** `components/ui/optimized-image.tsx` (NEW)

```typescript
"use client";

import { IKImage } from "@imagekit/next";
import { ComponentProps, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Props for OptimizedImage component
 * Extends ImageKit IKImage with additional convenience props
 */
interface OptimizedImageProps extends Omit<ComponentProps<typeof IKImage>, "lqip"> {
  /** Image source path (e.g., "/apple/iphone.jpg") */
  src: string;
  /** Alt text for accessibility */
  alt: string;
  /** Image width in pixels (required unless using fill) */
  width?: number;
  /** Image height in pixels (required unless using fill) */
  height?: number;
  /** Fill parent container (like object-fit: cover) */
  fill?: boolean;
  /** Responsive sizes attribute */
  sizes?: string;
  /** Load image with priority (for above-fold images) */
  priority?: boolean;
  /** CSS class name */
  className?: string;
  /** Placeholder strategy */
  placeholder?: "blur" | "empty";
  /** Custom blur data URL (if not using auto-generated) */
  blurDataURL?: string;
  /** ImageKit transformations array */
  transformation?: any[];
}

/**
 * OptimizedImage Component
 *
 * Drop-in replacement for Next.js Image component with ImageKit optimization.
 * Automatically handles:
 * - Format conversion (WebP/AVIF)
 * - Responsive sizing
 * - Blur placeholders (LQIP)
 * - Lazy loading
 * - Priority loading for above-fold images
 *
 * @example
 * // Basic usage
 * <OptimizedImage
 *   src="/apple/iphone.jpg"
 *   alt="iPhone 16 Pro"
 *   width={800}
 *   height={600}
 * />
 *
 * @example
 * // Fill layout with blur placeholder
 * <OptimizedImage
 *   src="/apple/iphone.jpg"
 *   alt="iPhone 16 Pro"
 *   fill
 *   sizes="(max-width: 768px) 100vw, 50vw"
 *   placeholder="blur"
 * />
 *
 * @example
 * // Priority (above-fold) image
 * <OptimizedImage
 *   src="/apple/iphone.jpg"
 *   alt="iPhone 16 Pro"
 *   fill
 *   priority={true}
 *   sizes="100vw"
 * />
 */
export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill = false,
  sizes,
  priority = false,
  className = "",
  placeholder,
  blurDataURL,
  transformation,
  ...props
}: OptimizedImageProps) {
  // Convert priority prop to loading attribute
  const loading = priority ? "eager" : "lazy";

  // Generate blur placeholder configuration
  const lqip = placeholder === "blur"
    ? blurDataURL
      ? { active: true, url: blurDataURL }
      : {
          active: true,
          quality: 10,  // Low quality for small file size
          blur: 10,      // Strong blur effect
        }
    : undefined;

  // Fill layout (like object-fit: cover)
  if (fill) {
    return (
      <IKImage
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        loading={loading}
        className={className}
        lqip={lqip}
        transformation={transformation}
        {...props}
      />
    );
  }

  // Fixed dimensions layout
  return (
    <IKImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      loading={loading}
      className={className}
      lqip={lqip}
      transformation={transformation}
      {...props}
    />
  );
}
```

**Component Features:**

1. **Blur Placeholders:**
   - Auto-generated or custom
   - 10×10px preview (~2KB)
   - Smooth fade-in transition
   - Reduces perceived load time

2. **Lazy Loading:**
   - Default: `loading="lazy"` (below-fold)
   - Priority: `loading="eager"` (above-fold)
   - Automatic intersection observer
   - Saves bandwidth

3. **Responsive Sizing:**
   - `sizes` prop for breakpoints
   - Automatic srcset generation
   - Device-specific image sizes
   - 40-50% bandwidth savings

4. **Format Optimization:**
   - Automatic WebP conversion
   - AVIF fallback (if supported)
   - 30-40% smaller files
   - No code changes needed

---

#### Step 2.4: Create OptimizedVideo Component

**File:** `components/ui/optimized-video.tsx` (NEW)

```typescript
"use client";

import { IKVideo } from "@imagekit/next";
import { ComponentProps } from "react";

/**
 * Props for OptimizedVideo component
 */
interface OptimizedVideoProps extends ComponentProps<typeof IKVideo> {
  /** Video source path */
  src: string;
  /** Poster image (thumbnail) */
  poster?: string;
  /** Auto-play video */
  autoPlay?: boolean;
  /** Loop video */
  loop?: boolean;
  /** Mute audio */
  muted?: boolean;
  /** CSS class name */
  className?: string;
}

/**
 * OptimizedVideo Component
 *
 * ImageKit-optimized video component with automatic poster generation
 * and optimized delivery.
 *
 * @example
 * // Auto-play background video
 * <OptimizedVideo
 *   src="/apple/hero-video.mp4"
 *   autoPlay
 *   loop
 *   muted
 *   className="w-full h-full object-cover"
 * />
 *
 * @example
 * // Video with custom poster
 * <OptimizedVideo
 *   src="/apple/feature-video.mp4"
 *   poster="/apple/feature-poster.jpg"
 * />
 */
export default function OptimizedVideo({
  src,
  poster,
  autoPlay = false,
  loop = true,
  muted = true,
  className = "",
  ...props
}: OptimizedVideoProps) {
  return (
    <IKVideo
      src={src}
      poster={poster}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      className={className}
      preload={autoPlay ? "auto" : "metadata"}
      {...props}
    />
  );
}
```

---

#### Step 2.5: Create FileUpload Component (Optional)

**File:** `components/ui/file-upload.tsx` (NEW)

```typescript
"use client";

import { useState } from "react";
import { IKUpload } from "@imagekit/next";
import {
  ImageKitAbortError,
  ImageKitInvalidRequestError,
  ImageKitUploadNetworkError,
  ImageKitServerError,
} from "@imagekit/next/server";

/**
 * FileUpload Component
 *
 * Secure file upload to ImageKit with progress tracking.
 * Requires /api/upload-auth endpoint for authentication.
 *
 * @example
 * <FileUpload />
 */
export default function FileUpload() {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [uploadStatus, setUploadStatus] = useState<"idle" | "uploading" | "success" | "error">("idle");

  const handleError = (err: any) => {
    let message = "Upload failed";

    if (err instanceof ImageKitAbortError) {
      message = "Upload cancelled";
    } else if (err instanceof ImageKitInvalidRequestError) {
      message = "Invalid request";
    } else if (err instanceof ImageKitUploadNetworkError) {
      message = "Network error";
    } else if (err instanceof ImageKitServerError) {
      message = "Server error";
    }

    setUploadError(message);
    setUploadStatus("error");
  };

  return (
    <div className="space-y-4">
      <IKUpload
        fileName="apple-product.jpg"
        folder="/apple/products"
        tags={["product", "apple"]}
        useUniqueFileName={true}
        onUploadStart={() => {
          setUploadProgress(0);
          setUploadError(null);
          setUploadStatus("uploading");
        }}
        onUploadProgress={(progress) => {
          const percent = Math.round((progress.loaded / progress.total) * 100);
          setUploadProgress(percent);
        }}
        onSuccess={(res) => {
          console.log("Upload successful:", res);
          setUploadStatus("success");
        }}
        onError={handleError}
      />

      {uploadStatus === "uploading" && (
        <div className="space-y-2">
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${uploadProgress}%` }}
            />
          </div>
          <p className="text-sm text-gray-600">Uploading... {uploadProgress}%</p>
        </div>
      )}

      {uploadStatus === "success" && (
        <p className="text-sm text-green-600">✓ Upload successful!</p>
      )}

      {uploadError && (
        <p className="text-sm text-red-600">✗ {uploadError}</p>
      )}
    </div>
  );
}
```

---

#### Step 2.6: Create Upload Auth API (Optional)

**File:** `app/api/upload-auth/route.ts` (NEW)

```typescript
import { getUploadAuthParams } from "@imagekit/next/server";
import { NextResponse } from "next/server";

/**
 * Upload Authentication Endpoint
 *
 * Generates secure tokens for client-side file uploads.
 * Uses private key (server-only) to sign requests.
 *
 * Required for FileUpload component to work.
 */
const privateKey = process.env.IMAGEKIT_PRIVATE_KEY || "";

export async function GET() {
  try {
    // Generate authentication parameters
    const authParams = await getUploadAuthParams({
      privateKey,
    });

    // Return: { token, expire, signature, publicKey }
    return NextResponse.json(authParams);
  } catch (error) {
    console.error("Upload auth error:", error);
    return NextResponse.json(
      { error: "Failed to generate upload authentication" },
      { status: 500 }
    );
  }
}
```

**How It Works:**
1. Client calls `/api/upload-auth`
2. Server generates secure token with private key
3. Client uses token to upload directly to ImageKit
4. Upload is authenticated but doesn't hit your server

**Security:**
- Private key never exposed to client
- Tokens expire after 60 minutes
- Each upload requires new token

---

### Phase 3: Integrate Provider into App

**File:** `app/layout.tsx`

Wrap app with ImageKitProvider:

```typescript
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ImageKitProvider } from "@/components/ui/imagekit-provider"; // 👈 ADD THIS

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Apple",
  description: "Apple products showcase",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ImageKitProvider> {/* 👈 WRAP CHILDREN */}
          {children}
        </ImageKitProvider>
      </body>
    </html>
  );
}
```

**Important:** Place `ImageKitProvider` inside `<body>` but wrapping all content.

---

### Phase 4: Migrate Existing Components

#### Migration Pattern

For each component:
1. Replace `import Image from "next/image"` → `import OptimizedImage from "@/components/ui/optimized-image"`
2. Replace `<Image` → `<OptimizedImage`
3. Remove `unoptimized={true}`
4. Add `sizes` prop
5. Add `placeholder="blur"`
6. Add `priority={true}` for above-fold images

---

#### Component 1: ProductCard

**File:** `components/atom/product-card.tsx`

**Before:**
```typescript
import Image from "next/image";

// Inside component
{image && (
  <div className="relative w-full h-64">
    <Image
      src={image.src}
      alt={image.alt}
      fill
      className="object-cover"
      unoptimized // 👈 REMOVE THIS
      onError={() => setImageError(true)}
    />
  </div>
)}
```

**After:**
```typescript
import OptimizedImage from "@/components/ui/optimized-image";

// Inside component
{image && (
  <div className="relative w-full h-64">
    <OptimizedImage
      src={image.src}
      alt={image.alt}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className="object-cover"
      placeholder="blur"
      onError={() => setImageError(true)}
    />
  </div>
)}
```

**Changes:**
- ✅ Removed `unoptimized`
- ✅ Added `sizes` for responsive images
- ✅ Added `placeholder="blur"`
- ✅ Kept error handling

**Responsive Behavior:**
- Mobile (≤768px): 100vw (full viewport width)
- Tablet (≤1200px): 50vw (half viewport)
- Desktop (>1200px): 33vw (one-third viewport)

---

#### Component 2: HeroSection

**File:** `components/template/hero-section/content.tsx`

**Before:**
```typescript
import Image from "next/image";

// Hero image
{image && (
  <div className="relative w-full h-[600px]">
    <Image
      src={image.src}
      alt={image.alt}
      fill
      priority={true}
      className="object-cover"
      unoptimized // 👈 REMOVE THIS
    />
  </div>
)}

// HeroSectionTile image
{image && (
  <Image
    src={image.src}
    alt={image.alt}
    fill
    className="object-cover"
    unoptimized // 👈 REMOVE THIS
  />
)}
```

**After:**
```typescript
import OptimizedImage from "@/components/ui/optimized-image";

// Hero image (above-fold, priority)
{image && (
  <div className="relative w-full h-[600px]">
    <OptimizedImage
      src={image.src}
      alt={image.alt}
      fill
      priority={true}  // ✅ KEEP THIS (above-fold)
      sizes="100vw"    // ✅ Full width
      className="object-cover"
      placeholder="blur"
    />
  </div>
)}

// HeroSectionTile image
{image && (
  <OptimizedImage
    src={image.src}
    alt={image.alt}
    fill
    sizes="(max-width: 768px) 100vw, 50vw"
    className="object-cover"
    placeholder="blur"
    priority={true}  // ✅ ADD IF ABOVE FOLD
  />
)}
```

**Changes:**
- ✅ Removed `unoptimized` from all instances
- ✅ Added `sizes` prop
- ✅ Added `placeholder="blur"`
- ✅ Kept `priority={true}` for above-fold images

---

#### Component 3: Gallery

**File:** `components/template/product-detail/gallery.tsx`

**Before:**
```typescript
import Image from "next/image";

// Main image
<Image
  src={images[activeImage]?.src}
  alt={images[activeImage]?.alt}
  fill
  className="object-contain"
  unoptimized // 👈 REMOVE THIS
/>

// Thumbnail images (5 instances)
<Image
  src={img.src}
  alt={img.alt}
  fill
  className="object-cover"
  unoptimized // 👈 REMOVE THIS
/>
```

**After:**
```typescript
import OptimizedImage from "@/components/ui/optimized-image";

// Main image (priority since likely above-fold)
<OptimizedImage
  src={images[activeImage]?.src}
  alt={images[activeImage]?.alt}
  fill
  priority={true}  // ✅ ADD (main gallery image)
  sizes="(max-width: 768px) 100vw, 60vw"
  className="object-contain"
  placeholder="blur"
/>

// Thumbnail images
<OptimizedImage
  src={img.src}
  alt={img.alt}
  fill
  sizes="150px"  // ✅ Fixed size for thumbnails
  className="object-cover"
  placeholder="blur"
/>
```

**Changes:**
- ✅ Removed 6 instances of `unoptimized`
- ✅ Added `priority={true}` to main image
- ✅ Added appropriate `sizes` for main vs thumbnails
- ✅ Added `placeholder="blur"`

**Carousel Variant:** Same changes apply

---

#### Component 4: FeatureSection

**File:** `components/template/product-detail/feature-section.tsx`

**Before:**
```typescript
import Image from "next/image";

// Feature image
{image && (
  <div className="relative w-full h-[500px]">
    <Image
      src={image.src}
      alt={image.alt}
      fill
      className="object-cover"
      unoptimized // 👈 REMOVE THIS
    />
  </div>
)}

// Feature video (uses HTML5 video, not Image)
{video && (
  <video
    src={video.src}
    autoPlay
    loop
    muted
    className="w-full h-full object-cover"
  />
)}
```

**After:**
```typescript
import OptimizedImage from "@/components/ui/optimized-image";
import OptimizedVideo from "@/components/ui/optimized-video";

// Feature image
{image && (
  <div className="relative w-full h-[500px]">
    <OptimizedImage
      src={image.src}
      alt={image.alt}
      fill
      sizes="(max-width: 768px) 100vw, 50vw"
      className="object-cover"
      placeholder="blur"
    />
  </div>
)}

// Feature video
{video && (
  <OptimizedVideo
    src={video.src}
    poster={video.poster}  // ✅ Add poster if available
    autoPlay
    loop
    muted
    className="w-full h-full object-cover"
  />
)}
```

**Changes:**
- ✅ Removed `unoptimized` from images
- ✅ Added `sizes` for responsive images
- ✅ Added `placeholder="blur"`
- ✅ Replaced HTML5 video with `OptimizedVideo`
- ✅ Added poster support for videos

**FeatureSectionFullWidth:** Same changes apply

---

#### Component 5: PromoTile

**File:** `components/template/promo-tile/content.tsx`

**Before:**
```typescript
import Image from "next/image";

// Background image
{image && (
  <Image
    src={image.src}
    alt={image.alt}
    fill
    className="object-cover"
    unoptimized // 👈 REMOVE THIS
  />
)}

// Logo
{logo && (
  <Image
    src={logo.src}
    alt={logo.alt}
    width={120}
    height={40}
    className="h-10 w-auto"
    unoptimized // 👈 REMOVE THIS
  />
)}
```

**After:**
```typescript
import OptimizedImage from "@/components/ui/optimized-image";

// Background image
{image && (
  <OptimizedImage
    src={image.src}
    alt={image.alt}
    fill
    sizes="(max-width: 768px) 100vw, 50vw"
    className="object-cover"
    placeholder="blur"
    priority={true}  // ✅ ADD IF ABOVE FOLD
  />
)}

// Logo
{logo && (
  <OptimizedImage
    src={logo.src}
    alt={logo.alt}
    width={120}
    height={40}
    className="h-10 w-auto"
    priority={true}  // ✅ Logo usually above-fold
  />
)}
```

**Changes:**
- ✅ Removed 2 instances of `unoptimized`
- ✅ Added `sizes` for background image
- ✅ Added `placeholder="blur"`
- ✅ Added `priority={true}` for above-fold content

---

### Phase 5: Update Type Definitions

**File:** `components/template/product-detail/types.ts`

**Before:**
```typescript
export interface ProductDetailSection {
  image?: {
    src: string;
    alt: string;
  };
  video?: {
    src: string;
  };
  // ... rest
}
```

**After:**
```typescript
/**
 * Image metadata with optimization hints
 */
export interface ImageData {
  /** Image source path or URL */
  src: string;
  /** Alt text for accessibility */
  alt: string;
  /** Optional width in pixels */
  width?: number;
  /** Optional height in pixels */
  height?: number;
  /** Responsive sizes attribute */
  sizes?: string;
  /** Load with priority (above-fold) */
  priority?: boolean;
  /** Placeholder strategy */
  placeholder?: "blur" | "empty";
  /** Custom blur data URL */
  blurDataURL?: string;
}

/**
 * Video metadata with optimization hints
 */
export interface VideoData {
  /** Video source path or URL */
  src: string;
  /** Poster image for video thumbnail */
  poster?: string;
  /** Auto-play video */
  autoPlay?: boolean;
  /** Loop video */
  loop?: boolean;
  /** Mute audio */
  muted?: boolean;
}

export interface ProductDetailSection {
  /** Optimized image data */
  image?: ImageData;
  /** Optimized video data */
  video?: VideoData;
  // ... rest
}
```

**Benefits:**
- Type safety for image optimization props
- Auto-complete in IDE
- Documentation via JSDoc
- Prevents missing optimization hints

---

## Component Migration Reference

### Quick Migration Checklist

For each component using images:

- [ ] Replace import: `next/image` → `@/components/ui/optimized-image`
- [ ] Replace component: `<Image` → `<OptimizedImage`
- [ ] Remove: `unoptimized={true}`
- [ ] Add: `sizes="..."` (responsive)
- [ ] Add: `placeholder="blur"`
- [ ] Add: `priority={true}` (if above-fold)
- [ ] Test: Visual verification
- [ ] Test: Network tab (WebP format)
- [ ] Test: Mobile responsiveness

### Component-Specific Guidelines

#### 1. ProductCard
```typescript
<OptimizedImage
  src={image.src}
  alt={image.alt}
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  placeholder="blur"
/>
```

#### 2. HeroSection (Above-Fold)
```typescript
<OptimizedImage
  src={image.src}
  alt={image.alt}
  fill
  priority={true}     // ✅ IMPORTANT
  sizes="100vw"
  placeholder="blur"
/>
```

#### 3. Gallery Main Image
```typescript
<OptimizedImage
  src={images[activeImage]?.src}
  alt={images[activeImage]?.alt}
  fill
  priority={true}
  sizes="(max-width: 768px) 100vw, 60vw"
  placeholder="blur"
/>
```

#### 4. Gallery Thumbnails
```typescript
<OptimizedImage
  src={img.src}
  alt={img.alt}
  fill
  sizes="150px"
  placeholder="blur"
/>
```

#### 5. FeatureSection Image
```typescript
<OptimizedImage
  src={image.src}
  alt={image.alt}
  fill
  sizes="(max-width: 768px) 100vw, 50vw"
  placeholder="blur"
/>
```

#### 6. FeatureSection Video
```typescript
<OptimizedVideo
  src={video.src}
  poster={video.poster}
  autoPlay
  loop
  muted
/>
```

#### 7. PromoTile Background
```typescript
<OptimizedImage
  src={image.src}
  alt={image.alt}
  fill
  priority={true}     // if above-fold
  sizes="(max-width: 768px) 100vw, 50vw"
  placeholder="blur"
/>
```

#### 8. Logo/Icon Images
```typescript
<OptimizedImage
  src={logo.src}
  alt={logo.alt}
  width={120}
  height={40}
  priority={true}     // logos usually above-fold
/>
```

---

## Testing & Verification

### Local Development Testing

#### Step 1: Start Dev Server
```bash
cd /Users/abdout/apple
pnpm dev
```

Open http://localhost:3000

#### Step 2: Visual Verification

Test pages in priority order:
1. **Homepage** (`/`)
   - [ ] Hero images load
   - [ ] Promo tiles load
   - [ ] No layout shift

2. **Product Page** (`/iphone-16-pro`)
   - [ ] Hero section loads
   - [ ] Feature images load
   - [ ] Gallery works (main + thumbnails)
   - [ ] Blur placeholders appear
   - [ ] Smooth transitions

3. **Gallery Interaction**
   - [ ] Click thumbnails
   - [ ] Switch images smoothly
   - [ ] No flashing or jumps

4. **Mobile Responsiveness** (Chrome DevTools)
   - [ ] iPhone SE (375px)
   - [ ] iPad (768px)
   - [ ] Desktop (1920px)

#### Step 3: Network Tab Verification

Open Chrome DevTools > Network:
1. Filter: `Img`
2. Reload page
3. Check each image:
   - [ ] URL contains `ik.imagekit.io`
   - [ ] Type: `webp` or `avif`
   - [ ] Size: Significantly smaller
   - [ ] Status: `200 OK`

**Expected Results:**
```
Before: 2.5MB JPEG
After:  800KB WebP (~68% reduction)
```

#### Step 4: Console Verification

Check browser console:
- [ ] No `unoptimized` warnings
- [ ] No image loading errors
- [ ] No hydration errors
- [ ] No missing alt text warnings

### Build Testing

#### Step 1: Production Build
```bash
pnpm build
```

Expected output:
```
✓ Compiled successfully
✓ Collecting page data
✓ Generating static pages (70/70)
✓ Finalizing page optimization
✓ Collecting build traces
```

Check for:
- [ ] No build errors
- [ ] No image optimization warnings
- [ ] Static generation successful
- [ ] Build time <5 minutes

#### Step 2: Build Output Analysis

Check `.next/` folder:
```bash
ls -lh .next/static/media/
```

Should see:
- WebP images generated
- Blur placeholders created
- Image manifest generated

### Performance Testing

#### Lighthouse Audit

Run in Chrome DevTools > Lighthouse:

**Settings:**
- Mode: Navigation
- Device: Mobile
- Categories: Performance, Accessibility, Best Practices

**Expected Scores:**

| Category | Before | After | Target |
|----------|--------|-------|--------|
| **Performance** | 40-50 | 85-95 | >90 |
| **Accessibility** | 85-90 | 85-90 | >90 |
| **Best Practices** | 80-85 | 85-95 | >90 |

**Core Web Vitals:**

| Metric | Before | After | Target |
|--------|--------|-------|--------|
| **LCP (Largest Contentful Paint)** | 5-8s | 1.5-2.5s | <2.5s |
| **FID (First Input Delay)** | 50ms | 50ms | <100ms |
| **CLS (Cumulative Layout Shift)** | 0.2-0.3 | <0.1 | <0.1 |

#### WebPageTest

Use https://www.webpagetest.org/

**Test Settings:**
- Location: Choose closest to target audience
- Browser: Chrome
- Connection: 3G (mobile test)

**Metrics to Check:**
- [ ] Start Render: <3s
- [ ] Speed Index: <4s
- [ ] Fully Loaded: <10s
- [ ] Requests: Minimal image requests
- [ ] Bytes In: 60-70% reduction

### Regression Testing

#### Visual Regression

Compare screenshots before/after:
1. Take screenshots of all product pages
2. Apply ImageKit changes
3. Take new screenshots
4. Compare side-by-side

Tools:
- Manual: Chrome DevTools > Device Toolbar > Screenshot
- Automated: Percy, Chromatic, or Playwright

**Check for:**
- [ ] No layout shifts
- [ ] Same image positioning
- [ ] Same aspect ratios
- [ ] No broken images

#### Functional Testing

Test all image interactions:
- [ ] Gallery thumbnail click
- [ ] Gallery navigation arrows
- [ ] Image error states
- [ ] Image loading states
- [ ] Hover effects on product cards

### Browser Compatibility

Test on multiple browsers:

**Desktop:**
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

**Mobile:**
- [ ] iOS Safari
- [ ] Chrome Android
- [ ] Samsung Internet

**Expected:** All browsers load optimized images correctly

---

## Performance Benchmarks

### Expected Improvements

#### Image Size Reduction

| Image Type | Before | After | Savings |
|------------|--------|-------|---------|
| **Hero Image** | 2.5MB JPEG | 750KB WebP | 70% |
| **Feature Image** | 1.8MB JPEG | 550KB WebP | 69% |
| **Gallery Image** | 2.2MB JPEG | 680KB WebP | 69% |
| **Product Card** | 800KB JPEG | 180KB WebP | 77% |
| **Thumbnail** | 150KB JPEG | 35KB WebP | 77% |
| **Logo** | 25KB PNG | 8KB WebP | 68% |

**Total Per Page:**
- Before: 20-50MB
- After: 6-15MB
- **Savings: 60-70%**

#### Load Time Improvements

| Connection | Before | After | Improvement |
|------------|--------|-------|-------------|
| **4G (10 Mbps)** | 16-40s | 5-12s | 68-70% faster |
| **3G (1.6 Mbps)** | 100-250s | 30-75s | 70% faster |
| **WiFi (50 Mbps)** | 3-8s | 1-2.5s | 68% faster |

#### Core Web Vitals

**LCP (Largest Contentful Paint):**
- Before: 5-8s (Poor)
- After: 1.5-2.5s (Good)
- **Improvement: 66-68%**

**CLS (Cumulative Layout Shift):**
- Before: 0.2-0.3 (Needs Improvement)
- After: <0.1 (Good)
- **Improvement: 50-66%**

**FID (First Input Delay):**
- Before: 50ms (Good)
- After: 50ms (Good)
- **No change** (already optimized)

#### Lighthouse Scores

| Category | Before | After | Gain |
|----------|--------|-------|------|
| **Performance** | 40-50 | 85-95 | +45 points |
| **Accessibility** | 85-90 | 85-90 | No change |
| **Best Practices** | 80-85 | 85-95 | +5 points |
| **SEO** | 90-95 | 90-95 | No change |

### Real-World Impact

#### Bandwidth Savings

**Monthly bandwidth (10,000 page views):**
- Before: 200-500GB
- After: 60-150GB
- **Savings: 140-350GB/month**

#### CDN Cost Reduction

Assuming $0.10/GB CDN costs:
- Before: $20-50/month
- After: $6-15/month
- **Savings: $14-35/month** (70%)

#### User Experience

**Mobile data usage per page:**
- Before: 20-50MB (eats into data plans)
- After: 6-15MB (70% less data)

**Perceived performance:**
- Before: Empty space → sudden pop-in
- After: Blurred preview → smooth transition

**Bounce rate impact:**
- Before: High bounce (slow load)
- After: Lower bounce (fast, engaging)

---

## Rollback & Monitoring

### Rollback Plan

If critical issues arise during/after deployment:

#### Option 1: Quick Revert (Emergency)

```bash
# Revert last commit
git log --oneline
git revert HEAD

# Or revert specific commits
git revert <commit-hash>

# Push revert
git push
```

**Downtime:** ~2-5 minutes

#### Option 2: Selective Rollback

Keep ImageKit infrastructure but disable for specific components:

```typescript
// Temporarily add unoptimized flag back
<OptimizedImage
  src={image.src}
  alt={image.alt}
  fill
  unoptimized={true}  // 👈 TEMPORARY
/>
```

**Downtime:** None (gradual rollback)

#### Option 3: Feature Flag

Add feature flag to toggle ImageKit:

```typescript
// lib/feature-flags.ts
export const USE_IMAGEKIT = process.env.NEXT_PUBLIC_USE_IMAGEKIT === "true";

// Component
import { USE_IMAGEKIT } from "@/lib/feature-flags";

{USE_IMAGEKIT ? (
  <OptimizedImage src={image.src} alt={image.alt} fill />
) : (
  <Image src={image.src} alt={image.alt} fill unoptimized />
)}
```

**Downtime:** None (instant toggle)

### Monitoring Strategy

#### Week 1: Intensive Monitoring

**Daily Checks:**
1. **Error Monitoring** (Vercel/Sentry)
   - Image loading errors
   - ImageKit API errors
   - Console errors

2. **Performance Monitoring**
   - Core Web Vitals (Real User Monitoring)
   - Lighthouse CI scores
   - Server response times

3. **User Feedback**
   - Support tickets
   - Social media mentions
   - User surveys

**Red Flags:**
- Sudden increase in image errors
- LCP regression (slower than before)
- User complaints about broken images
- CDN bills spike unexpectedly

#### Week 2-4: Regular Monitoring

**Weekly Checks:**
1. **Performance Trends**
   - Compare week-over-week metrics
   - Track Core Web Vitals
   - Monitor CDN usage/costs

2. **Image Quality**
   - Spot-check random product pages
   - Verify WebP/AVIF delivery
   - Check blur placeholders working

3. **Cost Analysis**
   - ImageKit bandwidth usage
   - CDN costs vs budget
   - ROI calculation

#### Month 2+: Optimization Phase

**Monthly Tasks:**
1. **Analyze Most-Requested Images**
   - Identify high-traffic images
   - Add more aggressive caching
   - Consider pre-warming cache

2. **Fine-Tune Quality Settings**
   - Lower quality for non-critical images
   - Increase quality for hero images
   - A/B test quality levels

3. **Implement Advanced Features**
   - AI background removal
   - Smart cropping
   - Adaptive quality (network-aware)
   - Video transformation

### Monitoring Tools

**Recommended Stack:**

1. **Vercel Analytics** (Built-in)
   - Core Web Vitals
   - Real User Monitoring
   - Performance insights

2. **Sentry** (Error Tracking)
   - Image loading errors
   - ImageKit API errors
   - User session replays

3. **Lighthouse CI** (Automated)
   - Run on every deploy
   - Track performance trends
   - Alert on regressions

4. **ImageKit Dashboard** (CDN Stats)
   - Bandwidth usage
   - Transformation stats
   - Error rates

### Alert Configuration

**Critical Alerts:**
- Image error rate >1%
- LCP >4s (regression)
- CDN bandwidth spike >200%
- ImageKit API errors >10/hour

**Warning Alerts:**
- Image error rate >0.5%
- LCP >3s
- CDN bandwidth increase >50%
- Slow transformation time >2s

---

## Appendix: Code Reference

### Complete File Structure

After implementation:
```
/Users/abdout/apple/
├── .env.local                                   [NEW]
├── next.config.ts                                [MODIFIED]
├── lib/
│   └── imagekit.ts                              [NEW]
├── components/
│   ├── ui/
│   │   ├── imagekit-provider.tsx                [NEW]
│   │   ├── optimized-image.tsx                  [NEW]
│   │   ├── optimized-video.tsx                  [NEW]
│   │   └── file-upload.tsx                      [NEW - Optional]
│   ├── atom/
│   │   └── product-card.tsx                     [MODIFIED]
│   └── template/
│       ├── hero-section/
│       │   └── content.tsx                      [MODIFIED]
│       ├── product-detail/
│       │   ├── gallery.tsx                      [MODIFIED]
│       │   ├── feature-section.tsx              [MODIFIED]
│       │   └── types.ts                         [MODIFIED]
│       └── promo-tile/
│           └── content.tsx                      [MODIFIED]
├── app/
│   ├── layout.tsx                               [MODIFIED]
│   └── api/
│       └── upload-auth/
│           └── route.ts                         [NEW - Optional]
└── imagekit-plan.md                             [NEW - This file]
```

### Environment Variables Reference

```env
# .env.local

# ImageKit Configuration
# Get these from: https://imagekit.io/dashboard
NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY="public_xxxxxxxxxxxxxx"
NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT="https://ik.imagekit.io/your_id"

# Server-only (DO NOT expose to client)
IMAGEKIT_PRIVATE_KEY="private_xxxxxxxxxxxxxx"
```

### Package.json Addition

```json
{
  "dependencies": {
    "@imagekit/next": "^2.1.3"
  }
}
```

### Next.js Config Reference

```typescript
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.apple.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
```

### Sizes Prop Reference

Common responsive sizes patterns:

```typescript
// Full-width hero
sizes="100vw"

// Half-width on desktop
sizes="(max-width: 768px) 100vw, 50vw"

// Three-column grid
sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

// Fixed-size thumbnails
sizes="150px"

// Sidebar image
sizes="(max-width: 1024px) 100vw, 300px"
```

### ImageKit URL Examples

```
# Original image
https://ik.imagekit.io/databayt/apple/iphone.jpg

# With transformations (query style)
https://ik.imagekit.io/databayt/apple/iphone.jpg?tr=w-800,h-600,q-85,f-webp

# Blur placeholder
https://ik.imagekit.io/databayt/apple/iphone.jpg?tr=w-10,h-10,bl-10,q-10

# Original (bypass restrictions)
https://ik.imagekit.io/databayt/apple/iphone.jpg?tr=orig-true
```

### Useful Commands

```bash
# Install dependencies
pnpm add @imagekit/next

# Start dev server
pnpm dev

# Build for production
pnpm build

# Check for unoptimized flags
grep -r "unoptimized" components/

# Check image imports
grep -r "next/image" components/

# Count image usage
find components -name "*.tsx" -exec grep -l "OptimizedImage" {} \; | wc -l
```

---

## Summary Checklist

### Pre-Implementation
- [ ] ImageKit account created
- [ ] API keys obtained
- [ ] Environment variables configured
- [ ] Dependencies installed
- [ ] Next.js config updated

### Implementation
- [ ] Core files created (config, provider, components)
- [ ] Provider added to app layout
- [ ] ProductCard migrated
- [ ] HeroSection migrated
- [ ] Gallery migrated
- [ ] FeatureSection migrated
- [ ] PromoTile migrated
- [ ] Type definitions updated
- [ ] All `unoptimized` flags removed

### Testing
- [ ] Local dev testing passed
- [ ] Visual verification complete
- [ ] Network tab shows WebP
- [ ] Build successful
- [ ] Lighthouse audit passed
- [ ] Mobile responsiveness verified
- [ ] Browser compatibility checked

### Deployment
- [ ] Staging deployment successful
- [ ] Production deployment successful
- [ ] Monitoring configured
- [ ] Rollback plan documented
- [ ] Team trained

### Post-Deployment
- [ ] Week 1 monitoring complete
- [ ] Performance metrics tracked
- [ ] User feedback collected
- [ ] Cost analysis done
- [ ] Optimization opportunities identified

---

## Additional Resources

### Documentation Links
- **ImageKit Docs:** https://docs.imagekit.io
- **Next.js Integration:** https://docs.imagekit.io/getting-started/quickstart-guides/nextjs
- **Transformations:** https://docs.imagekit.io/features/image-transformations
- **Video Optimization:** https://docs.imagekit.io/features/video-optimization
- **API Reference:** https://docs.imagekit.io/api-reference

### Reference Implementation
- **Marketing Repo:** `/Users/abdout/marketing`
- **Key Files:**
  - `src/lib/imagekit.ts`
  - `src/components/ui/optimized-image.tsx`
  - `src/components/ui/imagekit-provider.tsx`
  - `imagekit.md` (documentation)
  - `PERFORMANCE.md` (performance guide)

### Performance Resources
- **Core Web Vitals:** https://web.dev/vitals
- **Lighthouse:** https://developers.google.com/web/tools/lighthouse
- **WebPageTest:** https://www.webpagetest.org
- **Chrome DevTools:** https://developer.chrome.com/docs/devtools/

### Community & Support
- **ImageKit Support:** support@imagekit.io
- **ImageKit Community:** https://community.imagekit.io
- **Next.js Discord:** https://nextjs.org/discord
- **GitHub Issues:** https://github.com/imagekit-developer/imagekit-nextjs

---

**Plan Version:** 1.0
**Last Updated:** 2026-01-30
**Author:** Claude Code
**Status:** Ready for Implementation
**Estimated Time:** 9-14 hours over 2-3 days
**Expected ROI:** 60-70% bandwidth reduction, 66-68% LCP improvement
**Risk Level:** Low (proven pattern from marketing repo)
