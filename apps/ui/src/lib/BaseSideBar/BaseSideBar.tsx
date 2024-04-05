interface BaseSideBarProps {
  children: React.ReactNode;
}

export const BaseSideBar = ({ children }: BaseSideBarProps) => {
  return (
    <aside className="w-[279px] border-l border-gray-200 px-[15px] py-8">
      {children}
      {/* <Navigation links={links} /> */}
    </aside>
  );
};
