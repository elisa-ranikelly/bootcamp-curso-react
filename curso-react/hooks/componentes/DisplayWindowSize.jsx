import useWindosSiza from "../UserWindowSiza";

function DisplayWindowSize(){
    const {width, height} = useWindosSiza();

    return(
        <div>
            <p>A largura da janela é: {width}</p>
            <p>A altura da janela é: {height}</p>
        </div>
    )
}

export default DisplayWindowSize;