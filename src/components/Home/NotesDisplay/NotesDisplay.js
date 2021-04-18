import React from 'react';

const NotesDisplay = () => {
    const notes = [
        {
            img: "https://i.pinimg.com/originals/e5/38/33/e53833003809e91431c643348db5cfb8.jpg",
            title: "Math Equations",
        },
        {
            img: "https://i.pinimg.com/originals/62/49/4e/62494e3650d23d8bdb231507968e8c13.jpg",
            title: "Physics Vector",
        },
        {
            img: "https://i.pinimg.com/originals/e5/38/33/e53833003809e91431c643348db5cfb8.jpg",
            title: "Calculus Hand note",
        },
    ];
    return (
        <div>
            <h2 className="text-brand text-center m-3">Some of our quality notes for free!</h2>
            <div className="row">
                {
                notes.map(note => {
                    return (
                        <div className="col-md-3 m-auto mt-3 shadow-sm d-flex flex-column align-items-center">
                            <img src={note.img} alt="" className="img-fluid" style={{maxWidth: "200px", borderRadius: "10px"}} />
                            <h4>{note.title}</h4>
                        </div>
                    )
                })
            }
            </div>
        </div>
    );
};

export default NotesDisplay;