import { Box, Button, Text, Image, Stack, Grid, GridItem, Radio, RadioGroup, Heading, filter } from "@chakra-ui/react"
import { useState, useEffect } from "react"
import axios from 'axios'


function Bestseller() {
    let [data, setData] = useState([])
    let [mData, setmData] = useState([])

    useEffect(() => {

        async function fetchData() {
            try {
                let res = await axios({
                    method: "get",
                    url: "../../../homedb.json"
                })
                let dataRes = res.data
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
                .filter(obj => obj.catagory === "bestseller")
                .sort((a, b) => b.price - a.price);
            console.log(pData)
            setData(pData);
        } else if ("lowToHigh" === value) {
            let pData = mData
                .filter(obj => obj.catagory === "bestseller")
                .sort((a, b) => a.price - b.price);

            setData(pData);
        } else if (value === "all") {
            setData(mData)
        }
    }
    function handleRadioType(value) {
        if ("new" === value) {
            let pData = mData
                .filter(obj => obj.catagory === "bestseller" && obj.update === "new")
            console.log(pData)

            setData(pData)
        } else if ("light" === value) {
            let pData = mData
                .filter(obj => obj.catagory === "bestseller" && obj.skinTone === "light")
            console.log(pData)

            setData(pData)
        } else if ("dark" === value) {
            let pData = mData
                .filter(obj => obj.catagory === "bestseller" && obj.skinTone === "dark")
            console.log(pData)

            setData(pData)
        }
    }
    return (
        <>
            <Grid templateColumns='1fr 4fr' gap={6}>
                <GridItem >
                    <Heading as='h2' size='xl'>
                        Refine
                    </Heading>

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
                        <Text fontSize='3xl'>Bestseller</Text>
                    </Box>
                    <Box>

                        <Text fontSize='sm'>
                            Stock up your skin care shelf, grab a makeup must-have or find a new hair hero with SkinStore’s best-selling beauty products. Starring brands like Elemis, Olaplex and Chantecaille, explore cult-classic and coveted formulas for all your beauty needs. Discover fan-favorite cosmetics, such as the Chantecaille Wild Meadows Lip Chic or browse for some skin care treats with curated sets like the SkinMedica Everyday Essentials System. Treat your tresses to a trending tool, like the innovative ghd Duet Style 2-in-1 Hot Air Styler and protect with the Olaplex No.9 Bond Protector Nourishing Hair Serum. Shop top beauty products for the skin and hair at SkinStore below.
                        </Text>
                    </Box>

                    <Box p={4}>
                        <Grid templateColumns='repeat(3, 1fr)' gap={4}>
                            {data.map((obj, i) =>
                                obj.catagory === "bestseller" ? (
                                    <GridItem key={i} textAlign="center">
                                        <Image src={obj.img} alt={obj.category} width="300px" height="300px" />
                                        <Box whiteSpace="wrap">
                                            <Text fontSize='gl' maxWidth="300px">{obj.title}</Text>
                                            <Box border="1px solid red">{obj.box}</Box>
                                            <Text fontSize='gl' noOfLines={2} maxWidth="300px" mb={4}>{obj.rating} {obj.reviews}</Text>
                                            <Text>${obj.price}</Text>
                                            <Button bg="RGBA(0, 0, 0, 0.80)" color="white" _hover={{ bg: "skyblue" }} onClick={() => {
                                                let getData = JSON.parse(localStorage.getItem("bucket")) || [];
                                                getData.push(obj);
                                                localStorage.setItem("bucket", JSON.stringify(getData))
                                            }}>
                                                {obj.button}
                                            </Button>
                                        </Box>

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

export { Bestseller }