export interface SignupType {
  email: string
  password: string
  retypedPassword: string
}

export interface SigninType {
  email: string
  password: string
}

export interface updatePasswordType {
  userId: string
  currentPassword: string
  newPassword: string
  retypedNewPassword: string
}

export interface insuranceType {
  prime: string
  sonarwa: string
  radiant: string
}

export interface supportType {
  equipment: string
  seed: string
  advisor: string
  other: string
}
