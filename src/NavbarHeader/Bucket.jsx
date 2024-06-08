import React, { useEffect, useState } from 'react'
import { Box, Grid, GridItem, Image, Text, Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

function Bucket() {
  let [data, setData] = useState([])
  let navigate = useNavigate()

  useEffect(()=>{
    let getData = JSON.parse(localStorage.getItem("bucket")) || []
    setData(getData)
  },[])
  return (
    <Box p={4}>
            <Grid templateColumns='repeat(3, 1fr)' gap={4}>
              {data.map((obj, i) =>
                obj.category === "products" ? (
                  <GridItem key={i} textAlign="center">
                    <Image src={obj.img} alt={obj.category} width="300px" height="300px" />
                    <Box whiteSpace="wrap">
                      <Text fontSize='gl' maxWidth="300px">{obj.title}</Text>
                      <Box border="1px solid red">{obj.offer}</Box>
                      <Text fontSize='gl' noOfLines={2} maxWidth="300px" mb={4}>{obj.rating} {obj.rewive}</Text>
                      <Text>${obj.price}</Text>
                      <Button bg="RGBA(0, 0, 0, 0.80)" color="white" _hover={{ bg: "skyblue" }} onClick={() => {
                        
                        localStorage.setItem("cart", JSON.stringify(obj))
                        navigate("/cart")
                      }}>
                        {obj.button}
                      </Button>                    </Box>

                  </GridItem>
                ) : null
              )}
            </Grid>
          </Box>
  )
}

export { Bucket}