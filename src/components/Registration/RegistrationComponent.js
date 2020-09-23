import {connect} from "react-redux";
import {handleClose} from "../../redux/modal-reducer";
import {userRegistration} from "../../redux/registration-reducer";
import Registration from "./Registration";




const RegistrationContainer = connect(null, {handleClose, userRegistration})(Registration)

export default RegistrationContainer
