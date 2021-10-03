import { useState , useEffect} from "react";
import firebase from "../authorize/firebase";
import { successToastify, errorToastify } from "../utils/customToastify";



export const createUser = async (email, password, setislogin) => {

  try {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        setislogin(true)
        successToastify("Register successfully");
      })
      .catch((error) => {
        // var errorCode = error.code;
        errorToastify(error.message);
      });

  } catch (error) {
    alert(
      "There exists an account with this email. Please login with your password or continue with Google!"
    );
  }
};

export const signOut = () => {

  firebase.auth().signOut();
  successToastify("GoodBye.....");
};

export const signIn = (email, password, setislogin, setloginInfo) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      //var user = userCredential.user;
      setislogin(true)
      setloginInfo({email:email, password:password})
      
      successToastify("Login successfully");
      // const currentUser = firebase.auth().currentUser;
      
    })
    .catch((error) => {
      // var errorCode = error.code;
      errorToastify(error.message);
    });
};

export const addInfo = (info) => {
  const contactRef = firebase.database().ref("contact");
  contactRef.push(info);
  // firebase.database().ref('contact' + info.name).set(info);
  
  successToastify("Added successfully");
};

export const useFetch = () => {
  const [info, setinfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const contactRef = firebase.database().ref("contact");
    contactRef.on("value", (snapshot) => {
      const contacts = snapshot.val();

      const contactArray = [];
      for (let id in contacts) {
        contactArray.push({ id, ...contacts[id] });
      }
      setinfo(contactArray);
      setIsLoading(false);
      
    });
  }, []);
  
  return { info, isLoading };
};

// Chat (deneme düzeyinde)
export const addchat = () =>{
  const contactRef = firebase.database().ref("chat");
  contactRef.push({chat:"merhaba", email:"sasas@gmail.com"});
  // firebase.database().ref('contact' + info.name).set(info);
  
  successToastify("Added successfully");
}

// Delete Blog
export const deleteHandler = (id) => {
  const contactRef = firebase.database().ref("contact").child(id);
  contactRef.remove();
  successToastify("Deleted successfully");
 
}

// Update Blog
export const UpdateInfo = (info) => {
  const contactRef = firebase.database().ref("contact").child(info.id);
  contactRef.update(info)
 
  successToastify("Updated Successfully")
}

