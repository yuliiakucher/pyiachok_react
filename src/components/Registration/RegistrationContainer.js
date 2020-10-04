import {connect} from "react-redux";
import {handleActiveTab, handleClose} from "../../redux/modal-reducer";
import {userRegistration} from "../../redux/registration-reducer";
import Registration from "./Registration";


let mapStateToProps = (state) => {
    return{
        responseCode: state.RegistrationPage.responseCode,
        responseMessage: state.RegistrationPage.responseMessage
    }
}


const RegistrationContainer = connect(mapStateToProps, {handleClose, userRegistration, handleActiveTab})(Registration)

export default RegistrationContainer
