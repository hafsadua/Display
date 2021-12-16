import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { getDatabase, ref, set, onValue, get, child } from "firebase/database";
import { collection, doc, setDoc, getDocs, onSnapshot, getFirestore } from "firebase/firestore";
import { keyboard } from "@testing-library/user-event/dist/keyboard";
import { tab } from "@testing-library/user-event/dist/tab";


function ShowData() {
  const [data, updateData] = useState([]);
  const [check, setCheck] = useState([]);
  const [observeels , updateObserveels] = useState([]);
  const [satisfactoryls , updateSatisfactoryls] = useState([]);
  const [datels , updateDatels] = useState([]);

  var observerLS =[];
  var observeeLS = [];
  var SatisfactoryLS =[];
  var DateLS = [];

  async function showData() {
    const db = getFirestore();

    const querySnapshot = await getDocs(collection(db, "LessonCompetency"));
    console.log("Done getfirebase")
    console.log(querySnapshot)

  
    querySnapshot.forEach((doc) => {
     
      console.log(doc.data());
     observeeLS.push(doc.data().observee)
     observerLS.push(doc.data().observer)
     SatisfactoryLS.push(doc.data().Satisfactory)
      DateLS.push(doc.data().Date)
    });
   console.log(observeeLS)
   console.log(observerLS)
   console.log(SatisfactoryLS)
   console.log(DateLS)
   updateData(observerLS)
   updateObserveels(observeeLS)
   updateSatisfactoryls(SatisfactoryLS)
   updateDatels(DateLS)
   
  }
  useEffect(() => {
  showData()
    },[]);

  return (
<<<<<<< HEAD
    <div className="login">
      <div className="loginContainer">
      <h1>Lesson Competency</h1> <br></br>
   <Table>
     <thead> 
        <td>
          Observer
        </td>
       <td>
         Observee
       </td>
       <td>
         Satisfactory
       </td>
       {/* <td>
        Date
       </td> */}
     </thead>
     <tbody>
    <td> 
     {
           data.map((observerLS)=>(
             <tr key={Math.random()}>
                {observerLS}

             </tr>
           ))
         }
         </td>
         <td>
          {
           observeels.map((observeeLS)=>(
             <tr key={Math.random()}>
                {observeeLS}

             </tr>
           ))
         }
       </td>
       <td>
          {
           satisfactoryls.map((SatisfactoryLS)=>(
             <tr key={Math.random()}>
                {SatisfactoryLS}

             </tr>
           ))
         }
       </td>
       {/* <td>
          {
           datels.map((DateLS)=>(
             <tr key={Math.random()}>
                {DateLS}

             </tr>
           ))
         }
       </td> */}
     </tbody>
   </Table>
      </div>
=======
    <div className="home">

      <h1>Display Users</h1> <br></br>
      {/* {data.map((val) => (
        <div style={{ borderWidth: 1 }} key={Math.random()}>
          <p> {val?.name ?? "not available"} </p>
         
        </div>
      ))} */}
>>>>>>> f8da279392d44c8241bd29c1465dc7360f26dd5d
    </div>
  );
}

export default ShowData;

