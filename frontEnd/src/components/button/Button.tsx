import "./Button.css"

//Button adaptavel ao tamanho da frase e mudando só o conteudo interno
export function Button({children}:{children: React.ReactNode}){
    return(
        <button className="button"> {children} </button>
    )
}

