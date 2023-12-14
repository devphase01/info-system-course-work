import ReactDOM from 'react-dom';
import { classes } from './index.styled';
import { FC } from 'react';
import useClickOutside from '@shared/hooks/useClickOutside';
import { cn } from '@shared/utils/style.util';

interface Props {
  onClose: () => void;
}

const StrategyModal: FC<Props> = ({ onClose }) => {
  const ref = useClickOutside<HTMLDivElement>(onClose);

  return ReactDOM.createPortal(
  (
    <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
      <div ref={ref} className="w-[500px] p-[40px] bg-white">
        <h1 className="font-roboto-500 text-[24px]">Create Strategy</h1>

        <form className="flex flex-col mt-[30px]">
          <input className={cn(classes.input, 'mb-[12px]')} />
          <textarea className={classes.input}/>

          <button className={classes.btn} onClick={() => {}}>
            Create
          </button>
        </form>
      </div>
    </div>
  ), 
  document.getElementById('strategy-modal')!);
};

export default StrategyModal;