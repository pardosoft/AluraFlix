import styled from "styled-components";

const BannerButtonStyled = styled.button`
    background-color: #6BD1FF;
    width: 300px;   
    padding: 10px;
    font-size: 48px;
    font-weight: 800;
    border-radius: 15px;
    padding: 10px;
    border: none;
    color: #fff;

`;

const BannerButton = () => {
    return <BannerButtonStyled>FRONT END</BannerButtonStyled>
}

export default BannerButton;