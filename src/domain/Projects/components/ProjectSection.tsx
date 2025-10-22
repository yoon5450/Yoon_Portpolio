import relifeThumb from "@/assets/relifeThumb.png";
import pickItBookThumb from "@/assets/pickitbookthumb.png";
import musicMateThumb from "@/assets/musicmatethumb.png";
import portpolioThumb from "@/assets/portpoliothumb.png";
import ProjectItem from "./ProjectItem";

interface ProjectType {
  thumbnail: string;
  title: string;
  desc: string;
  period?: string;
  teammate?: string;
  deployUrl?: string;
  youtubeUrl?: string;
}

const projects: ProjectType[] = [
  {
    thumbnail: relifeThumb,
    title: "Re:Life",
    desc: "AI 평행우주 시나리오 조회 플랫폼",
    period: "2025-09-15 ~ 2025-10-16 (4주) 진행",
    teammate: "프론트엔드팀 3명-백엔드팀 5명",
    deployUrl: "https://relife.kr",
    youtubeUrl: "",
  },
  {
    thumbnail: pickItBookThumb,
    title: "PickItBook",
    desc: "미션 기반 독서 커뮤니티",
    period: "2025-08-22 ~ 2025-09-08 (2.5주) 진행",
    teammate: "프론트팀 4명",
    deployUrl: "https://pick-it-book.vercel.app/",
  },
  {
    thumbnail: musicMateThumb,
    title: "MusicMate",
    desc: "음악 공유 실시간 채팅 SNS",
    period: "2025-07-22 ~ 2025-08-06 (2주) 진행",
    teammate: "프론트팀 4명",
    deployUrl: "https://music-mate-kappa.vercel.app/",
  },
  {
    thumbnail: portpolioThumb,
    title: "Portpolio",
    desc: "포트폴리오 사이트",
    period: "2025-10-20 ~ 진행중",
    teammate: "개인 프로젝트",
    deployUrl: "https://www.yoondaewoong.shop/",
  },
];

function ProjectSection() {
  return (
    <div className="relative py-20 bg-gray-50 w-full flex flex-col px-[8%]">
      <h1 className="font-family-perm text-3xl font-normal">Projects</h1>
      <ul className="p-10 grid grid-cols-2 gap-10 place-items-center">
        {projects.map(
          ({
            thumbnail,
            title,
            desc,
            period,
            teammate,
            deployUrl,
            youtubeUrl,
          }) => (
            <ProjectItem
              key={title}
              thumbnail={thumbnail}
              title={title}
              desc={desc}
              period={period}
              teammate={teammate}
              deployUrl={deployUrl}
              youtubeUrl={youtubeUrl}
            />
          )
        )}
      </ul>
    </div>
  );
}
export default ProjectSection;
