interface BadgeProps {
  children: React.ReactNode;
}

export const Badge = ({ children }: BadgeProps) => {
  return (
    <div className="px-2 py-1 bg-gray-100 text-label text-sm rounded-2xl">
      {children}
    </div>
  );
};
