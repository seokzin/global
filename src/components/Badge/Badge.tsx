interface BadgeProps {
  label: string;
  onClick: () => void;
}

const Badge = ({ label, onClick }: BadgeProps) => {
  return (
    <div>
      <button onClick={onClick}>{label}</button>
    </div>
  );
};

export default Badge;
