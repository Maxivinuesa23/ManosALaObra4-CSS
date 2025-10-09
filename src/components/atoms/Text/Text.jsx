import React from "react";

export default function Text({children, as, className, ...props}){
    const Tag = as || "span";
    return (
        <Tag className={className} {...props}>{children}</Tag>
    )
}