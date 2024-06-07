import Span from "../../../components/Span";


export default function CartTableHeader({title}) {
  return (
    <div>
        <Span size={24} width="SemiBold">{title}</Span>
    </div>
  )
}
