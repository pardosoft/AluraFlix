import styled from "styled-components";
import SectionContainer from "./SectionContainer";

const SectionStyled = styled.div`
    display: flex;
    flex-direction: row;
`;

const Section = ({color, text, fotos, categoria, onClickModal}) => {
    return <SectionStyled>
        <SectionContainer color={color} text={text} fotos={fotos} categoria={categoria} onClickModal={onClickModal}></SectionContainer>
    </SectionStyled>
}

export default Section;