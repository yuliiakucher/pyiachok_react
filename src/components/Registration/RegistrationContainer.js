import {connect} from "react-redux";
import {handleClose} from "../../redux/modal-reducer";
import {userRegistration} from "../../redux/registration-reducer";
import Registration from "./Registration";


let mapStateToProps = (state) => {
    return{
        responseCode: state.RegistrationPage.responseCode,
        responseMessage: state.RegistrationPage.responseMessage
    }
}


const RegistrationContainer = connect(mapStateToProps, {handleClose, userRegistration})(Registration)

export default RegistrationContainer
