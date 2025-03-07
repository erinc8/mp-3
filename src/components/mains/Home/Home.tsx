import styled from "styled-components";
import resumePhoto from "/1654646461330.jpg";

const StyledP = styled.p`
    margin: auto;
    padding: 5%;
    font: calc(0.9vw + 1px) "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: black;
    
    @media (max-width: 750px) {

        width:90vw;
    }
`

const StyledHome = styled.div`
    flex: 1;
    
    
    background-color: whitesmoke;
    height: 100vh;
    
    @media (max-width: 750px) {
        
        width:100vw;
    }
    
`

const StyledImage = styled.img`
    width: 40%;
    padding-left: 30%;
`

const StyledH2 = styled.h2`
    text-align: center;
    color: black;
`
export default function home() {
   return (
       <StyledHome>
           <br></br>
               <StyledH2>Home</StyledH2>
           <StyledImage src={resumePhoto} alt="resume photo" />

                   <StyledP> My name is Erin Cheng, and I am a senior undergraduate student at Boston University.
                       I am majoring in Business Administration, with a concentration in Information Systems.
                       Additionally, I have minors in both Economics and Computer Science. This multidisciplinary approach to my education
                       reflects my keen interest in understanding the broader economic context of business decisions, as well as
                       developing technical skills in computer science. After working as a research assistant in Finance, I have developed a
                       strong interest in analytical work, and hope to forge a career in data analytics moving forward. On my free time,
                       I enjoy a variety of artistic and athletic hobbies, including cello, guitar, photography, and running.</StyledP>
                   <StyledP>Welcome to my website, here you will find my <u>Educational</u> and my <u> Employment</u> history;
                       as well as other information that might be of interest to you.</StyledP>

       </StyledHome>
                   );
                   };