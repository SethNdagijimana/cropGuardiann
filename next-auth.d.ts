import "next-auth"

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface User extends UserModel {
    id: number
  }

  interface Session {
    user: {
      /** The user's postal address. */
      id: string
    }
  }
}
