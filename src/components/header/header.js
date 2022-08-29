import IconPerfil from "../../assets/images-header/icon.svg"
import logo from '../../assets/images-header/spotify.png';
import './header.scss';

export default function Header(){
    
    
    return(
        <header>
            <div>
                <img src={logo} alt='spotify-logo'/>
            </div>
            <div className="container-lista">
                <ul>
                    <li>
                        <a href="/">Premium</a>
                    </li>
                    <li>
                        <a href="/">Suporte</a>
                    </li>
                    <li>
                        <a href="/">Baixar</a>
                    </li>
                    <li id='baixar'></li>
                    <li>
                        <div>
                            <a href="/">Perfil</a>
                        </div>
                    </li>
                </ul>
            </div>
        </header>
    )
}