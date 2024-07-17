/* eslint-disable react/prop-types */
export default function Input({ type, placeholder, value, onChange, name, error }) {
  return (
    <div>
      <input
        className="border rounded-lg w-full h-10 outline-none px-4 placeholder:text-[#707070/100] "
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      />
      {error ? <small className="text-red-500 px-2">{error}</small> : null}
    </div>
  );
}
