import React, {useState} from 'react';


export default function TextForm(props) {
  const handleUPClick = ()=>{
    console.log("Uppercase was click");
    let newText = text.toUpperCase();
    settext(newText)
  }

  const handlelowClick = ()=>{
    console.log("lowercase was click");
    let newText = text.toLowerCase();
    settext(newText)
  }

  const handleClearClick = ()=>{
    console.log("text get clear");
    let newText = ('');
    settext(newText)
  }


  const handleOnChange = (event)=>{
    console.log("On Change");
    settext(event.target.value);
  }

  const [text, settext] = useState('');
  //text="new text"; wrong MD
  //settext('new state'); right MD
  return (
    <>
    <div  className='container'>
      <h1>{props.heading}</h1>
      <div className="mb-3">
      <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="12"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUPClick}>Convert to Uppercase </button>
      <button className="btn btn-primary" onClick={handlelowClick}>Convert to lowercase </button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>clear text </button>
    </div>
    <dev className='containner my-7'>
       <h1>Your summary</h1>
       <p>{text.split(" ").filter((word) => word !== "").length} words, {text.length} characters</p>
       <p>{0.008 * text.split(" ").filter((word) => word !== "").length} words</p>
       <h2> Preview </h2>
       <p>{text}</p>


    </dev>
    </>
  );
}