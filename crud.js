
  
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyArXtyXcGensFJtq7p4Y8bFuR7wJ7_wgrg",
    authDomain: "project1-cb0ef.firebaseapp.com",
    projectId: "project1-cb0ef",
    storageBucket: "project1-cb0ef.appspot.com",
    messagingSenderId: "822971158303",
    appId: "1:822971158303:web:7d7477636a08643e49ea2a",
    measurementId: "G-1VCFSLQDBH"
  };
  firebase.initializeApp(firebaseConfig)
  var dbRef=firebase.database().ref().child("students")
  function createStudent(){
      console.log("Create Student");
      let uname=document.getElementById('uname').value;
     let ename=document.getElementById('ename').value;
      let rno=document.getElementById('rno').value;
      let bns=document.getElementById('bns').value;
      dbRef.child(uname).set({ 
          uname:uname,
          ename:ename,
          rno:rno,
          bns:bns
      })
      console.log("User Created Successfully");
  }
  
  
    function updateStudent(){
      console.log("Update");
    let uname=window.prompt("Enter the username to update");
    let rno=window.prompt("Enter the rollno to update");
    // let uname=document.getElementById('uname');
      dbRef.child(uname).update({
          uname:uname,
          rno:rno
      })
  
      console.log("details updated");
  }

  function deleteStudent(){
      console.log("Delete Student");
      let username=window.prompt("Enter the name of the student to be deleted");
    //  let ename=document.getElementById('ename').value;
      dbRef.child(username).remove();
      console.log(username+" removed");
  }
  function displayStudent(){
      
      console.log("Update"); 
      table=document.createElement("TABLE")
      table.border="2"
     table.width="100%"
      dbRef.on('child_added', (snap) =>
      {
          row=table.insertRow(-1)
          cell1= row.insertCell(-1)
          cell1.innerHTML=snap.val().uname
          cell2=row.insertCell(-1)
          cell2.innerHTML=snap.val().ename
     
      })
      studentlist=document.getElementById("studentList")
      studentList.appendChild(table)
      studentList.append

     }
    