import { Button, Htag, P, Tag } from "@/components";
import { type JSX } from "react";

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">Текст</Htag>
      <Button arrow="right">Кнопка</Button>
      <Button appearence="ghost" arrow="down">
        Кнопка
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
    </>
  );
}
