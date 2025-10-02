import { Link } from 'react-router-dom';
import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */

export const Footer: React.FC = () => {
    return (
        <footer>
            <nav
                css={css`
                    background: #33323D;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 2rem 3vw;
                `}
            >

                <div
                    css={css`
                        display: flex;
                        align-items: center;
                        gap: 2rem;
                    `}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="61" height="32">
                        <path fill="#fff" fillRule="evenodd" d="M60.082 5.878L44.408 32 28.735 5.878h31.347zM15.673 0l15.674 26.122H0L15.673 0z" />
                    </svg>
                    <ul
                        css={css`
                            display: flex;
                            gap: 2rem;
                            list-style: none;
                            margin: 0;
                            padding: 0;
                            text-transform: uppercase;
                            font-family: "Public Sans", sans-serif;
                            font-size: 16px;
                            font-weight: 300;
                            letter-spacing: 2px;

                            li {
                                display: flex;
                                align-items: center;
                            }

                            a {
                                color: #fff;
                                text-decoration: none;
                                transition: color 0.2s;
                                &:hover {
                                    color: #5FB4A2;
                                }
                            }
                        `}
                    >
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/portfolio'>Portfolio</Link></li>
                        <li><Link to='/contact'>Contact Me</Link></li>
                    </ul>
                </div>

                <div
                    css={css`
                        display: flex;
                        gap: 1rem;
                        align-items: center;

                        a, img {
                            filter: brightness(0) invert(1); /* Makes icons white */
                        }
                    `}
                >
                    <a href='https://github.com/Sherinsedalo' rel="noopener noreferrer" target="_blank">
                        <img src="./assets/icons/github.svg" alt="github logo" width={24} height={24} />
                    </a>
                    <a href='https://www.linkedin.com/in/sherinsedalo/' rel="noopener noreferrer" target="_blank">
                        <img src="./assets/icons/linkedin.svg" alt="Linkedin logo" width={24} height={24} />
                    </a>
                </div>
            </nav>
        </footer>
    )
}