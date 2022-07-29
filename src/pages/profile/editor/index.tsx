import { useState } from "react";
import { EditorCard } from "./components/EditorCard";
import { JobsGoing } from "./components/JobsGoing";
import { Proposals } from "./components/Proposals";
import { JobsDone } from "./components/JobsDone";

function EditorProfile() {
  const [menu, setMenu] = useState("proposals");

  return (
    <>
      <EditorCard onChangeMenu={(m: any) => setMenu(m)} />
      <div>
        {menu === "proposals" && <Proposals />}
        {menu === "jobsOnGoing" && <JobsGoing />}
        {menu === "jobsDone" && <JobsDone />}
      </div>
    </>
  );
}

export { EditorProfile };
