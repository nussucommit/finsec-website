import React, { useState } from 'react';
import './App.css';
import ConfirmationModal from './modalskeleton/ConfirmationModal';
import FileUploadModal from './modalskeleton/FileUploadModal';
import FormModal from './modalskeleton/FormModal';

function App() {
  const [text, setText] = useState("");
  return (
    <div className="App">
      {<ConfirmationModal title={"hi"} body={""} button={"try"} reminder={""} hasText={true} setText={setText}/>}
      {<FormModal titleInput={[["email", setText], ["password", setText]]} button={"submit"}/>}
      {<FileUploadModal 
        title={"Upload your new RFP here"} 
        button={"Submit"} 
        body={"Please submit a SINGLE .pdf file with the RFP form as the first page followed by all relevant information at the back"}
        note={"File number limit: 1    Single file size limit: 100MB   Allowed file types: PDF"}
        hasText={true}
        textTitle={"Reason:"}
        textBody={"Wrong GL code"}
        />}
      {text}
    </div>
  );
}

export default App;
