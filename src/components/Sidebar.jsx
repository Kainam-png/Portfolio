import Avatar from "../img/img.jpg";
import "../styles/components/sidebar.sass";
import InformationContainer from "./InformationContainer";
import SocialNetwork from "./SocialNetwork";
const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="kainam" />
      <p className="title">Desenvolvedor</p>
      <SocialNetwork/>
      <InformationContainer/>
      <a href="https://drive.google.com/drive/folders/1F7JsAIXfU88JfTHa0lFb6PgNVXXCCQ_Y" target="_blank" className="btn">
        Download curriculo
      </a>
    </aside>
  );
};

export default Sidebar;
