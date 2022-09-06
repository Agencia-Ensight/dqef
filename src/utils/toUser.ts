import { User } from "@/types/User";

export function toUser(dbUser: Record<string, any>): User {
  return {
    id: dbUser.id,
    collegeId: dbUser.college_id,
    formationId: dbUser.formation_id,
    courseId: dbUser.higher_course_id,
  };
}
