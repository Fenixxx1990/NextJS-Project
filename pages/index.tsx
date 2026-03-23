import { Button, Htag, P, Rating, Tag } from "@/components";
import { useEffect, useState, type JSX } from "react";

export default function Home(): JSX.Element {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    console.log("counter", counter);
    return function cleanup() {
      console.log("cleanup");
    };
  }, [counter]);

  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag="h1">{counter}</Htag>
      <Button arrow="right" onClick={() => setCounter(counter + 1)}>
        Прибавить
      </Button>
      <Button appearence="ghost" arrow="down" onClick={() => setCounter(0)}>
        Сбросить
      </Button>
      <P>
        Выше указаны программы Adobe InDesign, Adobe Illustrator, Corel Draw и
        ими можно успешно пользоваться дома или в дороге. Современные ноутбуки
        хорошо справляются с нагрузкой, так зачем загонять специалиста в душный
        офис. В этой профессии важным считается вдохновение, поэтому дизайнеры
        ищут его в разных местах.
      </P>
      <Tag size="s">Ghost</Tag>
      <Tag size="s" color="red">
        red
      </Tag>
      <Tag size="s" color="green">
        green
      </Tag>
      <Tag size="s" color="primary">
        Primary
      </Tag>

      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
}
