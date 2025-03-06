import styled from "styled-components";

const StyledMain = styled.main`
    flex: 1;
    margin: auto;
    background-color: whitesmoke;
    height: 100%;
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

const StyledLi = styled.li`
    color: black;
    text-align: left;
    font-size: 12px;
`

const StyledUl = styled.ul`
    color: black;
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
            <br/>
            <StyledUl>
                <StyledLi>Generated summary statistics of sample used in manager decision analysis to evaluate quality of data
                    used
                </StyledLi>
                <StyledLi>Developed a table using STATA that reports how mutual fund managers’ decisions are related to
                    uncertainty in 4 varying panel regressions
                </StyledLi>
                <StyledLi>Dissected inconsistencies in the results through further code analysis, ensuring accurate and
                    forward development
                </StyledLi>
            </StyledUl>

            <StyledP><u>Boston University Residence Life:</u><em> Resident Assistant, </em><br/><em>August 2022 - January
                2024</em></StyledP>
            <StyledUl>
                <StyledLi>Handled on-demand requests for 2000+ residents by providing resourceful information and equipment
                    for safety
                </StyledLi>
                <StyledLi>Served as the first responder to emergencies within South Campus, ensuring well-being of community
                    members
                </StyledLi>
                <StyledLi>Submitted weekly statements to report neighborhood activity and resident interactions</StyledLi>
            </StyledUl>
            <StyledP><u>Questrom School of Business:</u><em> Market Research Assistant, </em><br/><em>August 2022 - January
                2024</em></StyledP>
            <StyledUl>
                <StyledLi>Researched and analyzed top 25 U.S. newspaper publications, identifying paywall implementation
                    trends from 2011-
                    2015 to support a project examining content strategy
                </StyledLi>
                <StyledLi>Recommended the optimal data source based on its reputation, extensive features, and data
                    normalization techniques,
                    providing a comprehensive analysis to guide project decision-making
                </StyledLi>
                <StyledLi>Evaluated 3 data collection resources, assessing their capabilities, pros, and cons for historical
                    newspaper data
                    retrieval
                </StyledLi>
            </StyledUl>
            <StyledP><u>Center for Information and Systems Engineering:</u><em> Communications Assistant, </em><br/><em>April
                2023 - August 2023</em></StyledP>
            <StyledUl>
                <StyledLi>Maintained and managed company website to communicate department activity and upkeep commercial
                    presence
                </StyledLi>
                <StyledLi>Streamlined department activity information into monthly reports</StyledLi>
                <StyledLi>Hosted weekly seminars to provide educational opportunities for the BU College of Engineering
                    graduate students
                </StyledLi>
            </StyledUl>
            <StyledP><u>Charcoal Magazine:</u><em> Administrative Assistant, </em><br/><em>September 2022 - December 2022</em></StyledP>
            <StyledUl>
                <StyledLi>Developed a task delegation system for the administrative assistant team to increase operational
                    efficiency
                </StyledLi>
                <StyledLi>Integrated multiple stakeholders into a significant five-month event itinerary for “Fragmentos”, an
                    event that celebrates local artists
                </StyledLi>
                <StyledLi>Attracted specific demographics by driving changes in the recruitment process</StyledLi>
            </StyledUl>
            </StyledWrapper>
        </StyledMain>
    );
}