import styled from "styled-components";

const ModalStyled = styled.dialog`
    background-color: #03122F;
    border-radius: 15px;
    border: 5px solid #6BD1FF;
    padding: 20px 100px;
    position: fixed;
    z-index: 2;
    //top: calc((100vh - 500px) / 2);
    top: 20px;
    height: auto;
    width: 600px;
    box-sizing: border-box;

    h1.h1-modal {
        font-family: 'Roboto', sans-serif;
        font-weight: 900;
        size: 60px;
        color: #2271D1;
        margin: 0;
        margin-bottom: 20px;
    }

    div.div-modal-form {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    div.div-modal-input {
        display: flex;
        flex-direction: column;
        gap: 6px;
    }

    div.div-modal-input label {
        font-family: 'Source Sans 3', sans-serif;
        font-weight: 600;
        font-size: 16px;
        color: #fff;
    }

    div.div-modal-input input[type=text] {
        font-family: 'Source Sans 3', sans-serif;
        border: 3px solid #2271D1;
        border-radius: 10px;
        padding: 8px;
        background-color: rgba(0, 0, 0, 0);
        color: #A5A5A5;
    }

    div.div-modal-input select {
        font-family: 'Source Sans 3', sans-serif;
        border: 3px solid #2271D1;
        border-radius: 10px;
        padding: 6px;
        background-color: rgba(0, 0, 0, 0);
        color: #A5A5A5;
    }

    div.div-modal-buttons {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    button {
        border-radius: 10px;
        background-color: transparent;
        padding: 10px;
        width: 100px;
        font-family: 'Source Sans 3', sans-serif;
        font-size: 12px;
        font-weight: 900;
        text-transform: uppercase;
        margin-top: 20px;
    }

    button.button-guardar {
        border: 2px solid #2271D1;
        color: #2271D1;
        background-color: #000;
        box-shadow: 0px 0px 6px 3px #2271d1e3 inset;
    }

    button.button-limpiar {
        border: 2px solid #ffffff;
        color: #ffffff;
        background-color: transparent;
        box-sizing: border-box;
    }
`;

const Modal = ({visibleModal, onClickModal}) => {
    return <ModalStyled open={visibleModal}>
            <h1 className="h1-modal">EDITAR CARD:</h1>
            <form method="dialog">
                <div className="div-modal-form">
                    <div className="div-modal-input">
                        <label>Título</label>
                        <input type="text" />
                    </div>
                    <div className="div-modal-input">
                        <label>Categoría</label>
                        <select>
                            <option value={1}>FrontEnd</option>
                            <option value={2}>BackEnd</option>
                            <option value={3}>Inovación y Gestión</option>
                        </select>
                    </div>
                    <div className="div-modal-input">
                        <label>Imagen</label>
                        <input type="text" />
                    </div>
                    <div className="div-modal-input">
                        <label>Video</label>
                        <input type="text" />
                    </div>
                    <div className="div-modal-input">
                        <label>Descripción</label>
                        <input type="text" />
                    </div>
                </div>
                <div className="div-modal-buttons">
                    <button className="button-guardar" onClick={() => onClickModal(false)}>Guardar</button>
                    <button className="button-limpiar" onClick={() => onClickModal(false)}>Limpiar</button>
                </div>
                
            </form>
    </ModalStyled>
}

export default Modal;