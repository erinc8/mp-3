import styled from "styled-components";

const StyledMain = styled.main`
    flex: 1;
    width: 90vw;
    background-color: whitesmoke;
    height: 100vh;
    
`

const StyledH2 = styled.h2`
    text-align: center;
    color: black;
`

const StyledP = styled.p`
    margin: auto;
    padding: 5%; 
    font: 16px/1.5 "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: black;
`

export default function achievements() {
    return (
        <StyledMain>
            <StyledH2>Achievements</StyledH2>
            <StyledP><u>Boston University</u>, Undergraduate Research Opportunities Program (UROP) Award Recipient: <br/><em>Fall
                2024</em></StyledP>
            <StyledP><u>University of California, Irvine</u>, Dean's Honors List: <br/><em>Fall 2020, Winter 2021</em></StyledP>
            <StyledP><u>Davis Senior High School</u>, Overall Outstanding Athlete: <br/><em>Spring 2020</em></StyledP>
            <StyledP><u>The Music Teacher's Association of California</u>, Completion of Certificate of Merit: <br/><em>Spring
                2019</em></StyledP>
        </StyledMain>
    );
};


