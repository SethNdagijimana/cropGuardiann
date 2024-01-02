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
