import React, { useState } from 'react'
import { Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'


function Search() {
  let navigate = useNavigate()
  let [input, setInput] = useState("")
  function handleSearch() {
    localStorage.setItem("search", input)
    navigate("searchdisplay")
  }
  return (
    <InputGroup width="300px">
      <Input
        placeholder="Search 🔍"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <InputRightElement width="3rem">
        
          <Button h="1.75rem" size="sm" onClick={handleSearch}>
            🔍
          </Button>
        
      </InputRightElement>
    </InputGroup>
  )
}

export { Search }