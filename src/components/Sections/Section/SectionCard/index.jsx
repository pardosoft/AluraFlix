import styled from "styled-components";
import CardButton from "./CardButton";


const CardStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 430px;
    border: 5px solid ${props => props.$color};
    border-radius: 15px;
    
    img.img-thumb {
        width: 100%;
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
        box-shadow: 0px 0px 8px 2px #6BD1FF inset;
    }
    div.card-button-container {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-around;
    }

    
`;

const SectionCard = ({color, src, fotos, categoria, setModalVisibility}) => {
    return (<>{
        fotos.fotos.filter( foto => foto.categoria == categoria)
            .map( foto => (
                <CardStyled $color={color} key={foto.id}>
                    <div><img src={foto.imagen} className="img-thumb" /></div>
                    <div className="card-button-container">
                        <CardButton text={"BORRAR"} icon={"public/borrar.png"} />
                        <CardButton text={"EDITAR"} icon={"public/editar.png"} onClick={ () => setModalVisibility(true) } />
                    </div>
                </CardStyled>  
            ))
    }</>)
    
    /*<CardStyled $color={color}>
            <div>{
                    fotos.fotos.filter( foto => foto.categoria < 2).map( foto => <img src={foto.imagen} /> )
                }</div>
        <div className="card-button-container">
            <CardButton text={"BORRAR"} icon={"public/borrar.png"} />
            <CardButton text={"EDITAR"} icon={"public/editar.png"} />
        </div>
    </CardStyled>*/
}

export default SectionCard;

/*
return <CardStyled $color={color}>
            <iframe width="420" height="200"
            src="https://www.youtube.com/embed/tgbNymZ7vqY">
        </iframe>
        <div className="card-button-container">
            <CardButton text={"BORRAR"} icon={"public/borrar.png"} />
            <CardButton text={"EDITAR"} icon={"public/editar.png"} />
        </div>
    </CardStyled>
*/