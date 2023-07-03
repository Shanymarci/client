import { FormEvent } from 'react';

import InputProps from "./inputProps";

interface formProps {
    form: {label: string, onSubmit : (data : any) => void };
    input : InputProps[],
    buttonLabel : string,
    validation?: Record<string, unknown>;
}

export default formProps;