import { FC, MouseEvent, useState } from 'react'
import { SlOptionsVertical } from "react-icons/sl";

import StrategyModal from '../strategy-modal';

interface Props {
  title: string;
  description: string;
  status: string;
}

const ReqItem: FC<Props> = ({ title, description, status }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleToggleMenu = (event: MouseEvent) => {
    event.preventDefault();

    setShowMenu(prev => !prev);
  }

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <li className="flex gap-[40px] items-center w-full rounded-[4px] p-[20px] bg-white">
        <h3 className="flex-3 text-[18px]">{title}</h3>
        <p className="flex-1">{description}</p>
        <p>{status}</p>

        <div className="relative">
          <button onClick={handleToggleMenu}>
            <SlOptionsVertical />
          </button>

          {showMenu ? (
            <div className="absolute flex flex-col items-start gap-[14px] top-full right-full shadow-gray p-[20px] bg-white rounded-[8px] w-[200px]">
              {status === 'none'    ? <button className="w-full cursor-pointer text-left">Process</button>      : null}
              {status === 'pending' ? <button className="w-full cursor-pointer text-left">Decline</button>      : null}
              {status !== 'closed'  ? <button className="w-full cursor-pointer text-left" onClick={() => setShowModal(true)}>Add strategy</button> : null}
              <button className="w-full cursor-pointer text-left">Delete</button>
            </div>
          ) : null}
        </div>
      </li>

      {showModal ? <StrategyModal onClose={handleClose} />: null}
    </>
  )
}

export default ReqItem