import { SOCIAL_MEDIA_LIST } from "../../constants/social-medias";
import Menu from "./Menu";
import { StyledHeader } from "./styles";

const MENU_ITEMS = [
  {
    name: "aboutMe",
    href: "#about-me",
  },
  {
    name: "projects",
    href: "#projects",
  },
  {
    name: "history",
    href: "#history",
  },
  {
    name: "technologies",
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
