import { FC, MouseEvent, useState } from 'react'
import { SlOptionsVertical } from "react-icons/sl";

import StrategyModal from '../strategy-modal';
import { useUpdateRequestMutation } from '@entities/request';

interface Props {
  id: string;
  title: string;
  description: string;
  status: string;
}

const ReqItem: FC<Props> = ({ id, title, description, status }) => {
  const [updateStatusAsync] = useUpdateRequestMutation();
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleToggleMenu = (event: MouseEvent) => {
    event.preventDefault();

    setShowMenu(prev => !prev);
  }

  const handleClose = () => {
    setShowModal(false);
  };

  const handleStatus = async (status: 'none' | 'pending' | 'closed') => {
    await updateStatusAsync({ requestId: id, status });
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
              {status === 'none'    ? <button className="w-full text-left cursor-pointer" onClick={() => handleStatus('pending')}>Process</button>      : null}
              {status === 'pending' ? <button className="w-full text-left cursor-pointer" onClick={() => handleStatus('none')}>Decline</button>      : null}
              {status !== 'closed'  ? <button className="w-full text-left cursor-pointer" onClick={() => setShowModal(true)}>Add strategy</button> : null}
              <button className="w-full text-left cursor-pointer">Delete</button>
            </div>
          ) : null}
        </div>
      </li>

      {showModal ? <StrategyModal requestId={id} onClose={handleClose} />: null}
    </>
  )
}

export default ReqItem