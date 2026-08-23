function Button(){

    function handleClique(){
        alert(`Você clicou no botão`);
    }
    return(
        <div>
            <button onClick={handleClique}>
                Clique aqui
            </button>
        </div>
    )
}

export default Button;