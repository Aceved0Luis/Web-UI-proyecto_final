export function Btn({texto,clase="btn-default"}){
    return(
        <button className={clase}>
            {texto}
        </button>
    )
}