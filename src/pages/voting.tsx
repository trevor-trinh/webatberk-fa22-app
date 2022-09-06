import type { NextPage } from "next";
import Layout from "../components/Layout";
import VotingCard from "../components/VotingCard";
import { SimpleGrid, Text } from "@chakra-ui/react";
import { useDataContext } from "../context/data";

const Voting: NextPage = () => {
  const data = useDataContext();

  return (
    <Layout>
      <SimpleGrid columns={2} spacing={10} spacingX={20} m="auto">
        {data ? (
          data.voting.map((item: any) => (
            <VotingCard
              name={item.name}
              score={item.score}
              image={item.image}
              key={item.name}
            />
          ))
        ) : (
          <Text>Loading</Text>
        )}
      </SimpleGrid>
    </Layout>
  );
};

export default Voting;
