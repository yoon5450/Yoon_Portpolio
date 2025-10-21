function PeerReviewSection() {
  return (
    <div className="relative py-20 bg-primary-background w-full flex flex-col px-[8%]">
      <h1 className="font-family-perm text-3xl text-white font-normal">
        Peer Review
      </h1>

      <div className="py-10 flex flex-col justify-center items-center gap-8">
        <div className="text-3xl text-subtext">"초기 구조를 잡아주는 사람"</div>
        <div className="text-3xl text-subtext">
          "방향을 책임질 수 있는 팀장"
        </div>
        <div className="text-3xl text-white">"소통이 적극적인 팀원"</div>
        <div className="text-3xl text-subtext">"솔선수범하는 팀장"</div>
        <div className="text-3xl text-subtext">
          "왜 이런 구조인지 고민하게 하는 사람"
        </div>
      </div>

      <div className="flex justify-end">
        <button
          className="text-white bg-inherit py-2 px-4 cursor-pointer border border-white rounded-md"
          type="button"
        >
          피어리뷰 상세 내용 보기
        </button>
      </div>
    </div>
  );
}
export default PeerReviewSection;
