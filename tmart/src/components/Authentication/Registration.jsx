import SocialMedia from "../SocialMedia";

const Registration = ({ isSelectedRegister }) => {
  return (
    <div id="register" role="tabpanel" className={`single__tabs__panel tab-pane fade ${isSelectedRegister ? "in active" : ""}`}>
      <form className="login" method="post">
        <input type="text" placeholder="Name*" />
        <input type="email" placeholder="Email*" />
        <input type="password" placeholder="Password*" />
      </form>
      <div className="tabs__checkbox">
        <input type="checkbox" />
        <span> Remember me</span>
      </div>
      <div className="htc__login__btn">
        <a href="#">register</a>
      </div>
      <div className="htc__social__connect">
        <h2>Or Login With</h2>
        <ul className="htc__soaial__list">
          <SocialMedia bgName="instagram" icon="instagram" />
          <SocialMedia bgName="facebook" icon="facebook" />
          <SocialMedia bgName="googleplus" icon="google-plus" />
          <SocialMedia bgName="twitter" icon="twitter" />
        </ul>
      </div>
    </div>
  );
};

export default Registration;
