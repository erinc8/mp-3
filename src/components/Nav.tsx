import {Link} from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
    flex-wrap: wrap;
    justify-content: space-between;
    display: block;
    font-size: calc(2vw + 1vh);
    width: 30%;
   
    background-color: ghostwhite;
    padding: 20px;
    
    @media (max-width: 750px) {
       width :90vw;
     
        
    }
`

const StyledUl = styled.ul`
    justify-content: left;
    
    @media (max-width: 750px) {
        margin: 0;
        flex-wrap: nowrap;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width :93vw;
        padding: 0;
        background-color: ghostwhite;
    }
`

const StyledLi= styled.li`
    flex: 1;
    padding: 10px;
    text-align: center;
    
    @media (max-width: 750px) {
       
        list-style:none;
        
        text-align: center;
        font-size: calc(0.5vw + 1vh);
        
    }
`

const StyledLink=styled(Link)`

    color: whitesmoke;
    display: flex; 
    justify-content: center; 
    align-items: center; 
    padding: 20%;
    background-color: darkslategray;
    border-radius: 5px;
    font-size: calc(0.5vw + 1vh);
    

    
    
    @media (max-width: 750px) {
        margin: 0;
        padding:0;
        gap: 1px;
        font-size: calc(0.9vw);
        
        
        
    }
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