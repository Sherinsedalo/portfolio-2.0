import { css } from "@emotion/react";
import { Link } from "react-router-dom";
/** @jsxImportSource @emotion/react */

export const AboutMe = ({ id }: { id?: string }) => (
    <section
        css={css`
            background: #fff;
            padding: 0;
            border-radius: 1rem;
            box-shadow: 0 2px 16px rgba(0, 0, 0, 0.06);
            display: flex;
            flex-direction: row;
            align-items: center;
            max-width: 1100px;
            width: 100%;
            margin: 0 auto 4rem auto;
            overflow: hidden;
        `}
        id={id}
    >
        <img
            src="./assets/images/self-picture.JPG"
            alt="Sherin's picture"
            css={css`
                width: 50%;
                height: auto;
                max-height: 340px;
                object-fit: cover;
                border-radius: 1rem 0 0 1rem;
                box-shadow: none;
                display: block;
            `}
        />
        <div
            css={css`
                width: 50%;
                display: flex;
                flex-direction: column;
                justify-content: center; 
                align-items: flex-start;
                position: relative;
                padding: 2rem 2rem;
                background: #fff;
                border-radius: 0 1rem 1rem 0;
            `}
        >

            <div
                css={css`
                    width: 80%;
                    height: 2px;
                    background: #EAEAEB;
                    border-radius: 2px;
                    margin-bottom: 2rem;
                `}
            />
            <h2
                css={css`
                    margin: 0 0 1rem 0;
                    font-size: 2rem;
                    color: #33323D;
                    font-family: "Ibarra Real Nova", serif;
                `}
            >
                About me
            </h2>
            <p
                css={css`
                    margin: 0 0 1rem 0;
                    color: #33323D;
                    font-size: 1rem;
                    line-height: 2rem;
                    letter-spacing: 1.5px;
                    font-family: "Public Sans", sans-serif;
                `}
            >
                I’m a junior front-end developer looking for a new role in an exciting company.
                I focus on writing accessible HTML, using modern CSS practices and writing clean
                JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to
                whatever tools are required.<br></br> I’m based in Stockholm, Sweden but I’m happy working remotely
                and have experience in remote teams. <br></br>When I’m not coding, you’ll find me catching up on shows or meeting up with friends.
                I’d love you to check out my work.
            </p>
            <Link
                to={'/portfolio'}
                css={css`
                    color: #33323D;
                    border: 1px solid #eaeaea;
                    font-weight: 300;
                    margin-top: 0.5rem;
                    padding: 0.5rem 1rem;
                    background: none;
                    text-decoration: none;
                    transition: border-color 0.2s, color 0.2s;
                    width: fit-content;
                    min-width: 120px;
                    text-align: left;
                    align-self: flex-start;
                    border-radius: 4px;
                    &:hover {
                        border-color: #5FB4A2;
                        color: #5FB4A2;
                    }
                `}
            >
                Go to the portfolio
            </Link>

            <div
                css={css`
                    width: 80%;
                    height: 2px;
                    background: #EAEAEB;
                    border-radius: 2px;
                    margin-top: 2rem;
                `}
            />
        </div>
    </section>
);
