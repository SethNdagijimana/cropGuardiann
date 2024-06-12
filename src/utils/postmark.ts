import { ServerClient } from "postmark"

const apiKey = process.env.POSTMARK_API_KEY!

const client = new ServerClient(apiKey)

export const sendEmail = async (to: string, subject: string, html: string) => {
  try {
    const response = await client.sendEmail({
      From: process.env.POSTMARK_SENDER_EMAIL as string,
      To: to,
      Subject: subject,
      HtmlBody: html,
      MessageStream: "outbound"
    })
    console.log("Email sent successfully:", response)
    return response
  } catch (error) {
    console.error("Error sending email:", error)
    throw error
  }
}
