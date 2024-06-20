let notifications: any[] = [];

export const addNotification = (notification: { title: string; message: string }) => {
  console.log("Adding notification:", notification);
  notifications.push(notification);
  console.log("Current notifications:", notifications);
};

export const getNotifications = () => {
  console.log("Retrieving notifications:", notifications);
  return notifications;
};
