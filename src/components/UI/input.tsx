interface IPropes extends React.InputHTMLAttributes<HTMLInputElement>
{}
const Input=({...rest}:IPropes)=>{

return(
<input className="border-[1px] border-gray-200 shadow-md
focus:border-bindigo-100 focus:outline-none focus:ring-1
 rounded-md px-3 py-3 text-md"
{...rest} ></input>

)

}

export default Input;