import React, { useState } from 'react';

function UploadPDF({handleFileChange, selectedFile}) {
    // const [selectedFile, setSelectedFile] = useState(null);

    // const handleFileChange = async (event) => {
    //     const file = event.target.files[0];
    //     if (!file.type.includes('pdf')) {
    //       alert('Please select a PDF file.');
    //       return;
    //     }

    //     const reader = new FileReader();
    //     reader.readAsDataURL(file); // Read the file content as a data URL

    //     reader.onload = async (e) => {
    //         const formData = new FormData();
    //         formData.append("file", file);

    //         // Now you can access the file content from e.target.result (data URL)
    //         console.log(formData.get("file"));

    //         // Send a POST request to the backend upload endpoint using Axios (assuming Axios is installed)
    //         const uploadResponse = await axios.post("http://localhost:8000/upload-pdf", formData, {
    //             headers: {
    //                 "Content-Type": "multipart/form-data",
    //             },
    //         });
    //         console.log(uploadResponse.data);
    //     };

    //     setSelectedFile(file);
    //     // logic to save the file in database and send it to the upload pdf endpoint
        
    //   };

    const handleButtonClick = () => {
        document.getElementById('fileInput').click();
    }
    return (
        <form className='flex flex-row gap-4 items-center'>
            <input id="fileInput" type="file" accept='application/pdf' className='hidden' onChange={handleFileChange} />
            {selectedFile && <p className='text-green-600 font-bold'>{selectedFile.name}</p>}
            <button type="button" onClick={handleButtonClick} className='flex flex-row pt-2 pb-2 pl-10 pr-10 gap-2 items-center border border-black rounded-lg'>
                <img src="/upload_icon.svg" alt="+" />
                <div>Upload PDF</div>
            </button>
        </form>
    );
}

export default UploadPDF;
