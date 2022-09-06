import type { NextPage } from "next";
import { Box, Text, Heading, Stack } from "@chakra-ui/react";
import Layout from "../components/Layout";

const Landing: NextPage = () => {
  return (
    <Layout>
      <Box
        bgSize={"cover"}
        bgImage={
          "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/background.png')"
        }
        flex={1}
      >
        <Stack maxW={"2xl"} mt="15%" ml="10%">
          <Heading color={"white"} size={"4xl"}>
            Grand Cheese Race
          </Heading>
          <Text fontSize={"2xl"} color={"white"} fontWeight={"bold"}>
            It's the race of the century! All victors return for one final
            race... who do you think will win?
          </Text>
        </Stack>
      </Box>
    </Layout>
  );
};

export default Landing;
