import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

function TroubleShootingSection({
  title,
  desc,
  markdownContent,
}: {
  title: string;
  desc: string;
  markdownContent: string;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <li>
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700 leading-relaxed">{desc}</p>
      <button
        type="button"
        className="text-sm text-gray-500 w-full flex justify-center items-center p-2 border border-gray-500 rounded-md"
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        {isExpanded ? "접기" : "펼치기"}
      </button>
      {isExpanded && (
        <div className="flex flex-col gap-2">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
            components={{
              // 커스텀 컴포넌트 매핑
              img: ({ src, alt }) => (
                <img
                  src={src}
                  alt={alt}
                  className="cursor-pointer hover:scale-105 transition-transform rounded-lg shadow-md"
                />
              ),
              h3: ({ children }) => (
                <h3 className="text-xl font-semibold text-gray-800 border-b-2 border-amber-400 pb-1">
                  {children}
                </h3>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-blue-400 bg-blue-50 p-4 my-4">
                  {children}
                </blockquote>
              ),
              code: ({ children, className, ...props }) => {
                // className으로 인라인 코드 구분
                const isInline = !className;

                return isInline ? (
                  <code
                    className="bg-gray-100 px-1 py-0.5 rounded text-sm"
                    {...props}
                  >
                    {children}
                  </code>
                ) : (
                  <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
                    <code className={className} {...props}>
                      {children}
                    </code>
                  </pre>
                );
              },
            }}
          >
            {markdownContent}
          </ReactMarkdown>{" "}
        </div>
      )}
    </li>
  );
}

export default TroubleShootingSection;
