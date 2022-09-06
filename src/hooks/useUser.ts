import { useQuery } from "@apollo/client";

import { GET_USER } from "@/services/graphql/user";
import { toUser } from "@/utils/toUser";
import { User } from "@/types/User";

type IUserProps = {
  onCompleted?: (user: User) => void;
};

export function useUser(id: string, props?: IUserProps) {
  const {
    data: rawData,
    loading: isLoading,
    error,
  } = useQuery(GET_USER, {
    variables: { id },
    onCompleted: (data) => {
      if (props?.onCompleted) {
        props.onCompleted(toUser(data.users_by_pk));
      }
    },
  });

  const data = rawData?.users_by_pk && toUser(rawData.users_by_pk);

  return { data, isLoading, error };
}
