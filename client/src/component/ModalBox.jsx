import './ModalBox.scss'

const ModalBox = ({show, children, setShow}) => {
    return ( 
        <div className="modal-wrapper" style={{display: show ? '' : 'none'}} onClick={() => setShow(false)}>
            <div className="modal-box">
                {children}
            </div>
        </div>
     );
}
 
export default ModalBox;