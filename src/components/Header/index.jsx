import styled from "styled-components";
import BotonHeader from "./BotonHeader";
import { Link } from "react-router-dom";

const HeaderStyled = styled.header`
    padding: 20px;
    background-color: #262626;
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-sizing: border-box;

    img {
        height: 40px;
    }
`;

const Header = () => {
    return <HeaderStyled>
        <img src="src/assets/Logo.png" alt="Logo AluraFlix Rafael Pardo"/>
        <div>
            <Link to="/">
                <BotonHeader text={"HOME"} seleccionado={true}></BotonHeader>
            </Link>
            <Link to="/NuevoVideo">
                <BotonHeader text={"NUEVO VIDEO"} seleccionado={false}></BotonHeader>
            </Link>
        </div>
    </HeaderStyled>;
}

export default Header;