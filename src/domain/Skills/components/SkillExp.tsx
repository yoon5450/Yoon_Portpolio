import ProgressDiv from "./ProgressDiv";

interface Item {
  title: string;
  content: string;
  progress: number;
}

interface Props {
  item: Item;
  className: string;
}

function SkillExp({ item }: Props) {
  return (
    <div className="flex">
      <div>
        <div>{item.title}</div>
        <div>{item.content}</div>
      </div>
      <ProgressDiv/>
    </div>
  );
}
export default SkillExp;
