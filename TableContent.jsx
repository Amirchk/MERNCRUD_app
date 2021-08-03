import React,{Fragment,useState} from 'react';
import './App.css';
import ReadOnlyRow from './ReadOnlyRow.jsx';
import EditUser from './EditUser1';
import mockData from './mockData.json';
//---------Button Add on the top to add user data in tables
const appear=()=>{
  const show = document.getElementById("show");
  show.style.display = 'block';
}


//-------------Table heading 
function TableContent(props) {

  const [contactData,setcontactData]=useState(props.data);
  const [EditContactId,setEditContactId]=useState();
  const [formdata,setformdata] = useState({
    name:'',
    age:'',
    email:'',
    password:''
  });

  const HandleEditformChange=(e,data)=>{
    const {name,value} = e.target;
    const newFormdata = {...formdata,[name]:value};
    
    setformdata(newFormdata);
  }

  const onSubmitForm = (e)=>{
    e.preventDefault();
    const editedForm={
      id:EditContactId,
      name:formdata.name,
      age:formdata.age,
      email:formdata.email,
      password:formdata.password
    }
//----here we have to fetch data of specified ID and replace it
    
    for(var i =0;i<=contactData.length;i++){
      if(contactData[i].id===EditContactId){
        contactData[i].name=editedForm.name;
        contactData[i].age=editedForm.age;
        contactData[i].email=editedForm.email;
        contactData[i].password=editedForm.password;
      }
      break;
    }
    
    setEditContactId(null);
  }

 
  const HandleEditClick=(e,contactData)=>{
    e.preventDefault();
    setEditContactId(contactData.id);

    const FormValue={
      name:contactData.name,
      age:contactData.age,
      email:contactData.email,
      password:contactData.password
    }
    setformdata(FormValue);
  }

  const HandleDeleteRow=(ID)=>{
    console.log(ID,contactData);
    const newdata = [...contactData];
    const presentdata = [...contactData];
    const index = presentdata.findIndex((data)=>data.id===ID);

    newdata.splice(index,1);
    setcontactData(newdata);
    console.log(newdata);
    
  }

  const HandleClickCancel=()=>{
    setEditContactId(null);
  }
  return (
    <div className="Table">
      <h2>MERN Crud App</h2>
      <button id="adduser" onClick={appear}>Add User</button>
      <table className="Table1">
        <thead>
          <tr className='tableRow'>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
            {
              contactData.map((UserData)=>(
                <Fragment key={UserData.id} >
                  {
                    EditContactId === UserData.id?(
                      <EditUser 
                      Formdata={formdata} 
                      HandleEditFormChange={HandleEditformChange}
                      FormSubmit={onSubmitForm}
                      HandleClickCancel={HandleClickCancel} 
                      />
                    ):(
                      <ReadOnlyRow Condata={UserData} 
                      HandleEditClick={HandleEditClick}
                      HandleDeleteRow={HandleDeleteRow}
                      />
                    )
                  }
                </Fragment>
              )
              )
            }  
            </tbody>
      </table>
    </div>
  );
}

export default TableContent;
