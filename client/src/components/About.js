import React from 'react'

export default function About(props) {
    return (
        <div className="container">
            <h1 className="my-3" style={{fontFamily: 'fantasy',color: (props.mode==='dark' || props.mode==='primary' || props.mode==='success')?'white':'#000066'}}>About Us</h1>
        </div>
    )
}