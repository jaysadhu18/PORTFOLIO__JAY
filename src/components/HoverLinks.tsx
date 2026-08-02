import "./HoverLinks.css";

type Props = {
  text: string;
  /** When true, custom cursor can interact (Phase 3) */
  cursor?: boolean;
};

/** Duplicate text Y-swap on hover */
export function HoverLinks({ text, cursor = false }: Props) {
  return (
    <div className="hover-link" data-cursor={cursor ? undefined : "disable"}>
      <div className="hover-in">
        {text}
        <div>{text}</div>
      </div>
    </div>
  );
}
