import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDPq7MhUJZsLXd-KseYkXY04aWVkoUtT9A",
  authDomain: "downlode-hub-by-dilawar.firebaseapp.com",
  databaseURL: "https://downlode-hub-by-dilawar-default-rtdb.firebaseio.com",
 projectId: "dd699aac-8e1f-406d-ae5b-1fdb489d9732",
};


firebase.initializeApp(firebaseConfig);
const db = firebase.database()
