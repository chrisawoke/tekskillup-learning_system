
const InputIcon = ({ icon, placeholder, type, value, onChange, error }) => {
  return (
    <div className="relative mt-3">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        {icon}
      </div>
      <input
        type={type}
        placeholder={placeholder}
        className="py-3 px-4 pl-10 border  bg-gray-200 rounded-xl text-gray-700 focus:outline-none focus:shadow-outline w-full"
        value={value}
        onChange={onChange}
      />
      {error && <span className="text-red-500">{error}</span>}
    </div>
  );
};

export default InputIcon;
