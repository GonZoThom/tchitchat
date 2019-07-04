import React from 'react';
import StyledDiv from './StyledDiv';

const CustomInput = ({ update, blabla, ...rest }) => (
    <StyledDiv>
        <input
            onChange={(e) =>
                update(e, e.target || {})
            }
            {...rest}
        />
    </StyledDiv>
);

export default CustomInput;