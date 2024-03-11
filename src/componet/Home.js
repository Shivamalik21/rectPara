import React, { useState } from 'react'

const Home = (data) => {
   const arr=data.prop;
   const[GenerateData,setGenerate]=useState([]);
  
   
   function myFunction(){
    let inpt=document.getElementById("inputText").value;
    if(inpt<="0" ||inpt>8){
        alert("fill the value between 1 to 8")
    }else{
     setGenerate();
     
     
    }
       setGenerate( arr.slice(0,inpt).map((elem,index)=>{
       return(
        <div key={index} style={{textAlign:"center",  margin:"5% 20% 10% 20%"}} ><h1 style={{color:"red",}}>Para: {index+1}</h1>{elem}</div>
       )

      }))
   
   }
   
  return (
    <div style={{ display:"flex", flexDirection:"column", alignItems:"center"}}>
        <h1 style={{color:"orange"}}>GENERATE PARAGRAPH </h1>
        <div style={{display:"flex", gap:"1vw", alignItems:"center"}}>
            <p style={{fontSize:"25px"}}>Paragraph:</p>
            <input style={{width:"5vw", height:"4vh"}} id="inputText"/>
            <button id='btn' style={{width:"8vw", height:"6vh", borderRadius:"50px"}} onClick={myFunction}>Generate</button>
        </div>
        <div >
{GenerateData}
        </div>
    </div>
  )
}

export default Home