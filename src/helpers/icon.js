import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faSignOutAlt, faEdit, faMinusCircle, faSpinner, faPlusCircle, faPhoneSquareAlt, faEnvelope, faHome, faLock } from "@fortawesome/free-solid-svg-icons";

const Icons = () => {
    return library.add(faTrash, faSignOutAlt, faEdit, faMinusCircle, faSpinner, faPlusCircle, faPhoneSquareAlt, faEnvelope, faHome, faLock);
}

export default Icons;