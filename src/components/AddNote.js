import React, {useContext, useState} from 'react'
import noteContext from "../context/notes/noteContext"

const AddNote = (props) => {
    const context = useContext(noteContext);
    const {addNote} = context;

    const [note, setNote] = useState({title: "", description: "", tag: ""})

    const handleClick = (e)=>{
        e.preventDefault();
        addNote(note.title, note.description, note.title);
        setNote({title: "", description: "", tag: ""})
        props.showAlert("ADDED SUCCESSFULLY", "success")
    }
    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }
    let myStyle1 = {
        color: (props.mode==='dark' || props.mode==='primary' || props.mode==='success')?'white':'#000066',
        fontFamily: 'fantasy',
        display: 'flex',
        justifyContent: "center"
    }
    let myStyle2 = {
        color: (props.mode==='dark' || props.mode==='primary' || props.mode==='success')?'white':'black',
        fontFamily: 'cursive'
    }
    return (
        <div className="container my-3">
            <h1 style={myStyle1}>ADD YOUR NOTES</h1>
            <form className="my-3">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label"style={myStyle2}>Give Title to Your Note</label>
                    <input type="text" className="form-control" id="title" style={{backgroundColor: 'rgb(36 74 104)', color:'#fd7e14', fontFamily:'cursive'}} name="title" aria-describedby="emailHelp" value={note.title} onChange={onChange} minLength={5} required /> 
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label"style={myStyle2}>Write Your Note Here</label>
                    <input type="text" className="form-control" style={{backgroundColor: 'rgb(36 74 104)', color:'#fd7e14', fontFamily:'cursive'}} id="description" name="description" value={note.description} onChange={onChange} minLength={5} required />
                </div>
                <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" style={{backgroundColor:'#0000cc'}} onClick={handleClick}>Add Note</button>
            </form>
        </div>
    )
}

export default AddNote
