import {connect} from "react-redux";
import {handleActiveTab, handleClose} from "../../redux/modal-reducer";
import {userRegistration} from "../../redux/registration-reducer";
import Registration from "./Registration";


let mapStateToProps = (state) => {
    return{
        responseCode: state.RegistrationPage.responseCode,
        responseMessage: state.RegistrationPage.responseMessage,
        alert_text: state.AlertPage.text,
        alert_header: state.AlertPage.header,
        alert_variant: state.AlertPage.variant
    }
}


const RegistrationContainer = connect(mapStateToProps, {handleClose, userRegistration, handleActiveTab})(Registration)

export default RegistrationContainer
