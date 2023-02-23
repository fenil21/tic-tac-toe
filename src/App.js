import {useState} from 'react';
import './App.css';

function App() {
  var [value,setvalue]=useState(["","","","","","","","",""])
  var [main,setmain]=useState(true)
  var [text,settext]=useState("")
  
     
   var buttonclickhandler = (i) =>{  
    let copyValue;
    if(main)
    {
      copyValue = [...value];
      copyValue[i]="X";
      setvalue(copyValue);
      setmain(false);
    }
    else
    {
      copyValue = [...value];
      copyValue[i]="0";
      setvalue(copyValue);
      setmain(true);
    }
    if (copyValue[0]=="0" && copyValue[1]=="0" && copyValue[2]=="0")
    {
      settext("0 win");
    }
    else if (copyValue[3]=="0" && copyValue[4]=="0" && copyValue[5]=="0")
    {
      settext("0 win");
    }
    else if (copyValue[6]=="0" && copyValue[7]=="0" && copyValue[8]=="0")
    {
      settext("0 win");
    }
    else if (copyValue[0]=="0" && copyValue[3]=="0" && copyValue[6]=="0")
    {
      settext("0 win");
    }
    else if (copyValue[1]=="0" && copyValue[4]=="0" && copyValue[7]=="0")
    {  
      settext("0 win");
    }
    else if (copyValue[2]=="0" && copyValue[5]=="0" && copyValue[8]=="0")
    { 
      settext("0 win");
    } 
    else if (copyValue[0]=="0" && copyValue[4]=="0" && copyValue[8]=="0")
    { 
      settext("0 win");
    }  
    else if (copyValue[2]=="0" && copyValue[4]=="0" && copyValue[6]=="0")
    {
      settext("0 win");
    }
    if (copyValue[0]=="X" && copyValue[1]=="X" && copyValue[2]=="X")        
    {
      settext("X win");
    }
    else if (copyValue[3]=="X" && copyValue[4]=="X" && copyValue[5]=="X")
    {
      settext("X win");
    }
    else if (copyValue[6]=="X" && copyValue[7]=="X" && copyValue[8]=="X")
    {
      settext("X win");
    }
    else if (copyValue[0]=="X" && copyValue[3]=="X" && copyValue[6]=="X")
    {
      settext("X win");
    }
    else if (copyValue[2]=="X" && copyValue[5]=="X" && copyValue[8]=="X")
    {
      settext("X win");
    }
    else if (copyValue[1]=="X" && copyValue[4]=="X" && copyValue[7]=="X")
    {
      settext("X win");
    }
    else if (copyValue[2]=="X" && copyValue[5]=="X" && copyValue[8]=="X")
    {
      settext("X win");
    }
    else if (copyValue[0]=="X" && copyValue[4]=="X" && copyValue[8]=="X")
    {
      settext("X win");
    }
    else if (copyValue[2]=="X" && copyValue[4]=="X" && copyValue[6]=="X")
    {
      settext("X win");
    }
    else if(copyValue[0]!=="" && copyValue[1]!=="" && copyValue[2]!=="" && copyValue[3]!=="" && copyValue[4]!=="" && copyValue[5]!=="" && 
    copyValue[6]!=="" && copyValue[7]!=="" && copyValue[8]!=="")
    {
      settext("draw");
    }
        
  }
    var newhandler =()=>{
        setvalue(["","","","","","","","",""])
        settext("")
    }
  return (
    <div className="App">
      <h2>Tic Tac Toe</h2>
      {
        value.map((el , i) => {
            return <button disabled={el || text ? true : false} className='btn w-30' onClick={()=> buttonclickhandler(i)}>{el}
            </button>    
          })
      } 
        <h2>{text}</h2>
        <button className='main' onClick={()=>newhandler()}restart>restart</button>
    </div>  
  );

}

export default App;