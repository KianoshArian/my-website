import React, { useEffect } from 'react';
import SFVs from "../../assets/SFVs.pdf"

const Paper = () => {

  const downloadFile = () => {
    const link = document.getElementById('SFVs');
    link.click();
  };
  
  useEffect(() => {
    downloadFile();
  }, []);

  return (
    <div>
      <a id="SFVs" href={SFVs}>Download PDF</a>.
    </div>
  );
};

export default Paper;