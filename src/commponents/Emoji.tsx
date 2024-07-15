import { Image, ImageProps } from "@chakra-ui/react";
import bullseye from "../assets/bullseye.ico"
import thumbsUp from "../assets/icons8_thumbs_up.ico";
import meh from "../assets/meh.ico";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "recomanded", boxSize: "25px" },
    5: { src: bullseye, alt: "exceptional", boxSize: "35px" },
  };

  if (rating < 3) return null;
  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
