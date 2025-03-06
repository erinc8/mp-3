import styled from "styled-components";

const StyledMain = styled.main`
    flex: 1;
    width: 100%;
    background-color: whitesmoke;
    height: 100vh;
    
`

const StyledTable = styled.table`
    margin: auto;
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 5%;
    border-collapse: collapse;
    width: 100%;
    
`

const StyledContent = styled.div`
    padding-right: 5%;
    padding-left: 5%;
`

const StyledH2 = styled.h2`
    color: black;
    text-align: center;
`

const StyledP = styled.p`
    color: black;
`
const StyledTr = styled.tr`
    color: black;
    font: 14px "Helvetica Neue", Helvetica, Arial, sans-serif;
`

const StyledTh = styled.th`
    color: black;
    border: 1px solid black;
    padding: 8px;
    text-align: left;
`

const StyledTd = styled.td`
    color: black;
    border: 1px solid black;
    padding: 8px;
`
export default function references() {

    return (

        <StyledMain>
            <StyledContent>
                <StyledTable>
                    <StyledH2> References </StyledH2>

                    <StyledP>Professional</StyledP>

                    <StyledTable>
                        <StyledTr>
                            <StyledTh> Name</StyledTh>
                            <StyledTh> Position</StyledTh>
                            <StyledTh> Contact</StyledTh>
                        </StyledTr>
                        <StyledTr>
                            <StyledTd> Leyla Han</StyledTd>
                            <StyledTd> Assistant Professor of Finance at Questrom School of Business</StyledTd>
                            <StyledTd> (617) 353-4415</StyledTd>
                        </StyledTr>
                        <StyledTr>
                            <StyledTd> Nachiketa Sahoo</StyledTd>
                            <StyledTd> Associate Professor, Information Systems</StyledTd>
                            <StyledTd> (617) 353-6143</StyledTd>
                        </StyledTr>
                        <StyledTr>
                            <StyledTd> Karen Chaney</StyledTd>
                            <StyledTd> Assistant Director of Residence Life for South Campus Residences</StyledTd>
                            <StyledTd> (617) 353-2102</StyledTd>
                        </StyledTr>
                    </StyledTable>


                    <StyledP>Personal</StyledP>

                    <StyledTable>
                        <StyledTr>
                            <StyledTh> Name</StyledTh>
                            <StyledTh> Relation</StyledTh>
                            <StyledTh> Contact</StyledTh>
                        </StyledTr>
                        <StyledTr>
                            <StyledTd> Evelyn Cheng</StyledTd>
                            <StyledTd> Sister</StyledTd>
                            <StyledTd> (530) 979-4462</StyledTd>
                        </StyledTr>
                        <StyledTr>
                            <StyledTd> Michelle Cheng</StyledTd>
                            <StyledTd> Mom</StyledTd>
                            <StyledTd> (530) 204-8632</StyledTd>
                        </StyledTr>
                    </StyledTable>

                </StyledTable>
            </StyledContent>
        </StyledMain>
    );
}