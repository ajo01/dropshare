import React, {useState} from "react";
import UploadContainer from "./components/UploadContainer/UploadContainer";
import BackgroundImg from "./img/background.svg";
import ToastAlert from './components/Toast/ToastAlert'

function App() {
    const [showToast, setShowToast] = useState(false)

    // if user clicks, get rid of toast alert
    const handleClick = () => {
        const isToastOn = showToast
        if (isToastOn) setShowToast(false)
    }

  return (
    <div className="entire-page" onClick={handleClick}>
        <div className="main">
      <div className="center">
        <UploadContainer className="upload-box" setShowToast={setShowToast}/>
      </div>
      <img className="background-image" src={BackgroundImg} alt="background"></img>
      <div className="toast-div">
      {showToast && <ToastAlert/>}
      </div>
    </div>
    </div>
  );
}

export default App;
