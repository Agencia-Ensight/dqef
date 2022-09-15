import { useQuery } from "@apollo/client";

import { GET_USER_NOTIFICATIONS } from "@/services/graphql/user";
import { toUserNotification } from "@/utils/toUser";

export function useUserNotifications(userId: string) {
  const {
    data: rawData,
    loading: isLoading,
    error,
  } = useQuery<{ notification_automations: Record<string, any>[] }>(
    GET_USER_NOTIFICATIONS,
    {
      variables: { userId },
    }
  );

  const data = rawData?.notification_automations.map(toUserNotification);

  return {
    data,
    isLoading,
    error,
  };
}
