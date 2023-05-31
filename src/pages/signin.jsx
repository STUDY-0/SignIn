import React, { useState, useEffect, useRef } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import firebaseApp from '../../firebase';
import styles from '../styles/signin.module.css';

function Signin() {
  const inputRef = useRef(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [windowWidth, setWindowWidth] = useState();

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSignIn();
    }
  };

  // 반응형
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const placeholders = windowWidth <= 768 ? ['이메일', '비밀번호'] : ['', ''];

  const handleSignIn = () => {
    const auth = getAuth(firebaseApp);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Handle successful sign-in
        const user = userCredential.user;
        alert("로그인 성공!")
        console.log('Successfully signed in:', user);
      })
      .catch((error) => {
        // Handle sign-in error
        console.error('Sign-in error:', error);
      });
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>sign in</div>
        <div className={styles.flex}>
          <div className={styles.inputDiv}>
            <label className={styles.label}>이메일</label>
            <input
              className={styles.input}
              ref={inputRef}
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={placeholders[0]}
            />
          </div>
          <div className={styles.inputDiv}>
            <label className={styles.label}>비밀번호</label>
            <input
              className={styles.input}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={placeholders[1]}
            />
          </div>
        </div>
        <button className={styles.register} onClick={handleSignIn}>
          next
        </button>
      </div>
    </>
  );
}

export default Signin;
