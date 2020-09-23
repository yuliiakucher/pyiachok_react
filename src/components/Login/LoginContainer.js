import {connect} from "react-redux";
import {handleClose, handleShow} from "../../redux/modal-reducer";
import Login from "./Login";
import {userLogin} from "../../redux/login-reducer";


let mapStateToProps = (state) => {
    return{
        errorCode: state.LoginPage.currentUser
    }
}


const LoginContainer = connect(mapStateToProps, {handleClose, handleShow, userLogin})(Login)

export default LoginContainer
