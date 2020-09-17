import {connect} from "react-redux";
import {handleClose, handleShow} from "../../redux/modal-reducer";
import Login from "./Login";




const LoginContainer = connect(null, {handleClose})(Login)

export default LoginContainer
