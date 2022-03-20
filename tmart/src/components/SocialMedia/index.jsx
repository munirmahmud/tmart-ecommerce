const SocialMedia = ({ bgName, icon, socialLink = "#" }) => {
  return (
    <li>
      <a className={`bg--${bgName}`} href={`${socialLink}`}>
        <i className={`zmdi zmdi-${icon}`}></i>
      </a>
    </li>
  );
};

export default SocialMedia;
