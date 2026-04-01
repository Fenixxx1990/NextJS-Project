import type { MenuItem } from "@/interfaces/menu.interface";
import { withLayout } from "@/layout/Layout";
import axios from "axios";
import type { GetStaticProps } from "next";

export function SearchPage(): React.JSX.Element {
  return <div>Search</div>;
}

export default withLayout(SearchPage);

export const getStaticProps: GetStaticProps<IHomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`,
    {
      firstCategory,
    },
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
