export default function Input({ type, placeholder, value, onChange, name }) {
  return (
    <div>
      <input
        className="border rounded-lg w-full h-10 outline-none l px-4 placeholder:text-[#707070] "
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      />
    </div>
  );
}
