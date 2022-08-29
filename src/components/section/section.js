import logo1 from "../../assets/images-section/icon1.png";
import logo2 from "../../assets/images-section/icon2.png";
import logo3 from "../../assets/images-section/icon3.png";
import logo4 from "../../assets/images-section/icon4.png";
import "./section.scss";


export default function Section(){

    return(
        <section>
            <h2>Por que ser Premium</h2>
            <div>
                <ul>
                    <div>
                        <li>
                            <img src={logo1} alt="icon1"/>
                            <div>
                                <h3>Modo Offline</h3>
                                <p>Ouça música onde estiver.</p>
                            </div>
                        </li>
                        <li>
                            <img src={logo2} alt="icon2"/>
                            <div>
                                <h3>Ouça o que quiser.</h3>
                                <p>Mesmo no celular ou tablet.</p>
                            </div>
                        </li>
                    </div>
                    <div>
                        <li>    
                            <img src={logo3} alt="icon3"/>
                            <div>
                                <h3>Ouça músicas sem anúncios.</h3>
                                <p>Curta música, sem parar.</p>
                            </div>
                        </li>
                        <li>
                            <img src={logo4} alt="icon4"/>
                            <div>
                                <h3>Troque de música o quanto quiser.</h3>
                                <p>Pule quando quiser.</p>
                            </div>
                        </li>
                    </div>
                </ul>
            </div>
        </section>
    )
}