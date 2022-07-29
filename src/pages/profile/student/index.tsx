import { useState } from "react";
import { StudentCard } from "./components/StudentCard";
import { JobsGoing } from "./components/JobsGoing";
import { JobsPosted } from "./components/JobsPosted";
import { JobsDone } from "./components/JobsDone";

function StudentProfile() {
  const [menu, setMenu] = useState("proposals");

  return (
    <>
      <StudentCard onChangeMenu={(m: any) => setMenu(m)} />
      <div>
        {menu === "proposals" && <JobsPosted />}
        {menu === "jobsOnGoing" && <JobsGoing />}
        {menu === "jobsDone" && <JobsDone />}
      </div>
    </>
  );
}

export { StudentProfile };
