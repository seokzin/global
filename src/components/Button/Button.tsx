import { Layout } from './Button.styled';

interface ButtonProps {
  label: string;
  onClick: () => void;
  disable?: boolean;
}

const Button = ({ label, onClick, disable = true }: ButtonProps) => {
  return (
    <Layout onClick={onClick} disable={disable}>
      <p>{label}</p>
    </Layout>
  );
};

export default Button;
