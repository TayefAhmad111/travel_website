import Image from "next/image";

const Button = ({ type, title, icon, variant }) => {
  return (
    <button
      type={type}
      className={`flexCenter gap-2 py-3 px-6 rounded-full cursor-pointer transition-all duration-300 ${variant}`}
    >
      <Image src={icon} alt="icon" width={20} height={20} />
      <span className="medium-16">{title}</span>
    </button>
  );
};

export default Button;
