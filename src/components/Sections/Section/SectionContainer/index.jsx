import styled from "styled-components";
import SectionCard from "../SectionCard";
import SectionHeader from "./SectionHeader";

const SectionContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    
    div.cardContainer {
        display: flex;
        flex-direction: row;
        gap: 30px;
        width: calc(100vw - 40px);
        overflow: auto;
    }
`;



const SectionContainer = ({color, text, fotos, categoria, onClickModal}) => {
    
    return <SectionContainerStyled>
        <SectionHeader color={color} text={text} />
        <div className="cardContainer">
            <SectionCard color={color} fotos={fotos} categoria={categoria} onClickModal={onClickModal}></SectionCard>
        </div>
        
    </SectionContainerStyled>
}

export default SectionContainer;