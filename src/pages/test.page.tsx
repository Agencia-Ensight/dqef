import { INSERT_JOB } from "@/services/graphql/jobs";
import { useMutation } from "@apollo/client";
import { useState } from "react";

function Test() {
  const [data, setData] = useState("");
  const [createJob, jobData] = useMutation(INSERT_JOB);

  async function handleSubmit() {
    try {
      await createJob({
        variables: {
          date_limit: data,
        },
      });
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <input
        type="data"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <button onClick={handleSubmit}>
        {jobData.loading ? "banana" : "arroz"}
      </button>
    </>
  );
}

export default Test;
