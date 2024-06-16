/* eslint-disable react/prop-types */
import {
  BACKGROUND_COLOR,
  FONT_WEIGHT,
  TEXT_COLOR,
  TEXT_SIZE,
} from "../constants/InfoFigma";



export default function Button({
  bg = "Primary/500",
  color = "Primary/950",
  size = 12,
  weight = "SemiBold",
  round = "",
  children,
  type="submit",
  onClick=""
  
}) {
  return (
    <button  type={type} onClick={onClick}
      className={`${BACKGROUND_COLOR[bg]} ${TEXT_COLOR[color]} ${FONT_WEIGHT[weight]} ${TEXT_SIZE[size]} w-full rounded-lg h-full  `}
    >
      {children}
    </button>
  );
}
