import { type LucideProps } from "lucide-react"

// Icons for the Apple website clone
// Categories: Brand, Navigation, Products, OS, Features, Services, Shop, UI

export const Icons = {
  logo: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
      <path d="M10 2c1 .5 2 2 2 5" />
    </svg>
  ),
  apple: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 814 1000"
      fill="currentColor"
      {...props}
    >
      <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 781.5 0 628.1 0 482.3 0 308.8 108.7 217.5 215.5 217.5c65.3 0 119.6 42.8 160.5 42.8 39 0 99.9-45.4 174.3-45.4 28.2 0 129.5 2.5 196.3 95.6-5.2 3.2-117.5 68.4-117.5 181.4zm-225-290c31.3-36.9 53.4-88.2 53.4-139.5 0-7.1-.6-14.3-1.9-20.1-50.8 1.9-110.9 33.8-147.3 76.5-28.9 32.6-55.3 83.9-55.3 136.1 0 7.8.6 15.6 1.3 18.1 2.5.6 6.4 1.3 10.2 1.3 45.6 0 102.6-30.7 139.6-72.4z" />
    </svg>
  ),
  appleSearch: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15 15"
      fill="currentColor"
      {...props}
    >
      <path d="M14.5 14.5l-4-4m-4 1.5a5.5 5.5 0 110-11 5.5 5.5 0 010 11z" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" />
    </svg>
  ),
  appleBag: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 44"
      fill="currentColor"
      {...props}
    >
      <path d="M11.35 15.17c0-3.03-2.48-5.17-5.35-5.17S.65 12.14.65 15.17h2.2c0-1.83 1.5-3.17 3.15-3.17s3.15 1.34 3.15 3.17h2.2zm.5 1.5H.15l1.45 17.17c.18 2.13 1.87 3.16 3.5 3.16h3.8c1.63 0 3.32-1.03 3.5-3.16l1.45-17.17z" />
    </svg>
  ),
  chevronRight: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 7 10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M1 1l4.5 4L1 9" />
    </svg>
  ),
  chevronDown: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 10 7"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M1 1l4 4.5L9 1" />
    </svg>
  ),
  hamburger: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 18"
      fill="currentColor"
      {...props}
    >
      <rect y="4" width="18" height="1.5" rx="0.75" />
      <rect y="12.5" width="18" height="1.5" rx="0.75" />
    </svg>
  ),
  close: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 18"
      fill="currentColor"
      {...props}
    >
      <path d="M10.06 9l5.47-5.47a.75.75 0 00-1.06-1.06L9 7.94 3.53 2.47a.75.75 0 00-1.06 1.06L7.94 9l-5.47 5.47a.75.75 0 101.06 1.06L9 10.06l5.47 5.47a.75.75 0 001.06-1.06L10.06 9z" />
    </svg>
  ),
  gitHub: (props: LucideProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      />
    </svg>
  ),
  spinner: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),
  // Product category icons
  iphone: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 44 44"
      fill="currentColor"
      {...props}
    >
      <path d="M29.5 3h-15A3.5 3.5 0 0011 6.5v31a3.5 3.5 0 003.5 3.5h15a3.5 3.5 0 003.5-3.5v-31A3.5 3.5 0 0029.5 3zm-7.5 36a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm8-5H14V8h16v26z" />
    </svg>
  ),
  mac: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 44 44"
      fill="currentColor"
      {...props}
    >
      <path d="M37 5H7a3 3 0 00-3 3v23a3 3 0 003 3h11v3H13v2h18v-2h-5v-3h11a3 3 0 003-3V8a3 3 0 00-3-3zM7 29V8h30v21H7z" />
    </svg>
  ),
  ipad: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 44 44"
      fill="currentColor"
      {...props}
    >
      <path d="M35 3H9a3 3 0 00-3 3v32a3 3 0 003 3h26a3 3 0 003-3V6a3 3 0 00-3-3zm-13 36a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm13-5H9V7h26v27z" />
    </svg>
  ),
  watch: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 44 44"
      fill="currentColor"
      {...props}
    >
      <path d="M30 9h-2V5a2 2 0 00-2-2h-8a2 2 0 00-2 2v4h-2a4 4 0 00-4 4v18a4 4 0 004 4h2v4a2 2 0 002 2h8a2 2 0 002-2v-4h2a4 4 0 004-4V13a4 4 0 00-4-4zm0 22H14V13h16v18z" />
    </svg>
  ),
  airpods: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 44 44"
      fill="currentColor"
      {...props}
    >
      <path d="M13 18c-3.3 0-6 2.7-6 6v10a3 3 0 006 0V24c0-1.1.9-2 2-2s2 .9 2 2v10a3 3 0 006 0V24c0-3.3-2.7-6-6-6h-4zm18 0c-3.3 0-6 2.7-6 6v10a3 3 0 006 0V24c0-1.1.9-2 2-2s2 .9 2 2v10a3 3 0 006 0V24c0-3.3-2.7-6-6-6h-4z" />
    </svg>
  ),
  tv: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 44 44"
      fill="currentColor"
      {...props}
    >
      <path d="M39 5H5a3 3 0 00-3 3v23a3 3 0 003 3h34a3 3 0 003-3V8a3 3 0 00-3-3zM5 29V8h34v21H5zm17 8a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
    </svg>
  ),
  vision: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 44 44"
      fill="currentColor"
      {...props}
    >
      <path d="M40 16H4a2 2 0 00-2 2v8a2 2 0 002 2h36a2 2 0 002-2v-8a2 2 0 00-2-2zm-28 8a3 3 0 110-6 3 3 0 010 6zm20 0a3 3 0 110-6 3 3 0 010 6z" />
    </svg>
  ),
  // UI icons
  play: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 44 44"
      fill="currentColor"
      {...props}
    >
      <path d="M14 9v26l22-13z" />
    </svg>
  ),
  plus: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 18"
      fill="currentColor"
      {...props}
    >
      <path d="M10 2H8v6H2v2h6v6h2v-6h6V8h-6V2z" />
    </svg>
  ),
  minus: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 18"
      fill="currentColor"
      {...props}
    >
      <path d="M2 8h14v2H2z" />
    </svg>
  ),
  check: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M2 9l5 5L16 4" />
    </svg>
  ),
  externalLink: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 18"
      fill="currentColor"
      {...props}
    >
      <path d="M15 10v4a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h4v2H4v9h9v-4h2zm-4-8v2h2.59l-6.3 6.29 1.42 1.42L15 5.41V8h2V2h-6z" />
    </svg>
  ),
  compare: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 44 44"
      fill="currentColor"
      {...props}
    >
      <path d="M38 6H6v32h32V6zM21 34H10V10h11v24zm13 0H25V10h9v24z" />
    </svg>
  ),
  // OS Icons
  ios: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 44 44"
      fill="currentColor"
      {...props}
    >
      <path d="M22 4c-9.94 0-18 8.06-18 18s8.06 18 18 18 18-8.06 18-18S31.94 4 22 4zm0 32c-7.73 0-14-6.27-14-14s6.27-14 14-14 14 6.27 14 14-6.27 14-14 14zm0-24a10 10 0 100 20 10 10 0 000-20z" />
    </svg>
  ),
  macos: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 44 44"
      fill="currentColor"
      {...props}
    >
      <path d="M37 5H7a3 3 0 00-3 3v23a3 3 0 003 3h11v3H13v2h18v-2h-5v-3h11a3 3 0 003-3V8a3 3 0 00-3-3zM7 29V8h30v21H7z" />
    </svg>
  ),
  watchos: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 44 44"
      fill="currentColor"
      {...props}
    >
      <path d="M30 9h-2V5a2 2 0 00-2-2h-8a2 2 0 00-2 2v4h-2a4 4 0 00-4 4v18a4 4 0 004 4h2v4a2 2 0 002 2h8a2 2 0 002-2v-4h2a4 4 0 004-4V13a4 4 0 00-4-4zm0 22H14V13h16v18z" />
    </svg>
  ),
  ipados: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 44 44"
      fill="currentColor"
      {...props}
    >
      <path d="M35 3H9a3 3 0 00-3 3v32a3 3 0 003 3h26a3 3 0 003-3V6a3 3 0 00-3-3zm-13 36a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm13-5H9V7h26v27z" />
    </svg>
  ),
  visionos: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 44 44"
      fill="currentColor"
      {...props}
    >
      <path d="M40 16H4a2 2 0 00-2 2v8a2 2 0 002 2h36a2 2 0 002-2v-8a2 2 0 00-2-2zm-28 8a3 3 0 110-6 3 3 0 010 6zm20 0a3 3 0 110-6 3 3 0 010 6z" />
    </svg>
  ),
  // Feature Icons
  appleIntelligence: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 44 44"
      fill="currentColor"
      {...props}
    >
      <path d="M22 4l3 8 8 3-8 3-3 8-3-8-8-3 8-3 3-8zm-10 20l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5zm20 4l1.5 4 4 1.5-4 1.5-1.5 4-1.5-4-4-1.5 4-1.5 1.5-4z" />
    </svg>
  ),
  siri: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 44 44"
      fill="currentColor"
      {...props}
    >
      <path d="M22 6c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16S30.8 6 22 6zm0 28c-6.6 0-12-5.4-12-12s5.4-12 12-12 12 5.4 12 12-5.4 12-12 12z" />
      <circle cx="16" cy="22" r="2" />
      <circle cx="22" cy="22" r="2" />
      <circle cx="28" cy="22" r="2" />
    </svg>
  ),
  privacy: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 44 44"
      fill="currentColor"
      {...props}
    >
      <path d="M22 4L8 10v10c0 9.4 5.9 17.6 14 20 8.1-2.4 14-10.6 14-20V10L22 4zm0 18h10c-.9 6.4-4.8 11.9-10 14.1V22h-10V12l10-5v15z" />
    </svg>
  ),
  accessibility: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 44 44"
      fill="currentColor"
      {...props}
    >
      <circle cx="22" cy="10" r="4" />
      <path d="M36 18H8v4h10v6l-4 12h5l3-9 3 9h5l-4-12v-6h10v-4z" />
    </svg>
  ),
  // Service Icons
  appleMusic: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 44 44"
      fill="currentColor"
      {...props}
    >
      <path d="M32 6v22c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6c1.1 0 2.1.3 3 .8V12l-14 3v17c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6c1.1 0 2.1.3 3 .8V8l20-5v3z" />
    </svg>
  ),
  appleTVPlus: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 44 44"
      fill="currentColor"
      {...props}
    >
      <path d="M39 5H5a3 3 0 00-3 3v23a3 3 0 003 3h34a3 3 0 003-3V8a3 3 0 00-3-3zM5 29V8h34v21H5z" />
      <path d="M17 15v12l10-6-10-6z" />
    </svg>
  ),
  appleArcade: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 44 44"
      fill="currentColor"
      {...props}
    >
      <path d="M38 12H6a4 4 0 00-4 4v12a4 4 0 004 4h32a4 4 0 004-4V16a4 4 0 00-4-4zM14 26a4 4 0 110-8 4 4 0 010 8zm8-2h-2v-4h2v4zm12 2a2 2 0 110-4 2 2 0 010 4zm4-4a2 2 0 110-4 2 2 0 010 4z" />
    </svg>
  ),
  appleFitness: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 44 44"
      fill="currentColor"
      {...props}
    >
      <path d="M22 6c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm-8 32l4-14-4-6h2l4 6 4-6h2l-4 6 4 14h-4l-2-8-2 8h-4z" />
    </svg>
  ),
  appleNews: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 44 44"
      fill="currentColor"
      {...props}
    >
      <path d="M36 6H8a4 4 0 00-4 4v24a4 4 0 004 4h28a4 4 0 004-4V10a4 4 0 00-4-4zM8 34V10h12v24H8zm26 0H24V22h10v12zm0-14H24v-8h10v8z" />
    </svg>
  ),
  iCloud: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 44 44"
      fill="currentColor"
      {...props}
    >
      <path d="M35 20c-.5 0-1 .1-1.5.1C32.5 14.5 27.7 10 22 10c-6.1 0-11.1 4.6-11.9 10.5C5.5 21 2 24.8 2 29.5 2 34.7 6.3 39 11.5 39h23c5.2 0 9.5-4.3 9.5-9.5S40.2 20 35 20z" />
    </svg>
  ),
  wallet: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 44 44"
      fill="currentColor"
      {...props}
    >
      <path d="M36 10H8a4 4 0 00-4 4v16a4 4 0 004 4h28a4 4 0 004-4V14a4 4 0 00-4-4zm0 20H8V14h28v16z" />
      <circle cx="32" cy="22" r="3" />
    </svg>
  ),
  appleOne: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 44 44"
      fill="currentColor"
      {...props}
    >
      <path d="M22 4C12 4 4 12 4 22s8 18 18 18 18-8 18-18S32 4 22 4zm0 32c-7.7 0-14-6.3-14-14S14.3 8 22 8s14 6.3 14 14-6.3 14-14 14z" />
      <path d="M24 13h-4v18h4V13zm-2 2l5 7-5 7V15z" />
    </svg>
  ),
  // Shop Icons
  giftCard: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 44 44"
      fill="currentColor"
      {...props}
    >
      <path d="M38 14h-5.4c.9-.9 1.4-2.1 1.4-3.5 0-2.8-2.2-5-5-5-1.9 0-3.5 1-4.4 2.6L22 12l-2.6-3.9C18.5 6.5 16.9 5.5 15 5.5c-2.8 0-5 2.2-5 5 0 1.3.5 2.6 1.4 3.5H6a4 4 0 00-4 4v18a4 4 0 004 4h32a4 4 0 004-4V18a4 4 0 00-4-4zM29 9.5c1.1 0 2 .9 2 2s-.9 2-2 2h-3l1.5-2.3c.4-.7 1.1-1.7 1.5-1.7zm-14 0c.4 0 1.1 1 1.5 1.7L18 13.5h-3c-1.1 0-2-.9-2-2s.9-2 2-2zM6 36V18h32v18H6z" />
      <path d="M20 22v10h4V22h-4z" />
    </svg>
  ),
  tradeIn: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 44 44"
      fill="currentColor"
      {...props}
    >
      <path d="M22 4C12 4 4 12 4 22s8 18 18 18 18-8 18-18S32 4 22 4zm0 32c-7.7 0-14-6.3-14-14S14.3 8 22 8s14 6.3 14 14-6.3 14-14 14z" />
      <path d="M28 18l-6-6v4c-5.5 0-10 4.5-10 10h4c0-3.3 2.7-6 6-6v4l6-6z" />
      <path d="M32 22c0-3.3-2.7-6-6-6v4l-6-6 6-6v4c5.5 0 10 4.5 10 10h-4z" />
    </svg>
  ),
  financing: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 44 44"
      fill="currentColor"
      {...props}
    >
      <path d="M22 4C12 4 4 12 4 22s8 18 18 18 18-8 18-18S32 4 22 4zm0 32c-7.7 0-14-6.3-14-14S14.3 8 22 8s14 6.3 14 14-6.3 14-14 14z" />
      <path d="M24 18h-4c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zm-4 6v-4h4v4h-4z" />
      <path d="M22 12v2m0 16v2m8-10h-2m-14 0h-2" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  delivery: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 44 44"
      fill="currentColor"
      {...props}
    >
      <path d="M40 20l-6-8H26V8H4v24h4c0 2.2 1.8 4 4 4s4-1.8 4-4h12c0 2.2 1.8 4 4 4s4-1.8 4-4h4v-8zm-28 12a2 2 0 110-4 2 2 0 010 4zm16-12h-2v-8h4l4.5 6H28v2zm4 12a2 2 0 110-4 2 2 0 010 4z" />
    </svg>
  ),
  // Additional UI Icons
  arrowRight: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 9h12m-5-5l5 5-5 5" />
    </svg>
  ),
  arrowLeft: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 9H3m5-5l-5 5 5 5" />
    </svg>
  ),
  heart: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 44 44"
      fill="currentColor"
      {...props}
    >
      <path d="M22 38l-2.2-2C9.8 27 4 21.8 4 15.5 4 10.5 8 6.5 13 6.5c2.8 0 5.5 1.3 7.2 3.4 1.7-2.1 4.4-3.4 7.2-3.4 5 0 9 4 9 9 0 6.3-5.8 11.5-15.8 20.5L22 38z" />
    </svg>
  ),
  star: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 44 44"
      fill="currentColor"
      {...props}
    >
      <path d="M22 4l4.9 14.9H42l-12.2 8.9 4.7 14.5L22 33.4l-12.5 8.9 4.7-14.5L2 18.9h15.1L22 4z" />
    </svg>
  ),
  share: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 44 44"
      fill="currentColor"
      {...props}
    >
      <path d="M32 28c-1.8 0-3.4.7-4.6 1.9L17 24.4c.1-.5.2-1 .2-1.4s-.1-.9-.2-1.4l10.4-5.5c1.2 1.2 2.8 1.9 4.6 1.9 3.6 0 6.5-2.9 6.5-6.5S35.6 5 32 5s-6.5 2.9-6.5 6.5c0 .5.1.9.2 1.4L15.3 18.4c-1.2-1.2-2.8-1.9-4.6-1.9-3.6 0-6.5 2.9-6.5 6.5s2.9 6.5 6.5 6.5c1.8 0 3.4-.7 4.6-1.9l10.4 5.5c-.1.5-.2 1-.2 1.4 0 3.6 2.9 6.5 6.5 6.5s6.5-2.9 6.5-6.5S35.6 28 32 28z" />
    </svg>
  ),
  home: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 44 44"
      fill="currentColor"
      {...props}
    >
      <path d="M22 6L4 20h6v18h8V28h8v10h8V20h6L22 6z" />
    </svg>
  ),
}
