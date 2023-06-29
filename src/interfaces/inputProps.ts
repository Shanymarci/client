interface InputProps {
    type: string;
    label: string;
    className: string;
    id: string;
    onChange: (value: string) => void;
}

export default InputProps;