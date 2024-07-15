import styled from "styled-components";
import BannerPlayer from "../BannerPlayer";

const BannerBackgroundStyled = styled.section`
    background-image: url('../../../../src/assets/banner-background.jpg');
    background-color: rgba(0, 0, 0, 0.75);
    background-size: cover;
    height: 100vh;
    width: 100%;
    //filter: brightness(0.5);
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const BannerBackground = () => {
    return <BannerBackgroundStyled>
        <BannerPlayer></BannerPlayer>
    </BannerBackgroundStyled>
}

export default BannerBackground;