import { Box, Button, Text, Image, Stack, Grid, GridItem, Radio, RadioGroup, Heading, filter } from "@chakra-ui/react"
import { useState, useEffect } from "react"
import axios from 'axios'

function ToolsDevices() {
  let [data, setData] = useState([])
  let [mData, setmData] = useState([])

  useEffect(() => {

    async function fetchData() {
      try {
        let res = await axios({
          method: "get",
          url: "https://royal-crawling-coreopsis.glitch.me/toolsdevices"
        })
        let dataRes = res.data
        console.log(dataRes.toolsdevices)
        setData(dataRes)
        setmData(dataRes)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  function handleRadioPrice(value) {
    if ("highToLow" === value) {
      let pData = mData
        .filter(obj => obj.category === "products")
        .sort((a, b) => b.price - a.price);
      console.log(pData)
      setData(pData);
    } else if ("lowToHigh" === value) {
      let pData = mData
        .filter(obj => obj.category === "products")
        .sort((a, b) => a.price - b.price);

      setData(pData);
    } else if (value === "all") {
      setData(mData)
    }
  }
  function handleRadioType(value) {
    if ("new" === value) {
      let pData = mData
        .filter(obj => obj.category === "products" && obj.update === "new")
      console.log(pData)

      setData(pData)
    } else if ("light" === value) {
      let pData = mData
        .filter(obj => obj.category === "products" && obj.skinTone === "light")
      console.log(pData)

      setData(pData)
    } else if ("dark" === value) {
      let pData = mData
        .filter(obj => obj.category === "products" && obj.skinTone === "dark")
      console.log(pData)

      setData(pData)
    }

  }


  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  }
  return (
    <>
      <Grid templateColumns='1fr 4fr' gap={6}>
        <GridItem >
          <Text fontSize='3xl' padding={6}>
            Refine
          </Text>

          <Box border="1px solid black" padding={2} margin={4}>
            <RadioGroup onChange={handleRadioPrice}>
              <Stack spacing={4} direction='column'>
                <Radio value='all'>All</Radio>

                <Radio value='highToLow'>High To Low</Radio>
                <Radio value='lowToHigh'>Low To High</Radio>

              </Stack>
            </RadioGroup>
          </Box>
          <br />
          <Box border="1px solid black" padding={2} margin={4}>
            <RadioGroup onChange={handleRadioType}>
              <Stack spacing={4} direction='column'>

                <Radio value='new'>New</Radio>
                <Radio value='light'>Skintone Light</Radio>
                <Radio value='dark'>Skintone Dark</Radio>
              </Stack>
            </RadioGroup>
          </Box>



        </GridItem >

        <GridItem padding={4}>
          <Box
            p="10px"

            textAlign="center"
          >
            <Text fontSize='3xl'>Tools & Devices</Text>
          </Box>
          <Box>
            <Text fontSize='sm' noOfLines={isExpanded ? undefined : 4}>
              Elevate your beauty regime with our collection of tools and devices. Harnessing the techniques and technologies used in salons, spas and dermatologist offices, these tools offer both immediate and long-term benefits.


              Incorporating an at-home device into your routine minimizes the need for expensive in-salon visits and allows you to indulge in a moment of self-care. Looking to remove unwanted body hair? IPL devices work to quickly and safely eliminate hair across the body. For those looking to address visible signs of aging, an LED face mask smooths the appearance of fine lines and stimulates the production of collagen. Alternatively, create professional results with our range of stylers, hair dryers and brushes. Our collection of beauty tools also includes makeup brushes for the face and eye as well as brow and lash tools.

              Whatever your beauty needs, shop a variety of tools and devices at SkinStore.


            </Text>
            <Button onClick={handleToggle} mt={2} size="sm">
              {isExpanded ? 'Show Less' : 'Read More'}
            </Button>
          </Box>
          {console.log(data)}

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
                        let getData = JSON.parse(localStorage.getItem("bucket")) || [];
                        getData.push(obj);
                        localStorage.setItem("bucket", JSON.stringify(getData))
                      }}>
                        {obj.button}
                      </Button>                    </Box>

                  </GridItem>
                ) : null
              )}
            </Grid>
          </Box>
        </GridItem >
      </Grid>


    </>
  )
}

export { ToolsDevices }