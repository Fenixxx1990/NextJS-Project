import { Button, Htag, P, Rating, Tag } from "@/components";
import { withLayout } from "@/layout/Layout";
import type { GetStaticProps } from "next";
import { useEffect, useState, type JSX } from "react";
import axios from "axios";
import type { MenuItem } from "@/interfaces/menu.interface";

export function Home({ menu }: IHomeProps): JSX.Element {
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
      <ul>
        {menu.map((item) => (
          <li key={item._id.secondCategory}>{item._id.secondCategory}</li>
        ))}
      </ul>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<IHomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`,
    { firstCategory },
  );
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface IHomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
