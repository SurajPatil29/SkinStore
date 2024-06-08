import { Box, Button, Text, Image, Stack, Grid, GridItem, Radio, RadioGroup, Heading, filter } from "@chakra-ui/react"
import { useState, useEffect } from "react"
import axios from 'axios'

function Sunscreen() {
  let [data, setData] = useState([])
  let [mData, setmData] = useState([])

  useEffect(() => {

    async function fetchData() {
      try {
        let res = await axios({
          method: "get",
          url: "https://royal-crawling-coreopsis.glitch.me/sunscreem"
        })
        let dataRes = res.data
        console.log(dataRes.sunscreem)
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
            <Text fontSize='3xl'>Sunscreen</Text>
          </Box>
          <Box>
            <Text fontSize='sm' noOfLines={isExpanded ? undefined : 4}>
              A step not to be missed in your daily routine, sun care protects skin from the effects of sun damage. Sun care arrives in the form of creams, moisturizers, serums, sprays, and even lip balms, each enhanced with SPF to defend against harmful UVA and UVB rays. Not only is it important to use sun care prior to sun exposure, but using an after sun helps to take care of sun-exposed skin by visibly soothing redness and moisturizing dryness. Looking for glowing skin without the sun exposure? Our range of self-tanning products offers an instant and gradual tan for the face and body. With sun exposure being one of the main causes of the visible signs of aging, investing in sun care is an important part of your skin routine. Whether opting for a mineral or chemical formula, sunscreen helps to protect skin from the main cause of wrinkles, fine lines, a loss of firmness and discoloration. Spending time in the sun can leave skin feeling dry and tight. Our after sun care selection offers much-needed hydration and nourishment for sun-exposed skin. From soothing lotions to moisturizing lip care, there is a formula to suit every skin type from top to toe. Shop new products and bestsellers from brands such as EltaMD, La Roche-Posay and SkinCeuticals, as well as gifts and sets to cater to all your sun care needs. Shop all sun care at SkinStore.

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

export { Sunscreen }