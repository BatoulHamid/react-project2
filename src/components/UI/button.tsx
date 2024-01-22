import { ReactNode } from "react";

interface Iprops extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    classN?:string;
    children:ReactNode;
    width?:"w-full"| "w-fit";
  


}

const Button= ({classN , children ,width="w-full", ...rest}:Iprops)=> {



    return (
<button className={`${classN} ${width} flex-1 rounded-sm p-1 my-2 text-white`  } {...rest}> {children}</button>
    );
};
    export default Button;
