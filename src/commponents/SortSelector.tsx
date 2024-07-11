import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronBarDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        Ordere by: Relevence
      </MenuButton>
      <MenuList>
        <MenuItem>Relevence</MenuItem>
        <MenuItem>Date adde</MenuItem>
        <MenuItem>Name</MenuItem>
        <MenuItem>Release date</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
