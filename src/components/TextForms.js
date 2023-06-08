import React, { useState } from 'react'


export default function TextForms(props) {

    const handleUpClick = () => {

        let newText = text.toUpperCase();
        // let uppercase=document.getElementById('uppercase');
        setText(newText);
        if (newText === "") {
            props.showAlert("TextArea is Empty! Cannot perform Operations!", "warning");
        }
        else {
            props.showAlert("Converted to UpperCase", "success");
        }

        // uppercase.innerHTML='Successfully Converted to Uppercase'

        // setInterval(() => {
            
        //     if (uppercase) {
        //         if (uppercase.style.color === "red") {
        //             uppercase.style.color = "blue";
        //         } else {
        //             uppercase.style.color = "red";
        //         }
        //     }
        // }, 100);
    }

    const handleDownClick = () => {

        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success");
    }

    const handleClearText = () => {

        let newText = "";
        setText(newText);
        props.showAlert("cleared the Text", "Success");
    }

    const capitalize = () => {

        let newText = text.charAt(0).toUpperCase() + text.slice(1);
        setText(newText);
        props.showAlert("Capitalized", "success");
    }

    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value)
        // console.log(text); text also gets updated
    }

    const alternatingCase = () => {
        let newText = "";
        for (let i = 0; i < text.length; i++) {
            if (i % 2 === 0) {
                newText = newText + text[i].toUpperCase();
            }
            else {
                newText = newText + text[i].toLowerCase();
            }

        }
        setText(newText);
        props.showAlert("Converted to Alternating Case", "success");
    }

   

    const title = () => {
        let newtext = text[0].toUpperCase();

        for (let j = 1; j < text.length; j++) {
            if (text[j] === " ") {
                newtext = newtext + " ";
                newtext = newtext + text[j + 1].toUpperCase();
                j++;
            }
            else {
                newtext = newtext + text[j];
            }

        }
        setText(newtext);
        props.showAlert("Titling Done", "success");
    }

    const sorting = () => {
        let words = text.split(' ');
        console.log(words);
        let sortedWords = words.sort();
        let sortedParagraph = sortedWords.join(' ');
        setText(sortedParagraph);
        props.showAlert("Sorting Done", "success");
    }

    const extraSpaces=()=>{
        let word = text.split(' ');
        let newWord = []
        for (let i = 0; i < word.length; i++) {
            if (word[i] !== '') {
                newWord.push(word[i]);
            }
        }
        setText(newWord.join(' '));
        props.showAlert("Removed the Extra Spaces", "success");
    }

    const copyText=()=>{
        let text=document.getElementById('box');
        text.setSelectionRange(0, text.length);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard","success");
    }

    const wordCounter = (word) => {
        let newWord = []
        for (let i = 0; i < word.length; i++) {
            if (word[i] !== '') {
                newWord.push(word[i]);
            }
        }
        console.log(newWord)
        return newWord.length
    }

   




    const [text, setText] = useState("");
    // setText("Ananda");
    wordCounter(text.split(" "));

    return (
        <>
            <div className="container">
                <div className='container'>
                    <h1 style={{ color: props.mode === 'light' ? 'black' : 'white' }}>{props.heading}</h1>
                    <h3 style={{ color: props.mode === 'light' ? 'black' : 'white' }}   id='uppercase'></h3>
                    <div className="mb-3 my-4">
                        <textarea  className="form-control" id="box" rows="8" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : '#897e7e75', color: props.mode === 'light' ? 'black' : 'white' }}></textarea>
                    </div>
                    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleDownClick}>Convert to Lowercase</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={capitalize}>Capitlaize</button>
                    <button disabled={text.length===0} className="btn btn-danger mx-2 my-1" onClick={handleClearText}>Clear Text</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={alternatingCase}>Alternating Text</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={title}>Title Case</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={sorting}>Sort</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={extraSpaces}>Remove Extra Spaces</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={copyText}>CopyText</button>
                </div>
                <div className="container my-4">
                    <h3 style={{ color: props.mode === 'light' ? 'black' : 'white' }}>Your Text Summary</h3>
                    <p style={{ color: props.mode === 'light' ? 'black' : 'white' }}>{wordCounter(text.split(" "))} Words and {text.length} characters</p>
                    <p style={{ color: props.mode === 'light' ? 'black' : 'white' }}>{0.008 * wordCounter(text.split(" "))} Minutes Read</p>
                    <h3 style={{ color: props.mode === 'light' ? 'black' : 'white' }}>Preview of the Text</h3>
                    <p style={{ color: props.mode === 'light' ? 'black' : 'white' }}>{text.length===0?'Nothing to Preview':text}</p>
                </div>
            </div>
        </>
    )
}
