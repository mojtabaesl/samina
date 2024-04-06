import { Label } from './Label';

interface InputLabelProps {
  children?: string;
  withAsterisk?: boolean;
  htmlFor: string;
}

export function FormFieldLabel({
  children,
  withAsterisk,
  htmlFor,
}: InputLabelProps) {
  return (
    <Label className="text-slate-600" htmlFor={htmlFor}>
      {children}
      {withAsterisk ? <span className="text-red-600 ml-2">*</span> : null}
    </Label>
  );
}
