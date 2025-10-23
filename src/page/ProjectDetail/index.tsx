import { PROJECTS } from "@/domain/Projects/constants";
import SkillTag from "@/domain/Skills/components/SkillTag";
import { useParams } from "react-router";

function ProjectDetail() {
  const { projectName } = useParams();
  const project = PROJECTS.find((p) => p.title === projectName);

  if (!project) return <div>프로젝트를 찾을 수 없습니다.</div>;

  return (
    <div className="max-w-4xl mx-auto p-8 pt-18">
      <div className="mb-8">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-64 object-cover rounded-b-md mb-4"
        />
        <h1 className="text-4xl font-bold">{project.title}</h1>
        <p className="text-xl text-gray-600 mb-2">{project.desc}</p>
        <div className="flex gap-4 text-sm text-gray-500">
          <span>{project.period}</span>
          <span>|</span>
          <span>{project.teammate}</span>
        </div>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-2">프로젝트 개요</h2>
          <p className="text-gray-700 leading-relaxed">{project.background}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">기술 스택</h2>
          <div className="flex gap-2 flex-wrap">
            {project.skills?.map((skill) => (
              <SkillTag key={skill} name={skill} />
            ))}
          </div>
        </section>

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

        <section>
          <h2 className="text-2xl font-semibold mb-4">링크</h2>
          <div className="flex gap-4">
            {project.deployUrl && (
              <a
                href={project.deployUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-600 duration-100"
              >
                배포 사이트
              </a>
            )}
            {project.deployUrl && (
              <a
                href={project.deployUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-600 duration-100"
              >
                블로그 회고
              </a>
            )}
            {project.youtubeUrl && (
              <a
                href={project.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
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
