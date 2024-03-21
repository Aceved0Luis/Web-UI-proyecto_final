export function Btn({texto,click,clase="btn-default"}){
    return(
        <button className={clase} onClick={click}>
            {texto}
        </button>
    )
}