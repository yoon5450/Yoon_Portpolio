import { useState } from "react";
import ReviewOriginModal from "./ReviewOriginModal";
import TextRoll from "./TextRoll";

function PeerReviewSection() {
  const [isModalOpen, setIsModalOpen] = useState(() => false);

  const onClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      className="relative py-20 bg-primary-background w-full flex flex-col px-[8%]"
      id="peerReview"
    >
      <h1 className="font-family-perm text-3xl text-white font-normal">
        Peer Review
      </h1>

      <div className="flex items-center justify-center w-full">
        <div className="py-20 w-fit">
          <TextRoll />
        </div>
      </div>
      
      <div className="flex justify-end">
        <button
          className="text-white bg-inherit py-2 px-4 cursor-pointer border border-white rounded-md"
          type="button"
          onClick={() => setIsModalOpen(true)}
        >
          피어리뷰 원본 내용 보기
        </button>
      </div>

      <ReviewOriginModal isOpen={isModalOpen} onClose={onClose} />
    </div>
  );
}
export default PeerReviewSection;
