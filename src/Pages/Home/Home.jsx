import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { Box, Divider, Stack, Text, Image, HStack, Button, TabList, Tab, TabPanels, TabPanel, Tabs } from '@chakra-ui/react'
import axios from "axios"
import { AutoSlider } from '../../Sliders/AutoSlider'
import { ManualSlider } from '../../Sliders/ManualSlider'

function Home() {
  let [data, setData] = useState([])
  let [widthScr, setWidthScr] = useState(null)

  const calculateImageWidth = () => {
    const screenWidth = window.innerWidth;
    const desiredWidth = screenWidth * 0.9;
    setWidthScr(desiredWidth)
  }

  useEffect(() => {

    async function fetchData() {
      try {
        let res = await axios({
          method: "get",
          url: "../../../homedb.json"
        })
        let dataRes = res.data
        setData(dataRes)

      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <Divider my="2" />
      {/* Notification 1 */}
      <Box
        bg="rgba(0, 0, 0, 0.16)"
        p="10px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        <Text>We're evolving. SkinStore is becoming Dermstore, continue your skin health journey with the premier skin care authority.</Text>
      </Box>

      {/* Notification 2 */}
      <Box
        bg="black"
        color="white"
        p="10px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        <Text fontSize='xl' as='b'>Shop Dermstore and receive TWO free gifts with any $200+ purchase. SHOP NOW
        </Text>
      </Box>

      {/* First slider */}


      <AutoSlider width="1440">
        <Stack direction="row" spacing={0} p={4}>
          {data.map((obj, i) =>
            obj.catagory === "imgScroll" ? (
              <Box key={i} display="flex" flex="0 0 auto">
                <Image src={obj.img} alt={obj.category} maxW="1440px" maxH="400px" />
              </Box>
            ) : null
          )}
        </Stack>
      </AutoSlider>

      {/* DermaStore slider */}
    
      <Box
        p="10px"

        textAlign="center"
      >
        <Text fontSize='3xl'  >Shop by Top Brands on Dermastore</Text>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <ManualSlider>
            <HStack spacing={4} p={4} >
              {data.map((obj, i) =>
                obj.catagory === "dermstore brand" ? (
                  <Box key={i} display="flex" flex="0 0 auto">
                    <Image src={obj.img} alt={obj.category} width="200px" height="200px" />

                  </Box>
                ) : null
              )}
            </HStack>
          </ManualSlider>



        </Box>

      </Box>
      {/* Adds */}
      <Box p="10px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >

        <Image src='https://static.thcdn.com/images/xlarge/webp/widgets/121-us/08/original-rewards.desktop-112408.png' alt='img' width="90%" height="350px" />
      </Box>

      {/* Trandin on derma store */}
      <Box
        p="10px"

        textAlign="center"
      >
        <Text fontSize='3xl'>Dermastore Sale</Text>
      </Box>


      <ManualSlider>
        <Box
          display="flex"
          justifyContent="center"
        >
          <HStack spacing={4} p={4} >
            {data.map((obj, i) =>
              obj.catagory === "dermstore sale" ? (
                <Box key={i} maxW="450px" gap="50px" textAlign="center" >
                  <Image src={obj.img} alt={obj.category} width="400px" height="400px" />
                  <Box
                    whiteSpace="wrap"
                  >
                    <Text fontSize='xl' isTruncated maxWidth="300px">{obj.title}</Text>
                    <Text fontSize='gl' noOfLines={2} maxWidth="300px" mb={4}>{obj.discription}</Text>
                    <Button>{obj.button}</Button>
                  </Box>


                </Box>
              ) : null
            )}
          </HStack>
        </Box>
      </ManualSlider>

      {/* Tabls 15% Off and up to 50% Off */}

      <Tabs>
        <TabList justifyContent="center">
          <Tab
            _selected={{ color: "black", fontWeight: "bold", borderBottom: "2px solid black" }}
            _hover={{ color: "gray.600" }}
          >15% off The Ordinary</Tab>
          <Tab
            _selected={{ color: "black", fontWeight: "bold", borderBottom: "2px solid black" }}
            _hover={{ color: "gray.600" }}
          >Up to 50% off</Tab>

        </TabList>

        <TabPanels>
          <TabPanel>
            <ManualSlider>
              <Box
                display="flex"
                justifyContent="center"
              >
                <HStack spacing={4} p={4} >
                  {data.map((obj, i) =>
                    obj.catagory === "15% off The Ordinary" ? (
                      <Box key={i} w="300px" gap="50px" textAlign="center" >
                        <Image src={obj.img} alt={obj.category} width="300px" height="300px" />
                        <Box
                          whiteSpace="wrap"
                        >
                          <Text fontSize='gl' maxWidth="300px">{obj.title}</Text>
                          <Box border="1px solid red">{obj.box}</Box>
                          <Text fontSize='gl' noOfLines={2} maxWidth="300px" mb={4}>{obj.rating} {obj.reviews}</Text>
                          <Text>
                            ${obj.price}
                          </Text>
                          <Button bg="RGBA(0, 0, 0, 0.80)" color="white" _hover={{ bg: "skyblue" }}>{obj.button}</Button>
                        </Box>


                      </Box>
                    ) : null
                  )}
                </HStack>
              </Box>
            </ManualSlider>
          </TabPanel>
          <TabPanel>
            <ManualSlider>
              <Box
                display="flex"
                justifyContent="center"
              >
                <HStack spacing={4} p={4} >
                  {data.map((obj, i) =>
                    obj.catagory === "Upto 50% Off" ? (
                      <Box key={i} w="300px" gap="50px" textAlign="center" >
                        <Image src={obj.img} alt={obj.category} width="300px" height="300px" />
                        <Box
                          whiteSpace="wrap"
                        >
                          <Text fontSize='gl' maxWidth="300px">{obj.title}</Text>
                          <Box border="1px solid red">{obj.box}</Box>
                          <Text fontSize='gl' noOfLines={2} maxWidth="300px" mb={4}>{obj.rating} {obj.reviews}</Text>
                          <Text>
                            ${obj.price}
                          </Text>
                          <Button bg="RGBA(0, 0, 0, 0.80)" color="white" _hover={{ bg: "skyblue" }}>{obj.button}</Button>
                        </Box>


                      </Box>
                    ) : null
                  )}
                </HStack>
              </Box>
            </ManualSlider>
          </TabPanel>
        </TabPanels>
      </Tabs>

      {/* Bestseller */}
      <Box
        p="10px"

        textAlign="center"
      >
        <Text fontSize='3xl'>Bestseller</Text>
      </Box>

      <Box display="flex" justifyContent="center" gap="50px">
        {data
          .filter(obj => obj.catagory === "bestsellerHome")
          .slice(0, 4)
          .map((obj, i) => (
            <Box key={i} w="300px" gap="50px" textAlign="center">
              <Image src={obj.img} alt={obj.category} width="300px" height="300px" />
              <Box whiteSpace="normal">
                <Text fontSize='gl' maxWidth="300px">{obj.title}</Text>
                <Box border="1px solid red">{obj.box}</Box>
                <Text fontSize='gl' maxWidth="300px" mb={4}>
                  {obj.rating} {obj.reviews}
                </Text>
                <Text>${obj.price}</Text>
                <Button bg="RGBA(0, 0, 0, 0.80)" color="white" _hover={{ bg: "skyblue" }}  onClick={() =>{
                  let getData = JSON.parse(localStorage.getItem("bucket")) || [];
                  getData.push(obj);
                  localStorage.setItem("bucket", JSON.stringify(getData))
                } }>
                  {obj.button}
                </Button>
              </Box>
            </Box>
          ))}

      </Box>

      {/* button view all */}
        <Divider my="4"/>
      <Box
      display="flex"
      justifyContent="center"
      >
      <Link to="/bestseller">
        <Button variant="outline" borderColor="black" color="black" _hover={{ bg: 'black', color: 'white' }}>
          View All
        </Button>
      </Link>

      </Box>
      <Divider my="4"/>

      

    </>
  )
}

export { Home }