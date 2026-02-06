export interface NavItem {
  label: string
  href: string
  dropdown?: NavDropdown
}

export interface NavDropdown {
  featured?: NavDropdownItem[]
  columns?: NavDropdownColumn[]
}

export interface NavDropdownColumn {
  title?: string
  items: NavDropdownItem[]
}

export interface NavDropdownItem {
  label: string
  href: string
  description?: string
  isNew?: boolean
}
