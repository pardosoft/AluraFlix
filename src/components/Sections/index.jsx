import styled from "styled-components";
import Section from "./Section";
import CardButton from "./Section/SectionCard/CardButton";

const SectionsStyled = styled.section`
    display: flex;
    flex-direction: column;
    gap: 90px;
    background-color: #000000E2;
    padding: 20px;
`;


const Sections = (fotos, onClickModal) => {

      console.log(fotos.onClickModal);
    return <SectionsStyled>
        <Section color={"#6BD1FF"} text={"FRONT END"} fotos={fotos} categoria={1} onClickModal={fotos.onClickModal}></Section>
        <Section color={"#00C86F"} text={"BACK END"} fotos={fotos} categoria={2} onClickModal={fotos.onClickModal}></Section>
        <Section color={"#FFBA05"} text={"INOVACIÓN Y GSTIÓN"} fotos={fotos} categoria={3} onClickModal={fotos.onClickModal}></Section>
    </SectionsStyled>
}

export default Sections;