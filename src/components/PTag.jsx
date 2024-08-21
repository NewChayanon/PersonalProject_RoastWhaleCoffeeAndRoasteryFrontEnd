import { FONT_WEIGHT, TEXT_COLOR, TEXT_SIZE } from "../constants/InfoFigma";

// eslint-disable-next-line react/prop-types
export default function PTag({ children, size = 16, color = "Support01/500", width = "Regular", onClick }) {
  return (
   <>
    <p onClick={onClick} className={`${TEXT_SIZE[size]} ${TEXT_COLOR[color]} ${FONT_WEIGHT[width]} text-ellipsis overflow-hidden`}>
      {children}
    </p>
   </>
  );
}
