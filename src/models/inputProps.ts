interface InputProps {
    type: string;
    label: string;
    className: string;
    id: string;
    name: string;
    onChange: (value: string) => void;
    validation: Record<string, unknown> | undefined;
  }
  

export default InputProps;