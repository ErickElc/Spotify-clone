import logo from '../../assets/images-header/spotify.png';
import foto from '../../assets/images-header/foto.png';
import {FiAlignJustify, FiXCircle} from "react-icons/fi"
import React, {useState} from "react"
import './header.scss';

export default function Header(){
    const [mode, setMode] = useState(false);
    function toggleMode(){
        setMode(!mode);
    }
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
                    <li onClick={toggleMode} id="perfil">
                        <img src={foto} alt="perfil" id='icon'/>
                        Perfil
                        <FiAlignJustify style={{height: "120px", marginLeft: "10px"}}/>
                    </li>
                    <li className='no-exist'>
                        { mode && (
                            <ul className="container-popup">
                                <li>
                                    <a href='/' className='minWidth'>Linkedin</a>
                                </li>
                                <li>
                                    <a href='/' className='minWidth'>github</a>
                                </li>
                                <li id='barra'>
                                    
                                </li>
                                <li>
                                    <a href="/">Baixar</a>
                                </li>
                                <li>
                                    <a href="/">Suporte</a>
                                </li>
                                <li>
                                    <a href="/">Premium</a>
                                </li>
                                <div id="divClose"onClick={toggleMode}>
                                    <FiXCircle id="close"/>
                                </div>
                            </ul>
                        )}
                    </li>
                </ul>
            </div>
                        
        </header>
    )
}