import styled from "styled-components";

const FooteStyled = styled.footer`
    display: flex;
    background-color: #000000F5;
    border-top: 2px solid #2271D1;
    padding: 40px 0px;
    justify-content: center;

    img {
        height: 40px;
    }
`;

const Footer = () => {
    return <FooteStyled>
        <img src="src/assets/Logo.png" alt="Logo AluraFlix Rafael Pardo" />
    </FooteStyled>
}

export default Footer;