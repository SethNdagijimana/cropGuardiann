import { NextApiRequest, NextApiResponse } from 'next';
import { getNotifications } from '@/lib/notification';
import { NextResponse } from 'next/server';
import { HttpStatusCode } from '@/utils/enums';

export async function GET(req: Request) {
    try {
        const notifications = getNotifications();
        return NextResponse.json(
            {
                success: true,
                message: "Notifications retrieved successfully",
                notifications: notifications
            },
            { status: HttpStatusCode.OK }
        );
    } catch (error) {
        console.error("Internal Server Error:", error);
        return NextResponse.json(
            { error: true, message: "Internal Server Error" },
            { status: HttpStatusCode.INTERNAL_SERVER }
        );
    }
}
