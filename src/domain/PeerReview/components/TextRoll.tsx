import { reviews } from "../constants";

function TextRoll() {
  return (
    <div className="relative h-60 overflow-hidden flex items-center justify-center">
      <div className="w-full overflow-hidden [mask-image:_linear-gradient(to_bottom,transparent_0,_black_64px,_black_calc(100%-64px),transparent_100%)]">
        <div className="flex flex-col animate-infinite-scroll-vertical">
          {reviews.map((review, index) => (
            <div key={`first-${index}`} className="text-3xl text-white text-center py-6">
              {review}
            </div>
          ))}
          {reviews.map((review, index) => (
            <div key={`second-${index}`} className="text-3xl text-white text-center py-6">
              {review}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TextRoll;