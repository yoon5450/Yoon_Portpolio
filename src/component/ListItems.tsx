import tw from "@/utils/tw";

type TitleDescItemType = { title: string; desc: string };

const ITEMS: TitleDescItemType[] = [
  { title: "이름", desc: "윤대웅" },
  { title: "연락처", desc: "010-5743-5450" },
  { title: "이메일", desc: "dbseodnd356@gmail.com" },
  { title: "생년월일", desc: "1998.05.14" },
  { title: "학력", desc: "공주대학교 컴퓨터공학과 졸업" },
  { title: "주소", desc: "경기도 오산시" },
];

interface Props {
  items?: TitleDescItemType[];
  liClassName?: string;
  ulClassName?: string;
}

type LiProps = React.LiHTMLAttributes<HTMLLIElement> & Props;

function ListItems({ items, liClassName, ulClassName, ...rest }: LiProps) {
  return (
    <ul
      className={tw(
        "grid grid-cols-1 md:grid-cols-3 gap-x-10 list-none gap-y-10",
        ulClassName
      )}
    >
      {(items ?? ITEMS).map((item, i) => (
        <li
          key={typeof item === "string" ? `${item}-${i}` : `n-${item}-${i}`}
          className={tw("flex flex-col gap-4 ", liClassName)}
          {...rest}
        >
          <div className="font-bold text-2xl">{item.title}</div>
          <hr />
          <div>{item.desc}</div>
        </li>
      ))}
    </ul>
  );
}
export default ListItems;
