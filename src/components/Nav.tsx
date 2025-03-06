import {Link} from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
    flex: 0 0 30%;

    flex-wrap: wrap;
    justify-content: space-between;
    display: block;
    font-size: calc(2vw + 1vh);

    max-width: 30%;
    background-color: ghostwhite;
    padding: 20px;
    height: auto;
`

const StyledUl = styled.ul`
    justify-content: center;
`

const StyledLi= styled.li`
    flex: 1;
    padding: 10px;
    text-align: center;
`

const StyledLink=styled(Link)`
    text-decoration: none;
    color: whitesmoke;
    display: block;
    padding: 10px;
    background-color: darkslategray;
    border-radius: 5px;
`

export default function nav() {
    return(

        <StyledNav>
            <StyledUl>
                <StyledLi><StyledLink to="/">Home</StyledLink></StyledLi>
                <StyledLi><StyledLink to="/Achievements">Achievements</StyledLink></StyledLi>
                <StyledLi><StyledLink to="/Documents">Documents</StyledLink></StyledLi>
                <StyledLi><StyledLink to="/Employment">Employment</StyledLink></StyledLi>
                <StyledLi><StyledLink to="/Education">Education</StyledLink></StyledLi>
                <StyledLi><StyledLink to="/References">References</StyledLink></StyledLi>
            </StyledUl>
        </StyledNav>
    )};