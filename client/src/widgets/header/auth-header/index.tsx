import { FC } from 'react'
import { FcIdea } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';

import { RoleType, logout } from '@entities/user';
import { classes } from '../index.styled';
import { useAppDispatch } from '@shared/hooks/redux.hook';

interface Props {
  role: RoleType;
}

const AuthHeader: FC<Props> = ({ role }) => {
  const navigate = useNavigate();

  const handleNavigate = () => navigate('/');

  return (
    <div className="h-[80px] px-[120px] py-[20px] bg-anti-flash">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[40px]">
          <div className="flex items-end gap-[12px] relative select-none cursor-pointer" onClick={handleNavigate}>
            <FcIdea className="text-[52px] rotate-[30deg] absolute left-[-20px]" />
            <h2 className="text-[24px] font-roboto-500 relative px-[8px]">
              Solve your business problem
            </h2>
          </div>
        </div>

        {role === 'manager' ? <ManagerButtons /> : <UserButtons />}
      </div>
    </div>
  );
};

const UserButtons = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  }

  return (
    <div className="flex items-center gap-[12px]">
      <button className={classes.btn} onClick={() => navigate('/create-request')}>
        Create a Request
      </button> 

      <button className={classes.btn} onClick={() => navigate('/requests')}>
        My Requests
      </button>

      <button className={classes.logout} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

const ManagerButtons = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  }

  return (
    <div className="flex items-center space-x-[12px]">
      <button className={classes.btn} onClick={() => navigate('/requests')}>
        Requests
      </button>

      <button className={classes.logout} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default AuthHeader;
