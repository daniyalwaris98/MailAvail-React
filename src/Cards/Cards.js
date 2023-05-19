import "./Cards.css";
import { RenderCards } from "./RenderCards";

export function Cards({ text, type }) {
  return <RenderCards type={type} text={text} />;
}
