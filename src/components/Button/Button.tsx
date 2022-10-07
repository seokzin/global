interface ButtonProps {
  label: string;
  onClick: () => void;
  icon?: JSX.Element;
}

const Button = ({ label, onClick, icon }: ButtonProps) => {
  return (
    <div>
      <button onClick={onClick}>
        {icon}
        {label}
      </button>
    </div>
  );
};

export default Button;
