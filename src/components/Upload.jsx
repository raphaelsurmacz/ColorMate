import React, { useState } from 'react'
import '../styles/Upload.css'

function Upload() {

    const [image, setImage] = useState(null);
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageURL = URL.createObjectURL(file);
            setImage(imageURL);
        }
    };

    return (
        <div className="upload-container">
            <label className="upload-box">
                <input type="file" accept='image/*' onChange={handleImageChange} />
                <span className="upload-text"> Send </span>
            </label>

            {image && (
                <div className="preview">
                    <img src={image} alt="Preview" className="preview-image" />
                </div>
            )}
        </div>
    );
};

export default Upload