export type User = {
  id: string;
  collegeId: number;
  courseId: number;
  formationId: number;
};

export type UserNotification = {
  id: string;
  deliveryAt: string;
  jobId: number;
  message: {
    title: string;
    description: string;
  };
  editorName?: string;
  userName: string;
};
