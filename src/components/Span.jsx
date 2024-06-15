import { FONT_WEIGHT, TEXT_COLOR, TEXT_SIZE } from "../constants/InfoFigma";

// eslint-disable-next-line react/prop-types
export default function Span({ children, size=16, color="Support01/500", width="Regular",onClick}) {
  return (
    <span onClick={onClick}
      className={`${TEXT_SIZE[size]} ${TEXT_COLOR[color]} ${FONT_WEIGHT[width]}  `}
    >
      {children}
    </span>
  );
}
