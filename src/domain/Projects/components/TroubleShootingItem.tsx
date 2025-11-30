import tw from "@/utils/tw";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Activity, useState } from "react";

interface TroubleShootingItemProps {
  title: string;
  background: string;
  solution: string;
  result: string;
  thumnail: string;
}
function TroubleShootingItem({
  title,
  background,
  solution,
  result,
  thumnail,
}: TroubleShootingItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <li className="flex flex-col gap-4 border border-gray-200 rounded-md p-2 drop-shadow-md">
      <div
        className={tw(
          "flex gap-2 items-center",
          isExpanded && "border-b-2 border-gray-400 pb-1 p-2"
        )}
      >
        <img src={thumnail} alt={title} className="w-20 h-full object-cover " />
        <h2 className={tw("text-2xl font-semibold mb-2")}>{title}</h2>
      </div>
      <Activity mode={isExpanded ? "visible" : "hidden"}>
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="w-fit text-xl font-semibold text-gray-800 border-b-2 border-amber-400 pb-1 px-2 mb-2">
              문제 배경
            </h3>
            <p className="text-gray-700 leading-relaxed">{background}</p>
          </div>
          <div>
            <h3 className="w-fit text-xl font-semibold text-gray-800 border-b-2 border-amber-400 pb-1 px-2 mb-2">
              해결 방안
            </h3>
            <p className="text-gray-700 leading-relaxed">{solution}</p>
          </div>
          <div>
            <h3 className="w-fit text-xl font-semibold text-gray-800 border-b-2 border-amber-400 pb-1 px-2 mb-2">
              해결 결과
            </h3>
            <p className="text-gray-700 leading-relaxed">{result}</p>
          </div>
        </div>
      </Activity>
      <button
        type="button"
        className="text-sm text-gray-500 w-full flex justify-center items-center p-2 border border-gray-500 rounded-md cursor-pointer"
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        {isExpanded ? (
          <>
            <span>접기</span>
            <ChevronUp size={20} className="text-gray-500" />
          </>
        ) : (
          <>
            <span>펼치기</span>
            <ChevronDown size={20} className="text-gray-500" />
          </>
        )}
      </button>
    </li>
  );
}

export default TroubleShootingItem;
