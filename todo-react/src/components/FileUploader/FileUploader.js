/** @module */
import React, {useState} from "react"
import storage from "../../firebaseConfig"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


/** Создаем компоненту FileUpload
 *
 */
function FileUpload() {
const [file, setFile] = useState("");
const [percent, setPercent] = useState(0);
function handleChange(event) {
setFile(event.target.files[0]);
}
/** не позволяет загрузить пустой
 *
 */
const handleUpload = () => {
    if (!file) {
    alert("Пожалуйста, добавьте файл!");
    }
    
    const storageRef = ref(storage, `/files/${file.name}`);

    const uploadTask = uploadBytesResumable(storageRef, file);
    /** прогресс загрузки файла
 *
 */
    uploadTask.on(
    "state_changed",
    (snapshot) => {
    const percent = Math.round(
    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    );
    
  
    setPercent(percent);
    },
    (err) => console.log(err),
    () => {
       /** ссылка на файл для скачивания
 *
 */
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