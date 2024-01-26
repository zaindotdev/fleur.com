/* eslint-disable react/prop-types */
export default function Button({
  type,
  className = "",
  children,
  bgColor="red",
}) {
  return (
    <button type={type} className={`px-3 py-2 ${bgColor} rounded shadow-sm ${className}`}>
      {children}
    </button>
  );
}
