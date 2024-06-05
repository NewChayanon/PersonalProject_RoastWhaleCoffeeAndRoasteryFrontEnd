const bgMap = {
  // "Primary/500": "bg-[#F9C06A]",
};
const textcolorMap = {
  // "Primary/950": ,
};
const textSizeMap = {
  14: "text-sm",
  16: "text-base",
  20: "text-xl",
  24: "text-2xl",
};

const fontWeight = {
  ExtraBold: "font-extrabold",
  Regular: "font-normal",
};

export default function Button({
  bg = "bg-[#F9C06A]",
  color = "text-[#190F01]",
  size = "text-xs",
  weight = "font-semibold",
  children,
}) {
  return (
    <button
      className={`${bgMap[bg]} ${textcolorMap[color]} ${fontWeight[weight]} ${textSizeMap[size]}`}
    >
      {children}
    </button>
  );
}
