import { NextImage } from "next/image";
import NextLink from "next/link";
import {
  Box,
  List,
  ListItem,
  ListIcon,
  Divider,
  Center,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/layout";
import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavourite,
} from "react-icons/md";

const navMenu = [
  {
    name: "Home",
    icon: MdHome,
    route: "/",
  },
  {
    name: "Search",
    icon: MdSearch,
    route: "/search",
  },
  {
    name: "My Library",
    icon: MdLibraryMusic,
    route: "/library",
  },
];

const Sidebar = () => {
  return (
    <Box
      height="calc(100vh - 100px)"
      width="100%"
      bg="black"
      paddingX="25px"
      color="gray"
    >
      <Box paddingY="10px">
        <Box width="120px" marginBottom="20px" paddingY="20px">
          <img src="/react-code.jpeg" height={60} width={60} alt="logo" />
        </Box>
        <Box marginBottom="20px">
          <List space={2}>
            {navMenu.map((menu) => (
              <ListItem paddingX="20px" fontSize="16px" Key={menu.name}>
                <LinkBox>
                  <NextLink href={menu.route} passHref>
                    <LinkOverlay>
                      <ListIcon
                        as={menu.icon}
                        color="white"
                        marginRight="20px"
                      />
                      {menu.name}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
