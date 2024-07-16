import styled from "styled-components";

const FromCampoTextareaStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    flex: 1;
    gap: 15px;

    label {
        font-family: "Source Sans 3", sans-serif;
        font-size: 20px;
        font-weight: 600;
        color: #fff;
    }

    textarea {
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

const FormCampoTextarea = ({text, value, actualizarValor}) => {

    const onChangeHandler = (e) => {
        actualizarValor(e.target.value);
    }
    return <FromCampoTextareaStyled>
        <label>{text}</label>
        <textarea onChange={onChangeHandler} value={value}></textarea>
    </FromCampoTextareaStyled>
}

export default FormCampoTextarea;