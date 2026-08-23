import Filho from "./Filho";

function Pai(){

    function handleFilhoClique(){
        alert(`Você clicou no botão do elemento filho!`);
    }
    return(
        <div>
            <Filho onFilhoClique={handleFilhoClique}/>
        </div>
    )
}

export default Pai;