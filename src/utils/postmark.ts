import { ServerClient } from "postmark"

const apiKey = process.env.POSTMARK_API_KEY!

const client = new ServerClient(apiKey)

export const sendEmail = async (to: string, subject: string, html: string) => {
  const response = await client.sendEmail({
    From: process.env.POSTMARK_SENDER_EMAIL as string,
    To: to,
    Subject: subject,
    HtmlBody: html,
    MessageStream: "outbound"
  })

  return response
}
