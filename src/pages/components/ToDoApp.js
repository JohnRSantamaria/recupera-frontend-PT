import FormAddToDo from './FormAddToDo';
import AllToDos from './AllToDos';

const ToDoApp = () => {

  return (
    <>
      <div className='flex justify-start items-center gap-2 select-none'>
        <h3 className='text-xl font-semibold'>Agregar un To Do</h3>
      </div>
      <FormAddToDo />
      <AllToDos />
    </>
  )
}

export default ToDoApp
