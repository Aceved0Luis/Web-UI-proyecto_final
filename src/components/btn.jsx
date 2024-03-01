export function btn(texto,clase="btn-default"){
    return(
        <button className={clase}>
            {texto}
        </button>
    )
}