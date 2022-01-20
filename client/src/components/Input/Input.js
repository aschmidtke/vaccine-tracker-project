import React from 'react';
import { StyledInput } from './style';

function Input({ children, ...props }) {
    return(
        <StyledInput {...props} />
    );
}
export default Input;