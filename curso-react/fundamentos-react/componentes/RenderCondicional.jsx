function RenderCondicional({user}){
    return(
        <div>
            {user &&
                <p>Olá, {user}! Seja bem-vindo!</p>
            }
        </div>
    )
}

export default RenderCondicional;