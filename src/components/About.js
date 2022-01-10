import React from 'react'

export default function About(props) {
    let myStyle = {
        color: (props.mode==='dark' || props.mode==='primary' || props.mode==='success')?'white':'#d63384',
        backgroundColor: (props.mode==='dark' || props.mode==='primary' || props.mode==='success')?'rgb(36 74 104)':'#0dcaf0',
        fontFamily: 'cursive'
    }
    return (
        <div className="container">
            <h1 className="my-3" style={{fontFamily: 'fantasy',color: (props.mode==='dark' || props.mode==='primary' || props.mode==='success')?'white':'#000066'}}>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Save Your Notes Here Safely</strong>
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    In E-Diary save your notes safely. And very efficiently create/write your notes.

                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free to Use</strong>
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    E-Diary is a free site where you can save your notes very safely. We keep your notes and credentials very confidential in our Database
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser Compatible </strong>
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    This E-Diary software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera.

                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}