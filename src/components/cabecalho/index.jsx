import "./style.css";


export function Top(){

    return(
        <div className="top">
            <section>
                <input type="text" placeholder="Pesquisar"/>
                <button>Buscar</button>
            </section>
            <section>
                <p>Faça <a href="#">LOGIN</a> ou <br/>crie o seu <a href="#">CADASTRO</a></p>
            </section>
        </div>
    )
}