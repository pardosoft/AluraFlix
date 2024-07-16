import styled from "styled-components";
import FormCampoSelect from "./FormCampoSelect";
import FormCampoTextarea from "./FormCampoTextarea";
import FormCampoTexto from "./FormCampoTexto";
import BotonHeader from "../../Header/BotonHeader";
import { useState } from "react";

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

    const [titulo, actualizarTitulo] = useState("");
    const [imagen, actualizarImagen] = useState("");
    const [video, actualizarVideo] = useState("");
    const [categoria, actualizarCategoria] = useState("1");
    const [descripcion, actualizarDescripcion] = useState("");

    const saveCard = (datosAEnviar) => {
        fetch('http://localhost:3000/fotos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: Math.abs(new Date("2024-07-15") - Date.now()),
                titulo: datosAEnviar.titulo,
                imagen: datosAEnviar.imagen,
                video: datosAEnviar.video,
                categoria: datosAEnviar.categoria,
                descripcion: datosAEnviar.descripcion
            }),
        })
        .then((res) => res.json())
        .then((result) => {
            alert("Guardado con éxito");
        })
        .catch((err) => console.log(err))
        }

    const onSubmitHandler = (e) => {
        e.preventDefault();

        let datosAEnviar = {
            titulo: titulo,
            imagen: imagen,
            video: video,
            categoria: categoria,
            descripcion: descripcion
        }

        console.log(datosAEnviar);
        saveCard(datosAEnviar);
    }
    
    return <FormContainerStyled onSubmit={onSubmitHandler}>
        <h2>Crear Tarjeta</h2>
        <div className="div-container-row">
            <FormCampoTexto text={"Título"} placeholder={"Ingrese el título"} value={titulo} actualizarValor={actualizarTitulo} />
            <FormCampoSelect text={"Categoría"} value={categoria} actualizarValor={actualizarCategoria} />
        </div>
        <div className="div-container-row">
            <FormCampoTexto text={"Imagen"} placeholder={"Ingrese el enlace de la imagen"} value={imagen} actualizarValor={actualizarImagen} />
            <FormCampoTexto text={"Video"} placeholder={"Ingrese el enlace del video"} value={video} actualizarValor={actualizarVideo} />
        </div>
        <div className="div-container-row">
            <FormCampoTextarea text={"Descripción"} value={descripcion} actualizarValor={actualizarDescripcion} />
        </div>
        <div>
            <BotonHeader text={"GUARDAR"} seleccionado={true} />
            <BotonHeader text={"LIMPIAR"} seleccionado={false} />
        </div>
    </FormContainerStyled>
}

export default FormContainer;