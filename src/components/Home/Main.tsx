import { css } from "@emotion/react";
/** @jsxImportSource @emotion/react */
import { AboutMe } from "./AboutMe";

export const Main = () => {
    return (
        <div
            css={css`
                min-height: 100vh;
                width: 100vw;
                background: #fff;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: flex-start;
            `}
        >
            <div
                css={css`
                    position: relative;
                    width: 100%;
                    max-width: 1200px;
                    height: 70vh;
                    background: url('./assets/images/Hero-img.png') center/cover no-repeat;
                    display: flex;
                    box-shadow: 0 4px 32px rgba(0,0,0,0.08);
                    margin-bottom: 4rem;
                `}
            >
                <div
                    css={css`
                        position: absolute;
                        left: 0;
                        bottom: 0;
                        background: rgba(234, 234, 235, 0.85); 
                        padding: 1.25rem 1.5rem;
                        box-shadow: 0 2px 16px rgba(0,0,0,0.06);
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        max-width: 280px;
                       
                    `}
                >
                    <h2
                        css={css`
                            margin: 0 0 0.75rem 0;
                            font-size: 1.25rem;
                            color: #33323D;
                            font-family: "Ibarra Real Nova", serif;
                        `}
                    >
                        Hey, I am Sherin Sedalo. <br />I love building beautiful websites.
                    </h2>
                    <a
                        href="#about-me"
                        css={css`
                            background: #203A4C;
                            color: #fff;
                            border: none;
                            border-radius: 1px;
                            padding: 0.5rem 1.25rem;
                            font-size: 0.95rem;
                            cursor: pointer;
                            margin-bottom: 0.75rem;
                            transition: background 0.2s;
                            text-align: center;
                            text-decoration: none;
                            display: inline-block;
                            font-family: "Public Sans", sans-serif;
                            &:hover {
                                background: #399e8c;
                            }
                        `}
                    >
                        <img src="./assets/icons/down-arrows.svg" css={css`margin-right: 8px`} />
                        About me
                    </a>
                </div>
            </div>

            <AboutMe id='about-me' />
        </div>
    )
}

