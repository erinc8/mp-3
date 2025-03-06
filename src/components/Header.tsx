import styled from 'styled-components';

const ParentContainer = styled.div`
    padding: 0;
    width: 100%;
    margin: 0;
    background-color: black;
    box-sizing: border-box;
    //overflow-x: hidden;
`

const StyledHeader = styled.header`
    font-size: calc(2vw + 1vh);
    background: black;
    color: white;
    padding: 20px;
    width: 100vw;
    margin: 0;
    box-sizing: border-box;
`

const StyledP=styled.p`
    padding-left: 5%;
    font: 16px/1.5 "Helvetica Neue", Helvetica, Arial, sans-serif;
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
