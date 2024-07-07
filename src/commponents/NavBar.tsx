import { HStack, Image, Text } from "@chakra-ui/react";
import RLogo from "../assets/randomeLogo.webp.ico";
const NavBar = () => {
  return (
    <HStack>
      <Image src={RLogo} />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
