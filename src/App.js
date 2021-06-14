import React from "react";
import UploadContainer from "./components/UploadContainer/UploadContainer";
import BackgroundImg from "./img/background.svg";

function App() {
  return (
    <div>
      <div className="center">
        <UploadContainer className="upload-box" />
      </div>
      <img className="background-image" src={BackgroundImg} alt="background image"></img>
    </div>
  );
}

export default App;
