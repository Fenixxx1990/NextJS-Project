import { useContext, useEffect, type JSX } from "react";
import { AppContext } from "@/context/app.context";

export const Menu = (): JSX.Element => {
  const { menu, setMenu } = useContext(AppContext);

  useEffect(() => {
    if (setMenu) setMenu([]);
  });

  return (
    <div>
      <ul>
        {menu.map((item) => (
          <li key={item._id.secondCategory}>{item._id.secondCategory}</li>
        ))}
      </ul>
    </div>
  );
};
