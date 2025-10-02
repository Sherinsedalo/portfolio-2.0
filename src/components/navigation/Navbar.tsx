/** @jsxImportSource @emotion/react */
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { css } from '@emotion/react';

export const NavBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header css={css`
        padding: 1rem;
        background: #fff;
        border-bottom: 1px solid #eee`}>
            <nav css={css`
                display:flex;
                align-item:center;
                justify-content: space-between`}>
                <img src='./assets/images/logo.svg' alt='triangle page logo' />

                <ul css={css`
                    display:flex;
                    gap:5rem;
                    list-style: none;
                    text-transform: uppercase;
                    margin:0;
                    padding:10px;

                    a{
                    text-decoration:none;
                    transition: color 0.2s;
                    font-family:  "Public Sans", sans-serif;
                    font-size: 18px;
                    font-weight: 200;
                    letter-spacing: 2px;
                     color: #33323D;
                    &:hover{
                    color: #5FB4A2;}
                    }

                    @media (max-width: 768px) {
                    display: ${isOpen ? 'flex' : 'none'};
                    flex-direction: column;
                    align-items: center;
                    position: absolute;
                    top: 80px;
                    left: 0;
                    width: 100%;
                    background: #fff;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.1);}
                   `}>

                    <li><Link to='/' onClick={() => setIsOpen(false)}> Home</Link></li>
                    <li><Link to='portfolio' onClick={() => setIsOpen(false)}>Portfolio</Link></li>
                    <li><Link to='contact' onClick={() => setIsOpen(false)}>Contact me</Link></li>
                </ul>

                <button css={css`
                    background: none;
                    border: none;
                    cursor:pointer;
                    display: none;
                    @media (max-width: 768px) {
                    display: block;}`} onClick={() => setIsOpen(!isOpen)}>
                    <img src={isOpen ? './assets/icons/close.svg' : './assets/icons/hamburger.svg'} alt={isOpen ? 'close menu icon' : 'Open menu icon'} />
                </button>
            </nav>


        </header>
    )
}