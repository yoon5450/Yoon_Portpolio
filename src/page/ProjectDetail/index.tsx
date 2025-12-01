import TroubleShootingItem from "@/domain/Projects/components/TroubleShootingItem";
import { PROJECTS } from "@/domain/Projects/constants";
import SkillTag from "@/domain/Skills/components/SkillTag";
import { skillIcons } from "@/domain/Skills/constants";
import { Tooltip } from "@/share/components/ToolTip";
import { getYouTubeEmbedUrl } from "@/utils/getYouTubeEmbedUrl";
import tw from "@/utils/tw";
import { useState } from "react";
import { AiOutlineLink } from "react-icons/ai";
import { useParams } from "react-router";

function ProjectDetail() {
  const { projectName } = useParams();
  const project = PROJECTS.find((p) => p.title === projectName);

  const [showSkillReason, setShowSkillReason] = useState(false);

  if (!project) return <div>프로젝트를 찾을 수 없습니다.</div>;

  return (
    <div className="max-w-4xl mx-auto p-8 pt-15">
      <div className="mb-8">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-64 object-cover rounded-b-md mb-4"
        />
        <h1 className="text-4xl font-bold flex items-center gap-2 justify-between">
          {project.title}
          <div className="flex gap-2 items-center">
            <span
              className={tw(
                "text-sm text-gray-500",
                project.deployStatus === "배포 중"
                  ? "text-green-400"
                  : "text-red-400"
              )}
            >
              {project.deployStatus}
            </span>

            {project.deployUrl && (
              <Tooltip
                contents="배포 링크로 이동"
                className="bg-gray-900/80 text-white max-w-40 p-2 z-20 rounded-md"
              >
                <button
                  type="button"
                  className="cursor-pointer flex gap-2 hover:text-gray-400 duration-100"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(project.deployUrl, "newWindow");
                  }}
                  name="배포 링크로 이동"
                >
                  <AiOutlineLink size={24} />
                </button>
              </Tooltip>
            )}
          </div>
        </h1>
        <p className="text-xl text-gray-600 mb-2">{project.desc}</p>
        <div className="flex gap-4 text-sm text-gray-500">
          <span>{project.period}</span>
          <div className="w-0.5 bg-gray-500" />
          <span>{project.teammate}</span>
        </div>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-2">프로젝트 개요</h2>
          <p className="text-gray-700 leading-relaxed">{project.background}</p>
        </section>

        {project.youtubeUrl && (
          <section>
            <h2 className="text-2xl font-semibold mb-2">시연 영상</h2>
            <iframe
              width="100%"
              height="400"
              src={getYouTubeEmbedUrl(project.youtubeUrl)}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </section>
        )}

        {project.architecture && (
          <section>
            <h2 className="text-2xl font-semibold mb-2">프로젝트 아키텍쳐</h2>
            <img src={project.architecture} alt={`${project.title} 아키텍처`} />
          </section>
        )}

        {project.teamFlag && (
          <section>
            <h2 className="text-2xl font-semibold mb-2">팀 규칙</h2>
            <ul className="list-inside flex flex-col gap-2">
              {project.teamFlag.map((flag) => (
                <li
                  key={flag}
                  className="text-lg text-gray-700 p-1 border-b border-amber-400 w-fit"
                >
                  {flag}
                </li>
              ))}
            </ul>
          </section>
        )}

        {project.skills && (
          <section>
            <h2 className="text-2xl font-semibold mb-2">기술 스택</h2>
            <div className="flex gap-2 flex-wrap mb-2">
              {project.skills?.map((skill) => (
                <SkillTag key={skill} name={skill} />
              ))}
            </div>
            {project.skillReason && (
              <button
                className="text-sm text-gray-500 w-full flex justify-center items-center p-2 border border-gray-500 rounded-md"
                onClick={() => setShowSkillReason(!showSkillReason)}
              >
                {showSkillReason
                  ? "기술 선택 배경 닫기"
                  : "기술 선택 배경 보기"}
              </button>
            )}
            {showSkillReason && (
              <div className="flex flex-col gap-4 border border-t-0 p-2 border-gray-500 rounded-b-md">
                {project.skillReason?.map((item, index) => (
                  <div key={index} className="flex flex-col gap-2 ">
                    <div className="flex items-center gap-2">
                      {skillIcons[item.skill.toLowerCase()]("w-6 h-6")}
                      <div className="w-0.5 bg-gray-500 h-4" />
                      <SkillTag key={`skill-${item.skill}`} name={item.skill} />
                    </div>
                    <p className="text-gray-700">{item.reason}</p>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {project.charged && (
          <section>
            <h2 className="text-2xl font-semibold mb-4">담당 업무</h2>
            <div className="space-y-4">
              {project.charged?.map((item, index) => (
                <div key={index} className="border-l-4 border-amber-400 pl-4">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {project.achievements && (
          <section>
            <h2 className="text-2xl font-semibold mb-4">핵심 성과</h2>
            <ul className="list-inside flex flex-col gap-2 list-decimal">
              {project.achievements.map((achievement) => (
                <li
                  key={achievement}
                  className="text-l p-2 border-b min-h-12 leading-6 border-amber-400"
                >
                  {achievement}
                </li>
              ))}
            </ul>
          </section>
        )}

        {project.troubleShootings && (
          <section>
            <h2 className="text-2xl font-semibold mb-4">문제 해결</h2>
            <ul className="list-inside flex flex-col gap-2 list-decimal">
              {project.troubleShootings.map((troubleShooting) => (
                <TroubleShootingItem
                  key={troubleShooting.title}
                  title={troubleShooting.title}
                  background={troubleShooting.background}
                  solution={troubleShooting.solution}
                  result={troubleShooting.result}
                  thumnail={troubleShooting.thumnail}
                />
              ))}
            </ul>
          </section>
        )}

        <section>
          <h2 className="text-2xl font-semibold mb-4">링크</h2>
          <div className="flex gap-4">
            {project.deployUrl && (
              <a
                href={project.deployUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 duration-100"
              >
                배포 사이트
              </a>
            )}
            {project.tistoryUrl && (
              <a
                href={project.tistoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-400 duration-100"
              >
                블로그 회고
              </a>
            )}
            {project.youtubeUrl && (
              <a
                href={project.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-400"
              >
                시연 영상
              </a>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
export default ProjectDetail;
