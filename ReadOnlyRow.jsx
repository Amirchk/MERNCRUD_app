import './App.css';

const ReadOnlyRow=({Condata,HandleEditClick,HandleDeleteRow})=>{
return (
    <tr key={Condata.id}>
        <td > {Condata.name}</td>
        <td > {Condata.age}</td>
        <td > {Condata.email}</td>
        <td > {Condata.password}</td>
        <td >
            <button type="button" onClick={(e)=>
                HandleEditClick(e,Condata)
            } >Edit</button>
        </td>
        <td >
            <button type="button" onClick={()=>{
                HandleDeleteRow(Condata.id)
            } } >Delete</button>
        </td>
    </tr>
)
}
export default ReadOnlyRow;