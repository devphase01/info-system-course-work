import { useNavigate } from 'react-router-dom';
import { ChangeEvent, MouseEvent, useState } from "react";

import { cn } from "@shared/utils/style.util";
import { classes } from "../index.styled";

const SignUp = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event: MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();

    console.log('rere');
  };

  const handleEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  } 

  return (
    <div className={classes.container}>
      <div className={classes.formBox}>
        <h1 className={classes.title}>Sign in</h1>

        <form className={classes.form}>
          <input 
            className={cn(classes.input, 'mb-[12px]')} 
            placeholder="user@example.com" 
            value={email}
            onChange={handleEmail}
          />
          <input 
            className={classes.input} 
            type="password" 
            placeholder="password" 
            value={password}
            onChange={handlePassword}
          />

          <button className={classes.btn} onClick={handleSubmit}>
            Register
          </button>

          <button onClick={() => navigate('/sign-in')} className={classes.signBtn}>
            or sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;