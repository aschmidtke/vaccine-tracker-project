import React from 'react';
import { StyledInputGroup } from './style';

function InputGroup({ children, ...props }) {
    return(
        <StyledInputGroup {...props}>
            {children}
        </StyledInputGroup>
    );
}
export default InputGroup;