import {
  AccordionPanel,
  Box,
  Heading,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  Container,
  VStack,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Layout from "../components/Layout";
import { useDataContext } from "../context/data";

const Victors: NextPage = () => {
  const data = useDataContext();

  return (
    <Layout>
      <Box display={"flex"} height="100%" flex={1}>
        <Box flex={1} bgColor={"rgba(241, 237, 223, 1)"}>
          <Container maxW={"xl"} my="15%">
            <Heading pb={"4"}>Past Victors</Heading>
            <VStack spacing={8}>
              <Text fontSize={"xl"} fontWeight={"semibold"}>
                The Grand Cheese Race has been the most elite sporting event for
                thousands of years. Every year, each country sends one honorable
                representative to compete for the Double Gloucester cheese.
              </Text>
              <Text fontSize={"xl"} fontWeight={"semibold"}>
                To remember all of the legendary victors, we keep a list of the
                past winners and a description of their victory.
              </Text>
            </VStack>
          </Container>
        </Box>
        <Box flex={1}>
          <Container my="15%">
            <Heading pb={"8"}>Scores</Heading>
            <Accordion allowMultiple defaultIndex={[]} shadow={"md"}>
              {data ? (
                data.victors.map((item: any) => (
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          <Text as="span" fontSize={"sm"}>
                            Contestant{" "}
                            <Text as="span" fontWeight={"bold"}>
                              {item.name}
                            </Text>
                          </Text>
                          <Text fontSize={"sm"}>{item.year} Winner</Text>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <Text fontSize={"sm"}>{item.description}</Text>
                    </AccordionPanel>
                  </AccordionItem>
                ))
              ) : (
                <Text>Loading</Text>
              )}
            </Accordion>
          </Container>
        </Box>
      </Box>
    </Layout>
  );
};

export default Victors;
