import {connect} from "react-redux";
import {handleClose} from "../../redux/modal-reducer";
import Registration from "./Registration";




const RegistrationContainer = connect(null, {handleClose})(Registration)

export default RegistrationContainer
