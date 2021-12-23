import "./navbar.css";
import PostForm from "./PostForm";
import CustomizedDialogs from './dialog';

function navbar() {
  return (
    <div className="navbarContainer">
      <div className="navbarLeft">
        <span className="logo">CKs media</span>
      </div>
      <div className="navbarRight">
        <CustomizedDialogs>
          <PostForm/>
        </CustomizedDialogs>
      </div>
    </div>
  );
}

export default navbar;
