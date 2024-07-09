import {
  Card,
  CardBody,
  HStack,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
  Text,
} from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    <Card
      marginY={4}
      height="40px"
      width="40px"
      borderRadius={8}
      overflow="hidden"
    >
      <Skeleton />
    </Card>
  );
};

export default GenreSkeleton;
