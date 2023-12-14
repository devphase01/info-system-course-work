import ReactDOM from 'react-dom';
import { FC, MouseEvent, useState } from 'react';

import useClickOutside from '@shared/hooks/useClickOutside';
import { useCreateStrategyMutation } from '@entities/strategy';

import { cn } from '@shared/utils/style.util';
import { classes } from './index.styled';

interface Props {
  onClose: () => void;
  requestId: string;
}

const StrategyModal: FC<Props> = ({ onClose, requestId }) => {
  const ref = useClickOutside<HTMLDivElement>(onClose);
  const [createStrategyAsync] = useCreateStrategyMutation();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleCreate = async (event: MouseEvent) => {
    event.preventDefault();

    if (!description || !title) {
      return;
    }

    await createStrategyAsync({ requestId, title, description });
    onClose();
  };

  return ReactDOM.createPortal(
  (
    <div className="fixed inset-0 flex items-center justify-center bg-black/25">
      <div ref={ref} className="w-[500px] p-[40px] bg-white">
        <h1 className="font-roboto-500 text-[24px]">Create Strategy</h1>

        <form className="flex flex-col mt-[30px]">
          <input className={cn(classes.input, 'mb-[12px]')} onChange={(event) => setTitle(event.target.value)} />
          <textarea className={classes.input} onChange={(event) => setDescription(event.target.value)} />

          <button className={classes.btn} onClick={handleCreate}>
            Create
          </button>
        </form>
      </div>
    </div>
  ), 
  document.getElementById('strategy-modal')!);
};

export default StrategyModal;