import { Button, Htag } from "@/components";
import { type JSX } from "react";

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">Текст</Htag>
      <Button>Кнопка</Button>
      <Button appearence="ghost">Кнопка</Button>
    </>
  );
}
