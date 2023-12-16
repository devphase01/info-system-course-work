import { MouseEvent, useState } from 'react';

import { selectUser } from '@entities/user';

import { useAppSelector } from '@shared/hooks/redux.hook';
import { useCreateRequestMutation } from '@entities/request';

import { cn } from '@shared/utils/style.util';
import { classes } from './index.styled';

const CreateRequestPage = () => {
  const { userId } = useAppSelector(selectUser);
  const [createRequestAsync] = useCreateRequestMutation();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleCreate = async (event: MouseEvent) => {
    event.preventDefault();
    
    if (!title || !description ) {
      return;
    }

    const createRequestDto = {
      userId,
      title,
      description,
    };

    await createRequestAsync(createRequestDto);
  };

  return (
    <div className={classes.container}>
      <div className={classes.formBox}>
        <h1 className={classes.title}>Create a Request</h1>

        <form className={classes.form}>
          <input 
            className={cn(classes.input, 'mb-[12px]')} 
            placeholder="title"
            value={title}
            onChange={event => setTitle(event.target.value)}
          />
          <textarea
            className={classes.input}
            placeholder="description"
            rows={4}
            value={description}
            onChange={event => setDescription(event.target.value)}
          />

          <button className={classes.btn} onClick={handleCreate}>
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateRequestPage;