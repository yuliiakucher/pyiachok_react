import {connect} from "react-redux";
import Header from "./index";
import {handleShow} from "../../redux/modal-reducer";
import {logOut} from "../../redux/login-reducer";


let mapStateToProps = (state) => {
    return{
        currentUser: state.LoginPage.currentUser
    }
}


const HeaderContainer = connect(mapStateToProps, {handleShow, logOut})(Header)

export default HeaderContainer
