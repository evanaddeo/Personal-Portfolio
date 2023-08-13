import "./Resume.css";

function Resume() {
    const downloadPDF = () => {
        // Replace 'file_url' with the actual URL or path of the file you want to download
        const fileUrl = '../resources/EvanMAddeoResume.pdf';
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = 'EvanMAddeoResume.pdf'; // Replace 'filename' with the desired name for the downloaded file
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

      const downloadDocx = () => {
        // Replace 'file_url' with the actual URL or path of the file you want to download
        const fileUrl = '../resources/EvanMAddeoResume.docx';
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = 'EvanMAddeoResume.docx'; // Replace 'filename' with the desired name for the downloaded file
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

    return (
        <div id="resumeContainer">
            <div id="resumeOverlay">
                <div id="downloads">
                    <button className="download" onClick={downloadPDF}>Download PDF</button>
                    <button className="download" onClick={downloadDocx}>Download .DOCX</button>
                </div>
                <img id="resumePic" src="./images/resume88.png" alt="Resume" />
            </div>
            
        </div>
    )
}

export default Resume;