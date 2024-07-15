import { useEffect, useState } from 'react'
import Banner from './Banner'
import Sections from './Sections'
import Modal from './Modal';

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
        <Sections fotos={fotosFrontEnd} setModalVisibility={visible => setModalVisibility(visible)} />
        <Modal visibleModal={visibleModal} />
    </>
}

export default Home;