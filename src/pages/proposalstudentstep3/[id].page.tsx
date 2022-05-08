import { useRouter } from "next/router";

import { Job, JobByPk, JOB_QUERY } from "../../queries/jobs";
import { useEffect, useState } from "react";
import { apolloClient } from "../../services/api";
import proposalstudentstep3 from "./index.page";

export default function editjobstep3() {
  const { query, isReady } = useRouter();
  const [job, setJob] = useState<Job | undefined>(undefined);

  useEffect(() => {
    if (isReady) {
      apolloClient.query({
        query: JOB_QUERY,
        variables: {
          id: query.id
        }
      }).then(({ data }: { data: JobByPk }) => {
        console.log(data.jobs_by_pk);
        setJob(data.jobs_by_pk);
      })
    }
  }, [query, isReady]);

  return proposalstudentstep3(job);
}

editjobstep3.auth = true;