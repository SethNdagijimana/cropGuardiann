import jwt, { JwtPayload } from "jsonwebtoken"

interface SignOption {
  expiresIn?: string | number
}

const DEFAULT_SIGN_OPTION: SignOption = {
  expiresIn: "1h"
}

export function signJwtAccessToken(
  payload: JwtPayload,
  options: SignOption = DEFAULT_SIGN_OPTION
) {
  const secret_key = process.env.NEXTAUTH_SECRET
  const token = jwt.sign(payload, secret_key!, options)
  return token
}

export function verifyJwt(token: string) {
  try {
    const secret_key = process.env.NEXTAUTH_SECRET
    const decode = jwt.verify(token, secret_key!)

    return decode as JwtPayload
  } catch (error) {
    return null
  }
}
