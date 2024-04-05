interface AppSurfaceProps {
  children: React.ReactNode;
}

export const AppSurface = ({ children }: AppSurfaceProps) => {
  return <div className="bg-base-white flex">{children}</div>;
};
