import { format } from "date-fns";
import { User, UserNotification } from "@/types/User";

export function toUser(dbUser: Record<string, any>): User {
  return {
    id: dbUser.id,
    collegeId: dbUser.college_id,
    formationId: dbUser.formation_id,
    courseId: dbUser.higher_course_id,
  };
}

export function toUserNotification(
  dbUserNotification: Record<string, any>
): UserNotification {
  const rawDesc = dbUserNotification.notification_type.message as string;

  const description = rawDesc
    .replaceAll("##redatornome", dbUserNotification.user.name)
    .replaceAll("##estudantenome", dbUserNotification.user.name);

  const deliveryAt = format(
    new Date(dbUserNotification.delivery_at),
    "dd/MM/yyyy HH:mm"
  );

  return {
    id: dbUserNotification.id,
    deliveryAt,
    message: {
      description,
      title: dbUserNotification.notification_type.name,
    },
    jobId: dbUserNotification.job_id,
    editorName: dbUserNotification.job?.userByEditorId?.name,
    userName: dbUserNotification.user.name,
  };
}
