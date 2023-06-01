import React from "react";
import {Box, PopupBox} from "./Style/PopupStyle";

const Popup = props => {
    return (
        <PopupBox>
            <Box>
                {props.content}
            </Box>
        </PopupBox>
    );
};

export default Popup;