import React, {useContext} from 'react'
import noteContext from "../context/notes/noteContext"


const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;
    
    return (
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body" style={{backgroundColor: 'rgb(36 74 104)'}}>
                    <div className="d-flex align-items-center" style={{justifyContent:'space-between'}}>
                        <h5 className="card-title"style={{color:'#e60000'}} >{note.title}</h5>
                        <div style={{display:'flex', justifyContent:'end'}}>
                            <i className="far fa-trash-alt mx-2" style={{color:'yellowgreen'}} onClick={()=>{deleteNote(note._id);props.showAlert("DELETED SUCCESSFULLY", "success")}}></i>
                            <i className="far fa-edit mx-2" style={{color:'yellow'}} onClick={()=>{updateNote(note)}}></i>
                        </div>
                    </div>
                    <p className="card-text" style={{color:'#fd7e14', fontFamily:'cursive'}}>{note.description}</p>

                </div>
            </div>
        </div>
    )
}

export default Noteitem
