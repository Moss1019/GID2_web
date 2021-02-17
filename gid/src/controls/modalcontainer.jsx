


function ModalContainer(props) {
    return (
        <div className="modal-back">
            <div className="modal-front">
                <div className="modal-toolbar flex-right">
                    <button className="btn" onClick={() => props.onClose()}>
                        X
                    </button>
                </div>
                <div>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default ModalContainer;
