import './main.scss'


export default function Main(){
    return(
        <main>
            <h2>Curtição sem limites</h2>
            <p>Escolha entre milhões de músicas e curta quando quiser, sem anúncios e offline.</p>
            <div>
                <div>
                    <button id="botao_um">Comece Agora</button>
                </div>
                <div id="div_2">
                    <button id="botao_dois">Ver Planos</button>
                </div>
            </div>
            <p id="termos">
                <a href="/">Sujeito a Termos e Condições.</a>
            </p>
        </main>
    )
}