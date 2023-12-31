import { useNavigate } from 'react-router-dom';
import { ChangeEvent, MouseEvent, useState } from "react";

import { useRegisterMutation } from '@entities/user';

import { cn } from "@shared/utils/style.util";
import { classes } from "../index.styled";

const SignUp = () => {
  const navigate = useNavigate();
  const [registerAsync] = useRegisterMutation();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (event: MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();

    if (!password || !email) {
      return;
    }

    await registerAsync({
      email,
      password
    });
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
        <h1 className={classes.title}>Sign up</h1>

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