import { FormEvent } from 'react';

import InputProps from "./inputProps";

interface formProps {
    form: {label: string, onSubmit : () => void };
    input : InputProps[],
    buttonLabel : string
}

export default formProps;