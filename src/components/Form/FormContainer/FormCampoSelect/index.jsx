import styled from "styled-components";

const FormCampoSelectStyled = styled.div`
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

    select {
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

const lt_categorias = [
    {"key": 1, "value": "Front End" },
    {"key": 2, "value": "Back End" },
    {"key": 3, "value": "Inovación y Gestión" }
];

const FormCampoSelect = ({text}) => {
    return <FormCampoSelectStyled>
        <label>{text}</label>
        <select>
            {
                lt_categorias.map((categoria, index) => <option key={categoria.key}>{categoria.value}</option>)
            }
        </select>
    </FormCampoSelectStyled>
}

export default FormCampoSelect;