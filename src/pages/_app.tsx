import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { DataWrapper } from "../context/data";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <DataWrapper>
        <Component {...pageProps} />
      </DataWrapper>
    </ChakraProvider>
  );
}

export default MyApp;
