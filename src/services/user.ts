import { SigninType, SignupType, updatePasswordType } from "@/utils/types"
import { InsuranceType } from "@prisma/client"


export const signUp = async ({
  name,
  email,
  password,
  retypedPassword
}: SignupType) => {
  const response = await fetch(`/api/user/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password, retypedPassword })
  })

  const result = await response.json()

  return result
}

export const logIn = async ({ email, password }: SigninType) => {
  const response = await fetch(process.env.APP_URL + `/api/user/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  })

  const result = await response.json()

  return result
}

export const changePassword = async ({
  userId,
  currentPassword,
  newPassword,
  retypedNewPassword
}: updatePasswordType) => {
  const response = await fetch(`/api/user/change-password`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId,
      currentPassword,
      newPassword,
      retypedNewPassword
    })
  })

  const result = await response.json()

  return result
}



export const getUser = async (userId: string) => {
  const response = await fetch(process.env.APP_URL + `/api/user/get`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId })
  })

  const result = await response.json()

  return result
}

export const getSupport = async (
  userName: string,
  userEmail: string,
  phoneNumber: string,
  location: string,
  userId: string,
  insurance: string,
  support: string,
  message: string
) => {
  const response = await fetch(process.env.APP_URL + `/api/user/get-support`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userName,
      userEmail,
      phoneNumber,
      location,
      userId,
      insurance,
      support,
      message
    })
  })
  const result = await response.json()

  return result
}


export const getInsurance = async (
  name: string,
  email: string,
  contact: string,
  userId: string,
  insurance: string
 
) => {
  const response = await fetch(process.env.APP_URL + `/api/user/insurance`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name,
      email,
      contact,
      userId,
      insurance
     
    })
  })
  const result = await response.json()

  return result
}




export const userFeedback = async (userEmail: string, feedback: string) => {
  const response = await fetch(process.env.APP_URL + `/api/user/feedback`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userEmail, feedback })
  })

  const result = await response.json()

  return result
}
