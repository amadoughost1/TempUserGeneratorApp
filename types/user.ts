export interface User {
  firstName: string
  lastName: string
  email?: string
  phone?: string
  address?: {
    street: string
    city: string
    postalCode: string
    country: string
  }
  birthDate: string
  gender: string
}

