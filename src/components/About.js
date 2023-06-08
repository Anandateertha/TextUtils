import React, { useState } from 'react'

export default function About(props) {

    // const [myStyle, setmyStyle] = useState(
    //     {
    //         color: 'white',
    //         backgroundColor: 'black',
    //         border: '2px solid black',
    //         borderRadius: '20px'
    //     }
    // )

    let myStyle={
        color:props.mode==='dark'?'white':'black',
        backgroundColor:props.mode==='dark'?'black':'white',
        // border:'1px solid',
        // borderColor:props.mode==='dark'?'black':'white',
        // borderRadius:'10px',
        // padding:'8px'

    }

    

    const [btnText, setBtnText] = useState("Enable Light Mode")



    // const toggleStyle = () => {
    //     if (myStyle.color === 'white') {
    //         setmyStyle({
    //             color: 'black',
    //             backgroundColor: 'white',
    //             border: '2px solid white',
    //             borderRadius: '20px'
    //         })

    //         setBtnText('Enable Dark Mode')
    //     }
    //     else {
    //         setmyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '2px solid black',
    //             borderRadius: '20px'
    //         })
    //         setBtnText('Enable Light Mode')
    //     }
    // }

    return (
        <div className='container my-3' style={myStyle}>
            <h1 className='my-3'>About us</h1>
            <div className="accordion" id="accordionExample" style={myStyle}>
                <div className="accordion-item">
                    <h2 className="accordion-header" style={myStyle} id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
                        <strong>Analyze Your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" style={myStyle} className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingTwo" style={myStyle}>
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                        <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" style={myStyle} className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        <strong>TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ characterlimit.</strong>
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingThree" style={myStyle}>
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                        <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" style={myStyle} className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
