import "./style.css"
import { Link } from "react-router-dom";

export default function Home() {
    return(
        <>
        <main id="home">
            <section id="eventos">
                <h1>PRÓXIMOS EVENTOS</h1>
                <div>
                    <h2>Título do Evento</h2>
                    <p>Breve descrição do evento, pode ser um paragrafo pequeno</p>
                </div>
                <Link to="conect1">Conectar</Link>
            </section>
        </main>
        </>
    )

}