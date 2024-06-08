import React from 'react'
import { Link } from 'react-router-dom'
import { Box } from '@chakra-ui/react'

function Navbar() {
  const links = [
    { to: "/discover-dermstore", label: "Discover Dermstore" },
    { to: "/brands", label: "Brands" },
    { to: "/sale", label: "Sale" },
    { to: "/skin-care", label: "Skin Care" },
    { to: "/sunscreen", label: "Sunscreen" },
    { to: "/makeup", label: "Makeup" },
    { to: "/hair-care", label: "Hair Care" },
    { to: "/tools-devices", label: "Tools & Devices" },
    { to: "/bath-body", label: "Bath & Body" },
    { to: "/fragrance", label: "Fragrance" },
    { to: "/blog", label: "Blog" },
    // { to: "/login", label: "LogIn" },
    // { to: "/signup", label: "SignUp" },
  ];

  return (
    <nav>
    {links.map((obj, index) => (
      <Box
        key={index}
        as={Link}
        to={obj.to}
        style={{ margin: '0 10px' }}
        _hover={{ bg: 'black', color: 'white', borderRadius: '4px' }}
        p="2"
      >
        {obj.label}
      </Box>
    ))}
  </nav>
  );
}

export { Navbar }