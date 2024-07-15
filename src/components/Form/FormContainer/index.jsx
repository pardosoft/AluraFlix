import styled from "styled-components";
import FormCampoSelect from "./FormCampoSelect";
import FormCampoTextarea from "./FormCampoTextarea";
import FormCampoTexto from "./FormCampoTexto";
import BotonHeader from "../../Header/BotonHeader";

const FormContainerStyled = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 60px;

    div.div-container-row {
        display: flex;
        flex-direction: row;
        gap: 20px;
    }
    h2 {
        font-size: 36px;
        font-family: "Source Sans 3";
        font-weight: 600;
        color: #fff;
        margin: 0;
        padding: 12px 0px;
        border-top: 3px solid #262626;
        border-bottom: 3px solid #262626;
    }
`;

const FormContainer = () => {
    return <FormContainerStyled>
        <h2>Crear Tarjeta</h2>
        <div className="div-container-row">
            <FormCampoTexto text={"Título"} placeholder={"Ingrese el título"} />
            <FormCampoSelect text={"Categoría"} />
        </div>
        <div className="div-container-row">
            <FormCampoTexto text={"Imagen"} placeholder={"Ingrese el enlace de la imagen"} />
            <FormCampoTexto text={"Video"} placeholder={"Ingrese el enlace del video"} />
        </div>
        <div className="div-container-row">
            <FormCampoTextarea text={"Descripción"} />
        </div>
        <div>
            <BotonHeader text={"GUARDAR"} seleccionado={true}/>
            <BotonHeader text={"LIMPIAR"} seleccionado={false}/>
        </div>
    </FormContainerStyled>
}

export default FormContainer;