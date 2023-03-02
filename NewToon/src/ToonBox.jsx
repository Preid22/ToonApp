import "./ToonBox.css";
import { useState, useEffect } from "react";

function ToonBox() {
  const [img, setImage] = useState(" ");
  const [cap, setCap] = useState(" ");

  const handleCap = (event) => {
    setCap(event.target.value);
  };

  useEffect(() => {
    fetch("https://www.newyorker.com/cartoons/random/randomAPI").then(
      (data) => {
        if (data.status === 200) {
          return data.json().then((data) => {
            setImage(data[0].src);
          });
        }
      }
    );
  }, []);

  return (
    <div className="toon">
      <label className="caption-field">
        <input type="text" onChange={handleCap} />
        <span className="placeholder">Caption:</span>
      </label>
      <div>{img && <img src={img} />}</div>
      <div className="caption">{cap}</div>
    </div>
  );
}

export default ToonBox;

// <input className="input" type="text" onChange={handleCap} />    //replace this input with a <span></spacn>
