import { SigninType, SignupType } from "@/utils/types"

export const signUp = async ({
  email,
  password,
  retypedPassword
}: SignupType) => {
  const response = await fetch(`/api/user/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password, retypedPassword })
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
