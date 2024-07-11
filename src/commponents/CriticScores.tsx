import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScores = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 65 ? "yellow" : "";
  return (
    <>
      <Badge
        fontSize="14px"
        colorScheme={color}
        borderRadius="4px"
        paddingX={0}
      >
        {score}
      </Badge>
    </>
  );
};

export default CriticScores;
