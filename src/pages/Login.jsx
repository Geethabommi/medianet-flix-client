import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png';
import background from '../assets/vfinal.gif';
import { useNavigate } from 'react-router-dom';
import BackgroundImage from '../components/BackgroundImage';
import Header from '../components/Header';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from '../utils/firebase-config';
import load from '../assets/loading-red.gif';

function Login() {
  const [Loader, setLoader] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // setLoader(true);
      console.log('loader set');
      await signInWithEmailAndPassword(firebaseAuth, email, password);
      // setLoader(false);
    } catch (error) {
      console.log('login error', error.code);
    }
  };

  // useEffect(() => {
  //   const subscriber = onAuthStateChanged(firebaseAuth, (currentUser) => {
  //     if (currentUser) navigate('/');
  //   });
  //   return () => {
  //     subscriber();
  //   }; // unsubscribe on unmount
  // }, []);

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) {
      setLoader(false);
      navigate('/');
    }
  });

  return (
    <Container>
      <BackgroundImage />

      <div className='content'>
        <Header />
        <div className='form-container flex column a-center j-center'>
          <div className='form flex column a-center j-center'>
            <div className='title'>
              <h3>Login</h3>
            </div>

            <div className='container flex column'>
              <input
                type='text'
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <input
                type='password'
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <button onClick={handleLogin}>Login to your account</button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0);
    grid-template-rows: 15vh 85vh;
    .form-container {
      gap: 2rem;
      height: 85vh;
      .form {
        padding: 2rem;
        background-color: #5c5b5baf;
        width: 25vw;
        gap: 2rem;
        color: white;
        .container {
          gap: 2rem;
          input {
            padding: 0.5rem 1rem;
            width: 15rem;
          }
          button {
            padding: 0.5rem 1rem;
            background-color: #e50914;
            border: none;
            cursor: pointer;
            color: white;
            border-radius: 0.2rem;
            font-weight: bolder;
            font-size: 1.05rem;
          }
        }
      }
    }
  }
`;

export default Login;