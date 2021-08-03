import './App.css';

const EditUser=(props)=>{
    return (
        <tr >
            <td>
                <input
                    type="text"
                    name="name"
                    value={props.Formdata.name}
                    onChange={props.HandleEditFormChange}
                />
            </td>
            <td>
                <input
                    type="text"
                    name="age"
                    value={props.Formdata.age}
                    onChange={props.HandleEditFormChange}
                />
            </td>
            <td>
                <input
                    type="text"
                    name="email"
                    value={props.Formdata.email}
                    onChange={props.HandleEditFormChange}
                />
            </td>
            <td>
                <input
                    type="text"
                    name="password"
                    value={props.Formdata.password}
                    onChange={props.HandleEditFormChange}
                />
            </td>
            <td>
                <button type="submit" onClick={props.FormSubmit} >submit</button>
            </td>
            <td >
                <button type="button" onClick={props.HandleClickCancel} >Cancel</button>
            </td>
        </tr>
        
    )
}
export default EditUser;