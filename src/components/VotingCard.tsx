import {
  Box,
  HStack,
  Image,
  Text,
  VStack,
  Flex,
  IconButton,
} from "@chakra-ui/react";
import { ChevronUpIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";

const VotingCard = ({
  name,
  score,
  image,
}: {
  name: string;
  score: number;
  image: string;
}) => {
  const [scor, setScor] = useState(
    parseInt(localStorage.getItem(name)!) || score
  );

  useEffect(() => {
    localStorage.setItem(name, JSON.stringify(scor));
  }, [scor]);

  return (
    <Box overflow="hidden" w="md">
      <Image w="full" h={200} fit="cover" src={image} />

      <Flex
        justifyContent={"space-between"}
        px={4}
        py={3}
        bg="rgba(241, 237, 223, 1)"
      >
        <VStack spacing={0} alignItems="flex-start">
          <Text fontWeight={"bold"} fontSize="lg">
            {name}
          </Text>
          <Text fontWeight={"semibold"}>Score: {scor.toLocaleString()}</Text>
        </VStack>

        <HStack>
          <VotingButton
            Icon={ChevronUpIcon}
            onClick={() => setScor((prev) => prev + 1)}
          />
          <VotingButton
            Icon={ChevronDownIcon}
            onClick={() => setScor((prev) => prev - 1)}
          />
        </HStack>
      </Flex>
    </Box>
  );
};

const VotingButton = ({
  Icon,
  onClick,
}: {
  Icon: typeof ChevronUpIcon | typeof ChevronDownIcon;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) => (
  <IconButton
    icon={<Icon boxSize={"2.5em"} />}
    borderRadius={"3xl"}
    width="75px"
    height="40px"
    shadow={"md"}
    bgColor="rgba(239, 220, 182, 1)"
    _hover={{ shadow: "xl" }}
    aria-label={"voting button"}
    onClick={onClick}
  />
);

export default VotingCard;
