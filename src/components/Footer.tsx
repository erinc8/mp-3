import styled from "styled-components";
import {Link} from "react-router-dom";


const ParentContainer = styled.div`
    padding: 0;
    margin-right: 15%;
    margin-left:15%;
   
    background-color: black;
    box-sizing: border-box;
    

    @media (max-width: 750px) {
        width: 100vw;
        text-align: center;
        margin: 0;
        overflow: hidden;
    }
`
const StyledFooter = styled.footer`
    background: black;
    color: white;
    padding: 20px;
    max-width: 100%;
    margin: auto;
    text-align: center;
`
const StyledLink = styled(Link)`
    color: lightskyblue;
`

const StyledP = styled.p `
    margin: auto;
    padding: 5%;
    font: 16px/1.5 "Helvetica Neue", Helvetica, Arial, sans-serif;
`
export default function footer() {
    return (
        <ParentContainer>
            <StyledFooter>
                <StyledP>All rights reserved by Erin Cheng: <StyledLink to="/Credits.tsx">Credits</StyledLink> &#169; </StyledP>
            </StyledFooter>
        </ParentContainer>
    )
}