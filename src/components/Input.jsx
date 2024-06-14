/* eslint-disable react/prop-types */
export default function Input({ type, placeholder, value, onChange, name, error }) {
  
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
      {error ? <small className="text-red-500 px-2">{error}</small> :null}
    </div>
  );
}
