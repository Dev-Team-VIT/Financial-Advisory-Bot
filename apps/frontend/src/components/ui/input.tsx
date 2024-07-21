import React from "react"
type Props = {
    type:string,
    name:string,
    placeholder:string,
    className:string,
}

function Input({type, name, placeholder, className}: Props) {
  return (
    <input type={type} name={name} placeholder={placeholder} className={`p-[10px] rounded-[50px] text-[18px] bg-greyBg w-[250px] focus:outline-none focus:border border-primary ${className}`}/>
  )
}

export default Input