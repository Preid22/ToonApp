
import "./NewYorker.css" from NewYorker;
import { useEffect, useState } from "react";

function Yorker2() {
    const [img, setImage] = useState(' ');
    const [caption, setCaption] = useState(' ');

    useEffect(()=>{
        fetch("http://www.newyorker.com/cartoons/random/randomAPI").then((data)=>{
            if(data.status === 200){
                return data.json().then((data)=>{
                    console.log(data);
                    setImage(data[0].src);
                });
            };
        });
    }, []);

    return (
        <div className="new-yorker">
            <div className="cartoon">
                <div>{img && <img className="image" src={img} />}</div>
                <div className="caption">{caption}</div>
            </div>
            <button type="button" onClick={handleDownload}>
            <input type="text" value={caption} onChange={handleSubmit}></input>
            Download
            </button>
        </div>
    )
}
