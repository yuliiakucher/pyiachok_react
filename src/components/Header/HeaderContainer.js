import {connect} from "react-redux";
import Header from "./Header";
import {handleShow} from "../../redux/modal-reducer";
import {logOut} from "../../redux/login-reducer";


let mapStateToProps = (state) => {
    return{
        currentUser: state.LoginPage.currentUser,
        first_name: state.LoginPage.first_name
    }
}


const HeaderContainer = connect(mapStateToProps, {handleShow, logOut})(Header)

export default HeaderContainer
