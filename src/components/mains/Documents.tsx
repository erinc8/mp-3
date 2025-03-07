import styled from "styled-components";
import {useState} from 'react';
import CatMath from "/cat-math.png";


const StyledCalculator = styled.div`
    justify-content: center;
    overflow-x: hidden;
`


const StyledResultBox = styled.div<{ value: number }>`
    background-color: darkslategrey;
    border-radius: 10px;
    padding: 10px;
    font-size: 18px;
    text-align: center;
    width: 18%;
    height: 30%;
    margin: auto;
    color: ${props => props.value < 0 ? 'red' : 'white'};
`


const StyledMain = styled.main`
    flex: 1;
    margin: auto;
    background-color: whitesmoke;
    padding: 5%;
    height: 100vh;
    overflow-x: hidden;
    
    @media (max-width: 750px) {
        
        width: 90vw;
    }
`

const StyledImg = styled.img`
    max-width: 100%; 
    width: 40%; 
    height: auto; 
    margin: auto; 
    display: block; 
    padding: 15px;

`
const StyledButton = styled.button`
    background-color: darkslategrey;
    color: white;
    border-radius: 10px;
`

const StyledButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    margin: 10px 0;
`

const StyledInput = styled.input`
    background-color: darkslategrey;
    border-radius: 10px;
    width: 100px;
    text-align: center;
    padding: 10px;
    margin: 5px 0;
    color: white;
    display: flex;
    justify-content: center;
`

const StyledInputGroup = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 5px;
    margin: 10px 0;
`
const StyledH2 = styled.h2`
    color: Black;
    text-align: center;
`


const StyledResult = styled.div<{ value: number }>`
    background-color: darkslategrey;
    color: ${props => props.value < 0 ? 'red' : 'white'};
`


export default function Calculator() {
    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);
    const [result, setResult] = useState(0);

    const calculate = (operation: string) => {
        switch (operation) {
            case '+':
                setResult(firstNumber + secondNumber);
                break;
            case '-':
                setResult(firstNumber - secondNumber);
                break;
            case '*':
                setResult(firstNumber * secondNumber);
                break;
            case '/':
                setResult(firstNumber / secondNumber);
                break;
            case '**':
                setResult(firstNumber ** secondNumber);
                break;
            default:
                setResult(0);
        }
    };

    const clearAll = () => {
        setFirstNumber(0);
        setSecondNumber(0);
        setResult(0);
    };

    return (
        <StyledMain>
            <StyledH2>Cat Calculations /ᐠ-ꞈ-ᐟ\</StyledH2>
            <br/><br/>
            <StyledCalculator>
                <StyledInputGroup>
                    <StyledInput
                        type="number"
                        id="first"
                        value={firstNumber}
                        onChange={e => setFirstNumber(Number(e.target.value))}
                    />
                    <br/><br/>
                    <StyledInput
                        type="number"
                        id="second"
                        value={secondNumber}
                        onChange={e => setSecondNumber(Number(e.target.value))}
                    />
                </StyledInputGroup>
                <br/><br/>
                <StyledButtonGroup>
                    <StyledButton id="add" onClick={() => calculate('+')}>+</StyledButton>
                    <StyledButton id="sub" onClick={() => calculate('-')}>-</StyledButton>
                    <StyledButton id="mul" onClick={() => calculate('*')}>*</StyledButton>
                    <StyledButton id="div" onClick={() => calculate('/')}>/</StyledButton>
                    <StyledButton id="power" onClick={() => calculate('**')}>**</StyledButton>
                    <StyledButton onClick={clearAll}>Clear</StyledButton>
                </StyledButtonGroup>
                <br/><br/>
                <StyledResultBox value={result}>
                    <StyledResult value={result}>{result}</StyledResult>
                </StyledResultBox>

                <StyledImg src={CatMath} alt="cat" className="cat"/>
            </StyledCalculator>
        </StyledMain>
    );
}
