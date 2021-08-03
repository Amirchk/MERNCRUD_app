import React,{useState} from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import TableContent from './TableContent';

// import TableContent from './TableContent';
import mockData from "./mockData.json"

//-----Cross button to close the dialogue box--------
const disappear=()=>{
    const show = document.getElementById("show");
    show.style.display = 'none';
}

//----------Prompt Box open when click on the [AddUser] button to fill the Form
function PromptBox() {
    //this is state for storing User schema or object value
    const [FormValue, setFormValue] = useState({
        Uname:'',
        Age:'',
        Email:'',
        password:''
    });

    //this is for printing data on screen of frontend
    const [Userdata,setUserdata] = useState(mockData);

    const handleInput=(e)=>{
        const {name,value} = e.target;

        setFormValue(
            (prevVal)=>{
                return {...prevVal,[name]:value  }
            }
        )
    }
    const Onsubmitform=(e)=>{
        e.preventDefault();
        
        const userdata_insidefunction = {
            id:nanoid,
            name:FormValue.Uname,
            age:FormValue.Age,
            email:FormValue.Email,
            password:FormValue.password
            };

       const contacts = [...Userdata,userdata_insidefunction];
       setUserdata(contacts);
    };
    
  return (
      <>
    <div id="show" className="promptBox">
        <button id="close" onClick={disappear}>X</button>
        <div id="inner_box">
            <form onSubmit={Onsubmitform}>
                <label>USERNAME</label>
                <input type="text"
                    name="Uname"
                    value={FormValue.Uname}
                    onChange={handleInput}
                 /><br/>
                <label>Age</label>
                <input type="text"
                    name="Age"
                    value={FormValue.Age}
                    onChange={handleInput}
                 /><br/>
                <label>Email</label>
                <input type="email"
                    name="Email"
                    value={FormValue.Email}
                    onChange={handleInput} 
                    /><br/>
                <label>PASSWORD</label>
                <input type="password"
                    name="password"
                    value={FormValue.password}
                    onChange={handleInput} 
                /><br/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    </div>
    <TableContent data={Userdata} />
    </>
  );

}

export default PromptBox;