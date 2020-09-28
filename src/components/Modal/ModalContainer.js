import {connect} from "react-redux";
import LoginModal from "./Modal";
import {handleActiveTab, handleClose} from "../../redux/modal-reducer";

let mapStateToProps = state => ({
    show: state.ModalPage.show,
    activeTab: state.ModalPage.activeTab
})

const ModalContainer = connect(mapStateToProps, {handleClose,handleActiveTab})(LoginModal)

export default ModalContainer
