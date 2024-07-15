import styled from "styled-components";
import BannerButton from "../BannerButton";

const BannerTextContentStyled = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    color: #fff;

    h1 {
        font-size: 46px;
        font-weight: 400;
        margin: 10px 0px;
        margin-top: 40px;
    }

    p {
        font-size: 18px;
        font-weight: 100;
        margin: 0px;
    }
`;

const BannerTextContent = () => {
    return <BannerTextContentStyled>
        <BannerButton />
        <h1>Challenge React</h1>
        <p>
            Este challenge es una forma de aprendizaje. 
            Es un mecanismo donde podrás comprometerte 
            en la resolución de un problema para poder
            aplicar todos los conocimientos adquiridos 
            en la formación React.
        </p>
    </BannerTextContentStyled>
}

export default BannerTextContent;