import { useEffect, useState } from 'react'
import Banner from './Banner'
import Sections from './Sections'
import Modal from './Modal';
import CardButton from './Sections/Section/SectionCard/CardButton';

const Home = () => {

    const [fotosFrontEnd, setFotosFrontEnd] = useState([]);
    const [visibleModal, setModalVisibility] = useState(false);

    useEffect(
        () => {
            const getData = async () => {
                const res = await fetch('http://localhost:3000/fotos');
                const data = await res.json();
                setFotosFrontEnd([...data]);
            }

            getData();
        },
        []
    )

    return <>
        <Banner />
        <Sections fotos={fotosFrontEnd} onClickModal={visible => { setModalVisibility(visible); console.log(visible); console.log("visibleModal: " + visibleModal) }} />
        <Modal visibleModal={visibleModal} onClickModal={visible => setModalVisibility(visible)} />
    </>
}

export default Home;