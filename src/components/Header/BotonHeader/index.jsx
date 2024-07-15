import styled from "styled-components";

const BotonHeaderStyled = styled.button`
    width: 180px;
    height: auto;
    font-weight: 900;
    font-family: 'Source Code 3', sans-serif;
    font-size: 14px;
    text-align: center;
    border: 2px solid ${props => props.$seleccionado ? "#2271D1" : "#f5f5f5"} ;
    border-radius: 10px;
    color: ${props => props.$seleccionado ? "#2271D1" : "#ffffff"};
    background-color: rgba(0, 0, 0, 0);
    padding: 10px;
    box-shadow: ${props => props.$seleccionado ? "0px 5px 29px 0px #2271D1B2" : "None"};
    cursor: pointer;
`;

const BotonHeader = ({text, seleccionado = false}) => {
    return <BotonHeaderStyled $seleccionado = {seleccionado}>{text}</BotonHeaderStyled>;
}

export default BotonHeader;