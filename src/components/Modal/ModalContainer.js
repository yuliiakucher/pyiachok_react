import {connect} from "react-redux";
import LoginModal from "./Modal";
import {handleClose} from "../../redux/modal-reducer";

let mapStateToProps = state => ({
    show: state.ModalPage.show
})

const ModalContainer = connect(mapStateToProps, {handleClose})(LoginModal)

export default ModalContainer
