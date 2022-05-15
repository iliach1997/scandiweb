export const Button=({onClick, className,type,children})=>{
    return <button className={className} onClick={onClick}type={type}>{children}</button>
}
