import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCWNAuMnImvQZFemtMey2hvZ4nNlosTjUk',
  authDomain: 'medianet-flix.firebaseapp.com',
  projectId: 'medianet-flix',
  storageBucket: 'medianet-flix.appspot.com',
  messagingSenderId: '1041175931191',
  appId: '1:1041175931191:web:a1cf9123b074eb83ebd2b2',
};
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
