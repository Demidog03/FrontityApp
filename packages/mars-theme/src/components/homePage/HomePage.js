import React from "react"
import {styled} from "frontity";

const Container = styled.div`
  max-width: 800px;
  margin: 0;
  padding: 24px;
`

const Title = styled.h1`
  margin: 24px 0 8px;
  collapse: rgba(12, 17, 73);
`

const HomePage = (props) => {
    return <Container>
        <Title>Welcome to Frontity!!!</Title>
    </Container>
}

export default HomePage