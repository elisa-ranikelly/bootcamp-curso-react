function Descricao(props){
    return(
        <div>
            <p>Seu nome é: {props.nome}</p>
            <p>E você tem {props.idade} anos de idade.</p>
        </div>
    )
}

export default Descricao;