interface HeadingProps {
  level: number;
  children: React.ReactNode;
}

export const Heading = ({ level, children, ...rest }: HeadingProps) => {
  const fontSizeMapping: Record<number, string> = {
    1: 'text-6xl',
    2: 'text-5xl',
    3: 'text-4xl',
    4: 'text-3xl',
    5: 'text-2xl',
    6: 'text-base',
  };

  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <HeadingTag className={`${fontSizeMapping[level]} font-bold`} {...rest}>
      {children}
    </HeadingTag>
  );
};
