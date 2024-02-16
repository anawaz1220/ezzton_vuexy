import { auth } from "@/@core/app-config/init";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider,
  createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup,
} from 'firebase/auth';
import { defineStore } from 'pinia';
import swal from "sweetalert2";
const errorAlert=(message)=>{
    new swal({
      icon: 'error',
      title: 'Oops...',
      text: message,
    }
    )
  };
  const successAlert=(message)=>{
    new swal({
      icon: 'success',
      title: message,
      showConfirmButton: false,
      timer: 1500
    }
    )
  };
export const useAuthStore = defineStore( {
  id: 'auth',
  state: () => ({
    user: null, 
    isAuthenticated: false,
    userloader:false,
    registrationSuccess: false,
  }),

  actions: {
    async registerUser({ email, password }) {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        this.user= userCredential.user;
        successAlert("User Registered Successfully")
        this.registrationSuccess = true;
      } catch (error) {
       errorAlert(error);
      }
    },
    async loginUsers({email,password}){
      try{
         const response = await signInWithEmailAndPassword(auth, email,password);
         this.user = response.user;
         this.isAuthenticated = true;
         successAlert("User Logged In Successfully");
      }catch(error){
        errorAlert(error)
      }
    },
    async registerWithGoogle(){
      const provider = new GoogleAuthProvider();
      try{
        const userCredential = await signInWithPopup(auth, provider);
        this.user = userCredential.user;
        this.isAuthenticated = true;
        successAlert("User Registered with Google Successfully");
      }catch(error){
        errorAlert(error);
      }
    },
    async registerWithFacebook() {
      const provider = new FacebookAuthProvider();
      try {
        const userCredential = await signInWithPopup(auth, provider);
        this.user = userCredential.user;
        this.isAuthenticated = true;
        successAlert("User Registered with Facebook Successfully");
      } catch (error) {
        errorAlert(error.message);
      }
    },
    async registerWithTwitter() {
      const provider = new TwitterAuthProvider();
      try {
        const userCredential = await signInWithPopup(auth, provider);
        this.user = userCredential.user;
        this.isAuthenticated = true;
        successAlert("User Registered with Twitter Successfully");
      } catch (error) {
        errorAlert(error.message);
      }
    },
  },
});

