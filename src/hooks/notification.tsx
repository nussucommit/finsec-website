import { IconCheck, IconX } from "@tabler/icons-react";
import { notifications, NotificationProps } from "@mantine/notifications";

export const useNotification = () => {
  const showSuccess = (props: NotificationProps) => {
    notifications.show({
      ...props,
      color: "green",
      icon: <IconCheck />,
    });
  };

  const showError = (props: NotificationProps) => {
    notifications.show({
      ...props,
      color: "red",
      icon: <IconX />,
    });
  };

  return {
    notifications,
    showSuccess,
    showError,
  };
};
