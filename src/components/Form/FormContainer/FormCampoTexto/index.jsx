import styled from "styled-components";

const FormCampoTextoStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    gap: 15px;
    flex: 1;

    label {
        font-family: "Source Sans 3", sans-serif;
        font-size: 20px;
        font-weight: 600;
        color: #fff;
    }

    input {
        font-family: "Source Sans 3", sans-serif;
        font-size: 20px;
        font-weight: 600;
        color: #A5A5A5;
        border: 3px solid #262626;
        border-radius: 10px;
        padding: 16px;
        background-color: rgba(0, 0, 0, 0);
    }
`;

const FormCampoTexto = ({text, placeholder}) => {
    return <FormCampoTextoStyled>
        <label>{text}</label>
        <input type="text" placeholder={placeholder}/>
    </FormCampoTextoStyled>
}

export default FormCampoTexto;