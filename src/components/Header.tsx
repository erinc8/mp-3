import styled from 'styled-components';

const ParentContainer = styled.div`
    padding: 0;
    width: 100%;
    margin: 0;
    background-color: black;
    box-sizing: border-box;
    overflow-x: hidden;
    
    @media (max-width: 750px) {
        overflow: hidden;
        width: 100vw;
    }
`

const StyledHeader = styled.header`
    font-size: calc(2vw + 1vh);
    background: black;
    color: white;
    padding: 20px;
    width: 100%;
    margin: 0;
    box-sizing: border-box;
    
    @media (max-width: 750px) {
        width: 100vw;
        text-align: center;
        margin: auto 0;
    }
`

const StyledP=styled.p`
    padding-left: 5%;
    font: 16px/1.5 "Helvetica Neue", Helvetica, Arial, sans-serif;
    
    @media (max-width: 750px) {
        text-align: center;
    }
`
const StyledH1 = styled.h1`
    color: white;
    font-size: calc(4vw + 1vh);
    padding-left: 5%;
`


export default function header() {
    return (
        <ParentContainer>
            <StyledHeader>
                <StyledH1>Erin Cheng</StyledH1>
                <StyledP>My online resume</StyledP>
            </StyledHeader>
        </ParentContainer>

    );
}
