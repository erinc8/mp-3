import styled from "styled-components";

const StyledMain = styled.main`
    flex: 1;
    width: 90vw;
    background-color: whitesmoke;
    height: 100vh;
    
    @media (max-width: 750px) {
        
        width: 90vw;
    }
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
