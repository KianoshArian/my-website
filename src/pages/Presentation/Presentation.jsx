import React, { useEffect } from 'react';
import Slides from "../../assets/AI Assistants for Programming.pptx"

const Presentation = () => {

  const downloadFile = () => {
    const link = document.getElementById('Slides');
    link.click();
  };
  
  useEffect(() => {
    downloadFile();
  }, []);

  return (
    <div>
      <a id="Slides" 
        href={Slides}
        download="AI Assistasnts for Programming.pptx"
      >
          Download Slides
      </a>.
    </div>
  );
};

export default Presentation;