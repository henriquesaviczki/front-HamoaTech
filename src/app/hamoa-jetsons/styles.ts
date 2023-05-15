'use client';
import styled from "styled-components";


export const PageHome = styled.div`
    width: 1200px;
    height: 2130px;
    margin: auto;
`;

export const Title = styled.h1`
    display: flex;
    align-items: center;
    font-variant: all-small-caps;
    font-size: 1rem;
    font-weight: 700;
    font-family: 'Avenir Next';
    font-style: normal;
    font-weight: 600;
    font-size: 42.6667px;
    line-height: 50px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-family: var(--font-mono);
    background: linear-gradient(90deg, #79E8E7 0%, #998BE9 91.67%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-left: 20px;
    margin-top: 10px;
    
`;
export const TitleSmall = styled.h2`
    height: 50px;
    letter-spacing: -0.888889px;
    font-family: 'Avenir Next';
    font-style: normal;
    font-weight: 700;
    font-size: 39px;
    flex-grow: 0;
    margin-left: 20px;
    margin-top: 40px;
    
`;

export const Description = styled.span`
    display: flex;
    align-items: center;

    span {
        margin-left: 20px;
        opacity: 0.7;
        width: 500px;
        line-height: 30px;
        font-family: 'Avenir Next';
        font-style: normal;
        font-weight: 500;
        font-size: 19px;
        margin-top: -40px;
    }
`;

export const Imagem = styled.img`
    width: 100%;
    max-width: 500px;
    height: 580px;
    margin-left: 120px;
    margin-top: -160px;
    display: flex;
    order: 1;
    flex-grow: 0;
    z-index: 1;

`;

export const Conteudo = styled.div`
    width: 1100px;
    height: 120px;

    span {
        font-family: 'Avenir Next';
        font-style: normal;
        font-weight: 400;
        font-size: 25px;
        line-height: 40px;
        display: flex;
        align-items: center;
    }
    span:nth-child(2)  {
        color: #79E8E7;
        background: linear-gradient(90deg, #79E8E7 0%, #998BE9 91.67%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`;

export const Conteudo2 = styled.div`
    width: 504.89px;
    height: 384px;

    span {
        font-family: 'Avenir Next';
        font-style: normal;
        font-weight: 400;
        font-size: 28.4444px;
        line-height: 43px;
        display: flex;
        
    }
    span:nth-child(2)  {
        margin-left: 253px;
        margin-top: -43px;
        color: #79E8E7;
        background: linear-gradient(90deg, #79E8E7 0%, #998BE9 91.67%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
        span:nth-child(3)  {

            color: #79E8E7;
            background: linear-gradient(90deg, #79E8E7 0%, #998BE9 91.67%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    
`;

export const Imagem2 = styled.img`
    width: 232.34px;
    height: 418.75px;
    margin-left: 620px;
    margin-top: -350px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;
export const Imagem21 = styled.img`
    width: 232.34px;
    height: 418.75px;
    margin-left: 890px;
    margin-top: -450px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const TitleCarrosel = styled.span`
    width: 640px;
    height: 58px;

    span {
        font-family: 'Avenir Next';
        font-style: normal;
        font-weight: 600;
        font-size: 35px;
        line-height: 58px;
        color: #ffffff;
    }
`;

export const Imagem3 = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 550px;
    height: 400px;
    border-radius: 20px;

`;
export const Imagem31 = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 550px;
    height: 400px;
    left: 570px;
    border-radius: 20px;
    top: -400px;
    
    p {
        font-family: 'Avenir Next';
        color: #ffffff;
    }
`;
// const ImagemContainer = styled.div`
//   position: relative;
//   display: inline-block;
// `;

const TextoSobreImagem = styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #ffffff;
    font-size: 24px;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    z-index: 1;
`;