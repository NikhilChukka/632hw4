import React, { useState } from "react";

function FilePreview() {
  const [fileData, setFileData] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file)
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFileData(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const renderFilePreview = () => {
    if (!fileData) return null;

    // Check if the file is an image
    if (fileData.startsWith("data:image")) {
      return <img src={fileData} alt="File Preview" />;
    }

    // Check if the file is a PDF
    if (fileData.endsWith(".pdf")) {
      return (
        <iframe
          title="PDF Preview"
          src={fileData}
          width="100%"
          height="500px"
        />
      );
    }

    // Default case: render text content
    return <pre>{fileData}</pre>;
  };

  return (
    <div>
      <h2>File Preview</h2>
      <input type="file" onChange={handleFileChange} />
      {renderFilePreview()}
    </div>
  );
}

export default FilePreview;
