import styled from "styled-components";

const SectionHeaderStyled = styled.div`
    background-color: ${props => props.$color};
    width: 300px;
    font-size: 24px;
    font-weight: 800;
    color: #fff;
    max-height: 60px;
    padding: 20px;
    border-radius: 15px;
    display: block!important;
    text-align: center;
`;

const SectionHeader = ({color, text}) => {
    return <SectionHeaderStyled $color={color}>{text}</SectionHeaderStyled>
}

export default SectionHeader;