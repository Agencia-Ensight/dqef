import { useQuery } from "@apollo/client";
import {differenceInDays} from 'date-fns';

import { GET_JOB_NOTIFICATIONS_DEADLINES } from "@/services/graphql/jobs";



export function useJobNotificationsDeadline() {
  const {
    data: rawData,
    loading: isLoading,
    error,refetch
  } = useQuery<{ notification_deadlines: {id: number}[] }>(GET_JOB_NOTIFICATIONS_DEADLINES, {skip: true});

  async function getResolutionDay(deliveryDate: Date) {
    const resolutionDay = differenceInDays(deliveryDate, new Date());
    const fetch = await refetch({resolutionDay})
    const notificationId = fetch?.data.notification_deadlines[0].id;
    return notificationId;
  }

  const data = rawData?.notification_deadlines[0].id;

  return { data, isLoading, error, getResolutionDay };
}
