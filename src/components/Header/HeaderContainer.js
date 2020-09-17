import {connect} from "react-redux";
import Header from "./index";
import {handleShow} from "../../redux/modal-reducer";




const HeaderContainer = connect(null, {handleShow})(Header)

export default HeaderContainer
