import "./Button.css"
import { ComponentProps, ReactNode } from "react"

interface ButtonProps extends ComponentProps<'button'>{
    children: ReactNode
}
//Button adaptavel ao tamanho da frase e mudando só o conteudo interno
export function Button({children, ...props}: ButtonProps){
    return(
        <button className="button" {...props}> {children} </button>
    )
}

