import { HStack, Image, Text } from "@chakra-ui/react";
import RLogo from "../assets/randomeLogo.webp.ico";
import ColorModeSwitch from "./ColorModeSwitch";
const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={RLogo} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
