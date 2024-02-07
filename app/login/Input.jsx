
const InputIcon = ({ icon, placeholder, type, value, onChange, error }) => {
  return (
    <main>
    <div className="relative mt-5">
      <div className="absolute inset-y-0 left-0 pl-3  mt-[-2px] flex items-center pointer-events-none">
        {icon}
      </div>
      <div>
      <input
        type={type}
        placeholder={placeholder}
        className="py-3 px-3 pl-10 border text-lg  bg-gray-200 rounded-xl text-gray-700 focus:outline-none focus:shadow-outline w-full"
        value={value}
        onChange={onChange}
      />  
      </div>
    </div>
      {error && <span className="text-red-500">{error}</span>}
      </main>
  );
};

export default InputIcon;
