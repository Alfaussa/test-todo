import React, {useState} from "react"
import storage from "../../firebaseConfig"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import styles from "./FileUploader.module.css"

function FileUpload() {
const [file, setFile] = useState("");
const [percent, setPercent] = useState(0);
function handleChange(event) {
setFile(event.target.files[0]);
}

const handleUpload = () => {
    if (!file) {
    alert("Please upload an image first!");
    }
    
    const storageRef = ref(storage, `/files/${file.name}`);
    
    // progress can be paused and resumed. It also exposes progress updates.
    // Receives the storage reference and the file to upload.
    const uploadTask = uploadBytesResumable(storageRef, file);
    
    uploadTask.on(
    "state_changed",
    (snapshot) => {
    const percent = Math.round(
    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    );
    
    // update progress
    setPercent(percent);
    },
    (err) => console.log(err),
    () => {
    // download url
    getDownloadURL(uploadTask.snapshot.ref).then((url) => {
    console.log(url);
    });
    }
    );
    };
    
    return (
 
    <><input type="file" onChange={handleChange} accept="/image/*"></input>
   <div> <button onClick={handleUpload}>Upload file</button></div>
    <p style={{marginLeft:'10px'}}>{percent} "% uploaded"</p></>
  
    );
    }

export default FileUpload;