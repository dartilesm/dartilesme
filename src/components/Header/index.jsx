import { SOCIAL_MEDIA_LIST } from "../../constants/social-medias";
import Menu from "./Menu";
import { StyledHeader } from "./styles";

const MENU_ITEMS = [
  {
    name: "Sobre mi",
    href: "#about-me",
  },
  {
    name: "Proyectos",
    href: "#projects",
  },
  {
    name: "Historia",
    href: "#history",
  },
  {
    name: "Tecnologías",
    href: "#technologies",
  },
];

const Header = () => {

  return (
    <StyledHeader as='header'>
            <Menu links={SOCIAL_MEDIA_LIST} items={MENU_ITEMS} />
    </StyledHeader>
  );
};

export default Header;
