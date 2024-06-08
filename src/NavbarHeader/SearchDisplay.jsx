import { Box, Button, Text, Image, Stack, Grid, GridItem, Radio, RadioGroup, Heading, filter } from "@chakra-ui/react"
import { useState, useEffect } from "react"
import axios from 'axios'

function SearchDisplay() {
    let [search, setSearch] = useState("")
    useEffect(() => {
        let searchval = localStorage.getItem("search")
        setSearch(searchval)
    }, [])



    let [data, setData] = useState([])
    let [mData, setmData] = useState([])

    useEffect(() => {

        async function fetchData() {
            try {
                let res = await axios({
                    method: "get",
                    url: "../../db.json"
                })
                let dataRes = res.data
                console.log(dataRes.toolsdevices)
                let allData = [
                    ...dataRes.skincare,
                    ...dataRes.sunscreem,
                    ...dataRes.makeup,
                    ...dataRes.haircare,
                    ...dataRes.toolsdevices
                ];

                setData(allData)

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

    useEffect(() => {
        let sData = data.filter(obj =>
            obj.category === "products" && obj.title.replaceAll(" ", "") === search.replaceAll(" ", "")
        );
        setmData(sData);
    }, [data, search])



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
                        <Text fontSize='3xl'>Search</Text>
                    </Box>

                    {console.log(data)}

                    <Box p={4}>
                        <Grid templateColumns='repeat(3, 1fr)' gap={4}>
                            {data.map((obj, i) =>
                                obj.category === "products" && obj.title.replaceAll(" ", "") == search.replaceAll(" ", "") ? (
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

export { SearchDisplay }