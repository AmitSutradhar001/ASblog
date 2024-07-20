const Button = ({ text, type }) => {
  return (
    <>
      <button
        type={type}
        className="w-full mt-3 p-2 text-white font-semibold text-center bg-gradient-to-r from-[#A54DFF] to-[#ff4dca] rounded-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
      >
        {text}
      </button>
    </>
  );
};
export default Button;
