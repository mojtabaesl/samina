interface InputErrorProps {
  children?: string;
}

export function FormFieldError({ children }: InputErrorProps) {
  return <p className="text-red-600 text-xs">{children}</p>;
}
