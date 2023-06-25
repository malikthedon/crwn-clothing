//creates an app instance for you based on some type of config
import {initializeApp} from 'firebase/app';
//this config is an object that allows us to attach firebase app instance to the firebase instance 
//we have online

//authentication importing from firebase
import {getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider} from 'firebase/auth';


//imports the functions you need to set up your firebase database in the app
//get firestore sets up the firestore database
//doc gets documents in the firestore database
//getDoc getting the documents data
//setDoc sets documetns data
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';


// Your web app's Firebase configuration
//this configs the web app in our code 
const firebaseConfig = {
    apiKey: "AIzaSyBnUSYMbgOLHns-wmeiJzX8rzonb3ZVi8I",
    authDomain: "clothing-store-db-3b920.firebaseapp.com",
    projectId: "clothing-store-db-3b920",
    storageBucket: "clothing-store-db-3b920.appspot.com",
    messagingSenderId: "936171118521",
    appId: "1:936171118521:web:fe11ac8ceb9b709748e068"
  };



  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  //authentication needs to be iniliazed
  const provider = new GoogleAuthProvider();
  //takes different config objects and you can tell how you want the
  //google auth provider to behave
  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  //you have to pass aut and provider into the signInWithPopup function to configurate the authentication
  export const signInWithGooglePopup = () => {
    return signInWithPopup(auth, provider)
  }

  //after getting the function from the firestore database, you have to create the db
  export const db = getFirestore();

  //this function creates a user from authentication
  export const createUserDocumentFromAuth = async (userAuth) => {
    //gotta see if theres an existig  document reference
    //userAuth.uid comes from the userAuth ibject of the user when sign in
    const userDocRef = doc(db, "users", userAuth.uid )

    //get and check some data using getDoc, gets the data related to a document
    const userSnapshot = await getDoc(userDocRef);
    //checks to see if the data well exist
    console.log(userSnapshot.exists());


    //check if user data exist  return userDocRef
    //sine the bang is input it does the opposite if it does not exist it return true
    if(!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            //try catch is for async actions in the code like creating data in the backend
            //in this try block you want to setDoc(create data in the database), with the displayName, email and date it was created at
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt

            });
        } catch (err) {
            console.log("error creating the user", err.message);
        }
    } 

    //if user data does not exist,create /set the document with the data from userAuth in my collection
    return userDocRef;

  }