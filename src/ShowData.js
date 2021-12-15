import React, { useState, useEffect } from "react";

import { getDatabase, ref, set, onValue, get, child } from "firebase/database";
import { collection, doc, setDoc ,  getDoc, onSnapshot, getFirestore} from "firebase/firestore";

function ShowData() {
  const [data, UpdateData] = useState([]);




  // const docRef = doc(db, "users");
  // const docSnap = getDoc(docRef);
  
  // if (docSnap.exists()) {
  //   console.log("Document data:", docSnap.data());
  // } else {
    
  //   console.log("No such document!");
  // }
  // var newData = [];
  // const starCountRef = firestore.collection(`OnOffTask/`);
  // const GetData = () => {
  //   var value = [];
  //   onValue(starCountRef, (snapshot) => {
  //     value = Object.values(snapshot.val());
  //     console.log(value)

  //   });
  //   setTimeout(() => {
  //     UpdateData(value);
  //   }, 1000);
  // };
  // useEffect(() => {
  //   GetData();
  //   setTimeout(() => {
  //     GetData();
  //   }, 500);

  //   return () => { };
  // }, []);

  // const dbRef = ref(getDatabase());
  // get(child(dbRef, `OnOffTask/`)) . then((snapshot)=>{
  //     if (snapshot.exists()){
  //         console.log(snapshot.val())
  //     }
  //     else{
  //         console.log("Not Found")
  //     }
  // }).catch((error)=>{
  //     console.error(error);
  // })
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  // const ref = firebase.firestore().collection("users");
  // function getUsers(){
  //   setLoading(true);
  //   ref.onSnapshot((querySnapshot)=>{
  //     const items = [];
  //     querySnapshot.forEach((doc)=>{
  //       items.push(doc.data())
  //     });

  //     setUsers(items);
  //     setLoading(false);
  //   });

  // }

  // useEffect(()=>{
  //   getUsers();
  // },[]);


  return (
    <div className="home">

      <h1>Display Users</h1> <br></br>
      {/* {data.map((val) => (
        <div style={{ borderWidth: 1 }} key={Math.random()}>
          <p> {val?.name ?? "not available"} </p>
         
        </div>
      ))} */}
    </div>
  );
}

export default ShowData;
