import React, {useEffect} from 'react';
import useStorage from '../../hooks/useStorage'

const ProgressBar = ({file, setFile}) => {
    const {url, progress} = useStorage(file)
    console.log(url, progress)
    // useEffect(() => {
    //     if (url) {
    //         setFile(null)
    //     }
    // }, [url, setFile]) 

    return (
        <div className="progress_bar" 
        >Progress</div>
    )
    // initial={{width:0}} animate={{width:progress + '%'}}
}

export default ProgressBar