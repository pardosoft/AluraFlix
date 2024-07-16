import styled from "styled-components";

const CardButtonStyled = styled.button`
    background-color: rgba(0, 0, 0, 0);
    border: none;
    color: #fff;
    font-weight: 800;
    font-size: 16px;
    display: flex;
    gap: 16px;
    padding: 15px;
    cursor: pointer;

    img.icon {
        width: 16px;
        height: 16px;
        display: inline-block;
    }
`;

const CardButton = ({text, icon, onClickModal}) => {
    return <CardButtonStyled onClick={ () => onClickModal(true) }>
        <img className="icon" src={icon}></img>
        {text}
    </CardButtonStyled>
}

export default CardButton;