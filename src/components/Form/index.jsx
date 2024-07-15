import styled from "styled-components";
import FormTitle from "./FormTitle";
import FormContainer from "./FormContainer";

const FormStyled = styled.section`
    background-color: rgba(0, 0, 0, 0.9);
    padding: 70px 130px;
`;

const Form = () => {
    return <FormStyled>
        <FormTitle />
        <FormContainer />
    </FormStyled>
}

export default Form;