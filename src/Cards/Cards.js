import "./Cards.css";
import { RenderCards } from "./RenderCards";

export function Cards({ text, type }) {
  return (
    <div onScroll={reveal}>
      <RenderCards type={type} text={text} />;
    </div>
  );
}
