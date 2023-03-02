import "./NewYorker.css";
import { useEffect, useState } from "react";

function NewYorker() {
  // set state vals
    const [img, setImage] = useState('');
    const [caption, setCaption] = useState('');

    // useEffect will run on each render, sync with the toon API, updating setImage is the Effect
  useEffect(() => {
    fetch("http://www.newyorker.com/cartoons/random/randomAPI").then((data) => {  //using data vs response??
      if (data.status === 200) {
        return data.json().then((data) => {
          console.log(data);
          setImage(data[0].src)
        });
      }
    });
  }, []);

const handleSubmit = (event) => {
  setCaption(event.target.value)
};

const handleDownload = () => {
  console.log("tests")
}

  return (
  <div className="new-yorker">
    <div className="cartoon">
      <div> {img && <img className="picture" src={img} />}</div>
      <div className="caption">{caption}</div>
    </div>
    <button type="button" onClick={handleDownload}>
    <input type="text" value={caption} onChange={handleSubmit} />
      Download
    </button>
  </div>
  )
}

export default NewYorker;

/*

useEffect(() => {
    fetch("http:www.url.com")
}, [])

*/
