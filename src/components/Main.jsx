import React from 'react'
import  '../styles/Main.css'
import Upload from './Upload.jsx'

const Main = () => {
    return (
        <div className='main'>
            <h2 className="title__body">Welcome!</h2>

            <div className="file__upload">
                <Upload />
            </div>
        </div>

    )
};
export default Main;