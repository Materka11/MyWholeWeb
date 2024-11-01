import "../styles/mobile/footer.css";
import "../styles/desktop/footer.css";
import { SocialLinks } from "../components/SocialLinks";

export const Footer = () => (
  <div className="footer">
    <SocialLinks />
    <span>© Arkadiusz Materka 2022</span>
  </div>
);
