"use client"

import React, { useEffect, useState } from 'react';

type NotificationType = {
    title: string,
    message: string
}

const Notification = () => {
    const [notifications, setNotifications] = useState<NotificationType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const response = await fetch("/api/user/notification");
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
                const data = await response.json();
                console.log('API response:', data);
                if (data.notifications) {
                    setNotifications(data.notifications);
                } else {
                    console.error("API response does not contain 'notifications'");
                }
            } catch (error) {
                console.error("Failed to fetch notifications:", error);
                setError("Failed to fetch notifications");
            } finally {
                setLoading(false);
            }
        };

        fetchNotifications();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <>
            <div className="flex items-center justify-between">
                <h3 className="font-bold font-bricolage">Notifications</h3>
                <p className="cursor-pointer" onClick={() => setNotifications([])}>Mark all as read</p>
            </div>

            {notifications.length === 0 ? (
                <div>No notifications available</div>
            ) : (
                notifications.map((notification, index) => (
                    <div key={index} className="mt-8 border border-1 border-[#DFEAF3] p-2 rounded-2xl w-[500px] space-y-2">
                        <p className="font-bold">{notification.title}</p>
                        <p>{notification.message}</p>
                    </div>
                ))
            )}
        </>
    );
};

export default Notification;
