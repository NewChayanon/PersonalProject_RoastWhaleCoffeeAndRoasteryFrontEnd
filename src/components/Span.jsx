
const textSizeMap={
    12:"text-xs",
    16:"text-base",
    24:"text-2xl"
}
const textColorMap={
    "Primary/50":"text-[#FEF5E6]"
}
const fontWeight ={
    "ExtraBold":"font-extrabold",
    "Regular":"font-normal",
    "SemiBold":"font-semibold"
}


export default function Span({children, size, color, width}) {
  return (
    <span className={`${textSizeMap[size]} ${textColorMap[color]} ${fontWeight[width]} `}>{children}</span>
  )
}
