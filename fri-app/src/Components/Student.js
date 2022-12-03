import {useEffect,useState} from 'react';
import axios from 'axios';

function Student() {
  const[fname, setFname] = useState();
  const[lname, setLname] = useState();
  const[age, setAge]= useState();
  const[students, setStudents] = useState([]);
  //useEffect (function; param-dependency) - every refresh
useEffect(()=>{
  const url = 'http://localhost/sat-app/Db.php';//link to the DB
  axios.get(url).then((response)=>{
    setStudents(response.data);
    console.log(students);
  })
},[]);

const submitBtn = function(){
  let getData = new FormData();
  getData.append('fname',fname); //key-value pairs
  getData.append('lname',lname);
  getData.append('age',age);
  getData.append('function', 'insert');
  axios({
    method: 'POST', //get / post
    url: 'http://localhost/sat-app/Db.php' , //dblink
    data: getData, // data to be transferred
    config: 'Content-type = "multipart/form-data"' //
  });
}

const delBtn = function(e){
 
  alert(e.currentTarget.id);
  let getData = new FormData();
  getData.append('stud_id',e.currentTarget.id);
  getData.append('function', 'delete');

  axios({
    method: 'POST', //get / post
    url: 'http://localhost/sat-app/Db.php' , //dblink
    data: getData, // data to be transferred
    config: 'Content-type = "multipart/form-data"' //
  }).then(function(response){
    alert("succesfully deleted!");
    const url = 'http://localhost/sat-app/Db.php';
    axios.get(url).then((response)=>{
      setStudents(response.data);
      console.log(students);
    })
  
  }).catch(function(error){
    alert("mali");
    console.log(error);
  })

}

const upBtn = function(e){
  alert(e.currentTarget.title)
  let getData = new FormData();
  getData.append('stud_id', e.currentTarget.title);
  getData.append('fname',document.getElementById('fname'+e.currentTarget.title).value);
  getData.append('lname',document.getElementById('lname'+e.currentTarget.title).value);
  getData.append('age',document.getElementById('age'+e.currentTarget.title).value);
  getData.append('function', 'update');

  axios({
    method: 'POST', //get / post
    url: 'http://localhost/sat-app/Db.php' , //dblink
    data: getData, // data to be transferred
    config: 'Content-type = "multipart/form-data"' //
  }).then(function(response){
    alert("succesfully updated!");
    const url = 'http://localhost/sat-app/Db.php';
    axios.get(url).then((response)=>{
      setStudents(response.data);
      console.log(students);
    })
  
  }).catch(function(error){
    alert("mali");
    console.log(error);
  })


}

  return (
    <div>
      <h1> student list</h1>
      <form>
        <input type="text" name="fname" value={fname} onChange = {(e) => setFname(e.target.value)}/>
        <input type="text" name="lname" value={lname} onChange = {(e) => setLname(e.target.value)}/>
        <input type="number" name="age" value={age} onChange = {(e) => setAge(e.target.value)}/>
        <input type="submit" onClick = {submitBtn} />
        
      </form>
      <table>
        <thead>
          <tr>
          <th>student id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            
          </tr>
        </thead>
        <tbody>
            
            {students.map((val)=>{

        return(

            <tr key={val.stud_id}>
{/*             
            <td><input id={'fname'+val.stud_id} defaultValue={val.stud_id} style={{}}/></td> */}
            <td><input Value={val.stud_id}/></td>
            <td><input defaultValue={val.firstname} id ={'fname'+val.stud_id}/></td>
            <td><input defaultValue={val.lastname} id ={'lname'+val.stud_id}/></td>
            <td><input defaultValue={val.age} id ={'age'+val.stud_id}/></td>
            <td><button id={val.stud_id} onClick={delBtn}>delete</button></td>
            <td><button title={val.stud_id} onClick={upBtn}>update</button></td>
          </tr>

        )
        
        })}
          
        </tbody>
      </table>
      </div>
      )
    }
    
export default Student;