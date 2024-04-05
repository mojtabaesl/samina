interface AppSurfaceProps {
  children: React.ReactNode;
}

export const AppSurface = ({ children }: AppSurfaceProps) => {
  return (
    <div className="bg-base-white flex h-full text-primary font-primary">
      {children}
    </div>
  );
};
