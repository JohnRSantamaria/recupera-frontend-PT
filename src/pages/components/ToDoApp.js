import { usePostToDo } from '@/hooks/usePostToDo';
import FormAddToDo from './FormAddToDo';

const ToDoApp = () => {

  return (
    <>
      <div className='flex justify-start items-center gap-2 select-none'>
        <h3 className='text-xl font-semibold'>Agregar un To Do</h3>
      </div>
      <FormAddToDo />
    </>
  )
}

export default ToDoApp
