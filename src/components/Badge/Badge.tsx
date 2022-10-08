import { Layout, Label } from './Badge.styled';

interface BadgeProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

const Badge = ({ label, active, onClick }: BadgeProps) => {
  return (
    <Layout onClick={onClick} active={active}>
      <Label active={active}>{label}</Label>
    </Layout>
  );
};

export default Badge;
