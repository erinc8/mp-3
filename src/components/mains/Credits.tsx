import styled from "styled-components";

const StyledMain = styled.main`
    margin: auto;
    background-color: whitesmoke;
    padding: 5%;
    height: 100vh;
    width: 100%;
`
const StyledP= styled.p`
    color: black;
    text-align: center;
`
export default function credits() {

    return (
        <StyledMain>
            <StyledP>Error: 404 page not found</StyledP>
        </StyledMain>
    );
}
