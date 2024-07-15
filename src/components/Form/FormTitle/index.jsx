import styled from "styled-components";

const FormTitleStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-bottom: 50px;

    h1 {
        color: #fff;
        font-size: 60px;
        font-weight: 900;
        margin: 0;
    }
    p {
        margin: 0;
        padding: 10px;
        text-transform: uppercase;
        color: #fff;
    }
`;

const FormTitle = () => {
    return <FormTitleStyled>
        <h1>NUEVO VIDEO</h1>
        <p>Complete el formulario para crear una nueva tarjeta de video</p>
    </FormTitleStyled>
}

export default FormTitle;