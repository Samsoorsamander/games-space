import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCards from "./GameCards";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenre";
import { GameQuery } from "../App";
import React from "react";
interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useGames(gameQuery);
  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13.14, 15, 16, 17, 18, 19, 20, 21.22,
    23, 24, 25,
  ];

  if (error) return <Text>{error.message}</Text>;
  return (
    <Box padding="10px">
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data?.pages.map((page) => (
          <React.Fragment>
            {page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCards game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
        {/* {data?.results.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCards game={game} />
        </GameCardContainer>
      ))} */}
      </SimpleGrid>
      <Button onClick={() => fetchNextPage()} marginY={5}>
        {isFetchingNextPage ? "Loading..." : "Load More"}
      </Button>
    </Box>
  );
};

export default GameGrid;
