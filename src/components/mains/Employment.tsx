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

const StyledH2 = styled.h2`
    text-align: center;
    color: black;
`

const StyledP = styled.p`
    margin: auto;
    padding-left: 5%;
    font: 16px/1.5 "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: black;
    text-align: left;
`

const StyledWrapper = styled.div`
    padding-right: 5%;
    padding-left: 5%;
`

export default function Employment() {

    return (
        <StyledMain>
            <StyledWrapper>
            <StyledH2>Employment Experience</StyledH2>
            <StyledP><u>Questrom School of Business:</u><em> Finance Research Assistant, </em><br/><em>April 2024 - January
                2025</em></StyledP>
                <br></br><br></br>
            <StyledP><u>Boston University Residence Life:</u><em> Resident Assistant, </em><br/><em>August 2022 - January
                2024</em></StyledP>
                <br></br><br></br>
            <StyledP><u>Questrom School of Business:</u><em> Market Research Assistant, </em><br/><em>August 2022 - January
                2024</em></StyledP>
                <br></br><br></br>
            <StyledP><u>Center for Information and Systems Engineering:</u><em> Communications Assistant, </em><br/><em>April
                2023 - August 2023</em></StyledP>

            </StyledWrapper>
        </StyledMain>
    );
}