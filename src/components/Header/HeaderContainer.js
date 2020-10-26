import {connect} from "react-redux";
import Header from "./Header";
import {handleShow} from "../../redux/modal-reducer";
import {logOut} from "../../redux/login-reducer";


let mapStateToProps = (state) => {
    return{
        currentUser: state.LoginPage.currentUser,
        email: state.LoginPage.email
    }
}


const HeaderContainer = connect(mapStateToProps, {handleShow, logOut})(Header)

export default HeaderContainer
