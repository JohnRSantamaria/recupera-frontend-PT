import React, { useState } from 'react'
import Input from './Input';
import { CgKey, CgLogOff, CgPlayListAdd } from "react-icons/cg";
import Swal from 'sweetalert2';
import { usePostToDo } from '@/hooks/usePostToDo';

const FormAddToDo = () => {
  const { sent, status } = usePostToDo();

  const [task, setTask] = useState({
    title: "",
    done: false
  });

  const handleChange = ({ target }) => {
    setTask({ ...task, title: target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!task.title) return Swal.fire({ title: "Debe ingresar una tarea", icon: "warning", iconColor: "#7B1818", confirmButtonColor: "#7B1818" })
    else {
      try {
        await sent(task)
        Swal.fire({ title: "Tarea creada con exito", icon: "success", iconColor: "#4F7942", confirmButtonColor: "#4F7942" })
        setTask({
          title: "",
          done: false
        })
      } catch (error) {
        console.log(error.message)
      }

    }
  }
  return (
    <form onSubmit={handleSubmit} name='add-todo' className='flex items-center gap-4 mt-4'>
      <Input name="Title"
        label="Hacer la cama, Lavar los platos..."
        type="text"
        value={task.title}
        onChange={handleChange}
      />
      <button type='submit' >
        <CgPlayListAdd className='hover:text-primary dark:hover:text-primaryDark text-4xl' />
      </button>
    </form>
  )
}

export default FormAddToDo
