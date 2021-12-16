import { Box } from "@chakra-ui/react";
import Sidebar from "./sidebar";

export const PlayerLayout = ({ children }) => {
  return (
    <Box width="100vw" height="100vh">
      <Box position="absolute" top="0" width="250px" left="0">
        <Sidebar />
      </Box>
      <Box marginLeft="250px" marginBottom="100px">
        {children}
      </Box>
      <Box absolute="absolute" left="0" bottom="0">
        Player
      </Box>
    </Box>
  );
};
