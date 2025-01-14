import {notifications} from "@mantine/notifications";

type NotificationOptions = {
    title: string;
    message?: string;
    color?: string;
    autoClose?: number;
};

export function showNotification({
                                     title,
                                     message,
                                     color = 'blue',
                                     autoClose = 5000,
                                 }: NotificationOptions) {
    notifications.show({
        title,
        message,
        color,
        autoClose,
    });
}