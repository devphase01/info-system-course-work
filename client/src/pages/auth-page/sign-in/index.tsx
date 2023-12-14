import { useNavigate } from 'react-router-dom';
import { ChangeEvent, MouseEvent, useState } from "react";

import { cn } from "@shared/utils/style.util";
import { classes } from "../index.styled";
import { useAppDispatch } from '@shared/hooks/redux.hook';
import { setUser } from '@entities/user';

const SignIn = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event: MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();

    dispatch(setUser({
      userId: 'id',
      email: 'email',
      role: 'manager',
    }));
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
            Log in
          </button>

          <button onClick={() => navigate('/sign-up')} className={classes.signBtn}>
            or sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;