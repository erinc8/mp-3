import styled from "styled-components";
import BuPhoto from "/Boston-University-Emblem.png";
import DavisHighPhoto from "/Davis_Senior_High_School_seal.png";


const StyledMain = styled.main`
    flex: 1;
    width: 90vw;
    background-color: whitesmoke;
    height: 100vh;
    
    @media (max-width: 750px) {
        
        width: 90vw;
    }
`

const StyledP = styled.p`
    margin: auto;
    padding: 5%;
    font: 16px/1.5 "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: black;
    text-align: center;
`

const StyledH2 = styled.h2`
    text-align: center;
    color: black;
`

const StyledImageDHS = styled.img `
    padding-left: 40%;
    padding-bottom: 10%;
    width: 20%;
    height: auto;
  
`

const StyledImageBU = styled.img `
    padding-left: 30%;
    width: 40%;
    height: auto;
`

export default function Education() {

    return (
        <StyledMain>
            <StyledH2>Educational Background</StyledH2>
            <StyledP>
                B.S. in Business Administration, <em>Concentration in Information Systems,</em>{" "}
                <u>Boston University, MA</u>
                <br />
                <em>May 2025</em>
            </StyledP>
            <StyledImageBU src={BuPhoto} alt="Boston University" />
            <StyledP>
                High School Diploma, <u>Davis Senior High School, CA</u>
                <br />
                <em>June 2020</em>
            </StyledP>
            <StyledImageDHS src={DavisHighPhoto} alt="Davis Senior High School" />
        </StyledMain>
    );
}