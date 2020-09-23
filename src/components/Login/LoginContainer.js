import {connect} from "react-redux";
import {handleClose, handleShow} from "../../redux/modal-reducer";
import Login from "./Login";


let mapStateToProps = (state) => {
    return{
        errorCode: state.LoginPage.currentUser
    }
}


const LoginContainer = connect(mapStateToProps, {handleClose, handleShow})(Login)

export default LoginContainer
