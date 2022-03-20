import { useState } from "react";
import { Link } from "react-router-dom";
import SocialMedia from "../SocialMedia";

const Login = ({ isSelectedLogin }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("submitted");

    try {
    } catch (error) {
      console.warn("Login error", error);
    }

    // after successful submission remove the text from the fields
    setUserName("");
    setPassword("");
  };

  return (
    <div id="login" role="tabpanel" className={`single__tabs__panel tab-pane fade ${isSelectedLogin ? "in active" : ""}`}>
      <form className="login" onSubmit={handleSubmit}>
        <input type="text" placeholder="User Name*" onChange={(e) => setUserName(e.target.value)} />
        <input type="password" placeholder="Password*" onChange={(e) => setPassword(e.target.value)} />

        <div className="tabs__checkbox">
          <input type="checkbox" />
          <span> Remember me</span>
          <span className="forget">
            <Link to="#">Forget Pasword?</Link>
          </span>
        </div>
        <div className="htc__login__btn mt--30">
          <button type="submit">Login</button>
        </div>
      </form>

      <div className="htc__social__connect">
        <h2>Or Login With</h2>
        <ul className="htc__soaial__list">
          <SocialMedia bgName="instagram" icon="instagram" />
          <SocialMedia bgName="facebook" icon="facebook" />
          <SocialMedia bgName="googleplus" icon="google-plus" />
        </ul>
      </div>
    </div>
  );
};

export default Login;
