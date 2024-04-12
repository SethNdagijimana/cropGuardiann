// import { PrismaClient } from '@prisma/client';
// import { NextApiRequest, NextApiResponse } from 'next';

// const prisma = new PrismaClient();

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method Not Allowed' });
//   }

//   const { userEmail, feedback } = req.body;

//   try {
//     // Check if the user exists
//     const user = await prisma.user.findUnique({
//       where: { email: userEmail.toLowerCase() },
//     });

//     if (!user) {
//       return res.status(404).json({ success: false, error: 'User not found' });
//     }

//     // Save feedback to the database
//     const feedbackRecord = await prisma.feedback.create({
//       data: {
//         userEmail: user.email,
//         message: feedback,
//       },
//     });

//     res.status(201).json({ success: true, feedback: feedbackRecord });
//   } catch (error) {
//     console.error('Error saving feedback:', error);
//     res.status(500).json({ success: false, error: 'Internal Server Error' });
//   }
// }



import { prisma } from "@/lib/prisma"
import { HttpStatusCode } from "@/utils/enums"
import { hash } from "bcrypt"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const {userEmail, feedback,  } = await req.json()

  // Check if all fields are sent from client
  if ( !userEmail || !feedback) {
    return NextResponse.json(
      { error: true, message: "all-fields are required" },
      { status: HttpStatusCode.BAD_REQUEST }
    )
  }


  try {
    // Check if Email already exists in DB
    
    const userWithEmail = await prisma.user.findUnique({
               where: { email: userEmail.toLowerCase() },
             });

    if (!userWithEmail) {
      return NextResponse.json(
        { error: true, message: "user does not exists" },
        { status: HttpStatusCode.BAD_REQUEST }
      )
    }


    // Save user in DB
    const userFeedback = await prisma.feedback.create({
      data: {
        userEmail,
        feedback,
      }
    })

    if (!userFeedback) {
      return NextResponse.json(
        {
          error: true,
          message: "error saving feeback"
        },
        { status: HttpStatusCode.BAD_REQUEST }
      )
    }

    // await generateVerificationEmail(user.id, user.email, lang, true)

    return NextResponse.json(
      { success: true, message: "Your FeedBack recieved successfully" },
      { status: HttpStatusCode.OK }
    )
  } catch (error) {
    return NextResponse.json(
      { error: true, message: "Internal-Server error" },
      { status: HttpStatusCode.INTERNAL_SERVER }
    )
  }
}
