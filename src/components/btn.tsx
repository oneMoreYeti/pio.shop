import React from "react";

interface Props {
    name: string;
    url: string;
}
const Btn: React.FC<Props> = ({name, url}) => {
    return <a className="px-5 py-4 rounded-[10px] bg-gradient-to-br from-[var(--secondary)] to-[var(--tertiary)] hover:brightness-90 transition-all duration-300" href={url}>{name}</a>
}
export default Btn;