import Modal from "@/share/components/Modal";
import peerReview1 from "@/assets/peer_review_1.png";
import peerReview2 from "@/assets/peer_review_2.png";
import peerReview3 from "@/assets/peer_review_3.png";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

function ReviewOriginModal({ isOpen, onClose }: Props) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-8 w-[60%] h-[80%] overflow-scroll bg-primary-background text-gray-50 rounded-lg">
        <h2 className="text-2xl text-gray-50 font-semibold pb-4">
          피어 리뷰 원본 자료
        </h2>
        <div className="flex flex-col gap-10 items-center">
          <div className="w-[90%]">
            <span className="text-lg">PickItBook 프로젝트</span>
            <img className="w-[100%]" src={peerReview3} alt="피어 리뷰 3" />
          </div>
          <div className="w-[90%]">
            <span className="text-lg">MusicMate 프로젝트</span>
            <img className="w-[100%]" src={peerReview2} alt="피어 리뷰 2" />
          </div>
          <div className="w-[90%]">
            <span className="text-lg">D-WORK 프로젝트</span>
            <img className="w-[100%]" src={peerReview1} alt="피어 리뷰 1" />
          </div>
        </div>
      </div>
    </Modal>
  );
}
export default ReviewOriginModal;
