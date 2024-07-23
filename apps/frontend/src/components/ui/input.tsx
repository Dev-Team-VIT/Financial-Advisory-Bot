import React from "react"
type Props = {
  type:string,
  name:string,
  placeholder:string,
  className:string,
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({type, name, placeholder, className, value, onChange}: Props) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="ml-[10px] text-[12px] font-bold text-start">{name.toUpperCase()}</label>
      <input type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} className={`p-[10px] rounded-[50px] text-[18px] bg-greyBg w-[250px] focus:outline-none focus:border border-primary ${className}`}/>
    </div>
  )
}

export default Input