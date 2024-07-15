import styled from "styled-components";
import BannerButton from "./BannerButton";
import BannerTextContent from "./BannerTextContent";
import BannerVideo from "./BannerVideo";

const BannerPlayerStyled = styled.div`
    display: flex;
    height: 100%;
    background-color: rgba(20, 21, 26, 0.54);
    flex-direction: row;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
`;

const BannerPlayer = () => {
    return <BannerPlayerStyled>
        <BannerTextContent />
        <BannerVideo />
    </BannerPlayerStyled>
}

export default BannerPlayer;