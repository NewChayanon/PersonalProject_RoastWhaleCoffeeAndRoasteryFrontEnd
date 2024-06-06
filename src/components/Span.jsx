import { FONT_WEIGHT, TEXT_COLOR, TEXT_SIZE } from "../constants/InfoFigma";

export default function Span({ children, size, color, width }) {
  return (
    <span
      className={`${TEXT_SIZE[size]} ${TEXT_COLOR[color]} ${FONT_WEIGHT[width]} `}
    >
      {children}
    </span>
  );
}
