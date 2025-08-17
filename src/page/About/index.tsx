import ListItems from "@/component/ListItems";
import { useId } from "react";

function About() {
  const profileId = useId();

  return (
    <div className="px-[8vw] py-10 w-auto">
      <div className="text-4xl font-mono font-extrabold">ABOUT ME</div>

      <div className="flex py-10 gap-6 items-center w-auto">
        <div className="flex flex-col items-center gap-3">
          <img
            id={profileId}
            className="rounded-full w-60"
            src="https://avatars.githubusercontent.com/u/203302518?v=4"
            alt=""
          />
          <label className="text-xl font-[pretendard] font-semibold" htmlFor={profileId}>윤대웅</label>
        </div>

        <ListItems ulClassName="flex-1" />
      </div>
    </div>
  );
}

export default About;
