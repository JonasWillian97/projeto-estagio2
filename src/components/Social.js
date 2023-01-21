import React from "react";

function Social ({children, url}) {
    return(
        <a target='_blank' rel='noreferrer noopener' href={url}>
            {children}
        </a>
    )
}

export default Social;