import React from "react";
import './Calculator.models.css'
import Container from '@mui/material/Container'
import {Box} from '@mui/system'
import { useState } from "react";

export default function Calculator(){
    const[num,setNum] = useState(0);
    const[oldnum,setOldNum] = useState(0);
    const[operator,setOperator] = useState();

    function inputNum(valor){
        var e = valor.target.value
        if (num === 0){
            setNum(e)
        }else{
            setNum(num + e);
        }
        
    }

    function clear(){
        setNum(0)
    }

    function porcetagem(){
        setNum(num/100)
    }

    function operatorHandler(){
        if(num>0){
            setNum(-num)
        }
        else{
            setNum(num * (0-1))
        }
    }

    function choiceOperator(e){
        var operador = e.target.value;
        setOperator(operador);
        setOldNum(num);
        setNum(0);
    }

    function calculate(){
        if(operator === "/"){
            setNum(parseFloat(oldnum) / parseFloat(num))
        }else if(operator === "X"){
            setNum(parseFloat(oldnum) * parseFloat(num))
        }else if(operator === "-"){
            setNum(parseFloat(oldnum) - parseFloat(num))
        }else if(operator === "+"){
            setNum(parseFloat(oldnum) + parseFloat(num))
        }
    }

    return(
        <div>
            <Box m={12}/>
            <Container maxWidth = "xs">
                <div className="wrapper">
                        <h1 className="result">{num}</h1>
                    <button className="low_gray" onClick={clear}>AC</button>
                    <button className="low_gray" onClick={operatorHandler}>+/-</button>
                    <button className="low_gray" onClick={porcetagem}>%</button>
                    <button className="orange" onClick={choiceOperator} value = "/">/</button>
                    <button className="high_gray" onClick={inputNum} value = {7}>7</button>
                    <button className="high_gray" onClick={inputNum} value = {8}>8</button>
                    <button className="high_gray" onClick={inputNum} value = {9}>9</button>
                    <button className="orange" onClick={choiceOperator} value = "X">X</button>
                    <button className="high_gray" onClick={inputNum} value = {4}>4</button>
                    <button className="high_gray" onClick={inputNum} value = {5}>5</button>
                    <button className="high_gray" onClick={inputNum} value = {6}>6</button>
                    <button className="orange" onClick={choiceOperator} value = "-">-</button>
                    <button className="high_gray" onClick={inputNum} value = {1}>1</button>
                    <button className="high_gray" onClick={inputNum} value = {2}>2</button>
                    <button className="high_gray" onClick={inputNum} value = {3}>3</button>
                    <button className="orange" onClick={choiceOperator} value = "+">+</button>
                    <button className="high_gray" onClick={inputNum} value = {0}>0</button>
                    <button className="high_gray" onClick={inputNum} value = ".">,</button>
                    <button className="orange" onClick={calculate}>=</button>
                </div>
            </Container>
        </div>
    )
}