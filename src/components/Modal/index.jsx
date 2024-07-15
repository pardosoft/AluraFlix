const Modal = ({visibleModal}) => {
    return <>
        <dialog open={visibleModal}>
            
            <form method="dialog">
                <button>OK</button>
            </form>
        </dialog>
    </>
}

export default Modal;