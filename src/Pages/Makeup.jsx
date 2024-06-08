import { Box, Button, Text, Image, Stack, Grid, GridItem, Radio, RadioGroup, Heading, filter } from "@chakra-ui/react"
import { useState, useEffect } from "react"
import axios from 'axios'

function Makeup() {
  let [data, setData] = useState([])
  let [mData, setmData] = useState([])

  useEffect(() => {

    async function fetchData() {
      try {
        let res = await axios({
          method: "get",
          url: "https://royal-crawling-coreopsis.glitch.me/makeup"
        })
        let dataRes = res.data
        console.log(dataRes.makeup)
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
            <Text fontSize='3xl'>Makeup</Text>
          </Box>
          <Box>
            <Text fontSize='sm' noOfLines={isExpanded ? undefined : 4}>
              Shop your favorite makeup products here at SkinStore. We are an authorized retailer for a great selection of brands including Stila, Illamasqua, By Terry & many more. Away from your everyday makeup favorites like foundations, lip color, blushes and eye shadows, our collection of cosmetics also includes eyelash and eyebrow enhancers, mineral concealers, makeup primers and teeth whitening systems just to name a few. Flawless foundations can help improve the appearance of the complexion, concealing flaws and creating a smooth finish. Our foundations are available in various degrees of coverage as well as different formulas to suit the needs of different skin types. Some foundations even contain ingredients which help improve the overall condition of the skin. Our eye shadows, lip color, blushes and mascaras also come in a variety of different shades and formulas to subtly enhance features or “wow the crowd”, depending on your mood and tastes. The possibilities are endless when perusing all that is available from the cosmetics collection.
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

export { Makeup }