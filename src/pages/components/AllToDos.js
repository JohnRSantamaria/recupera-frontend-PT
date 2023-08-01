import { useGetToDos } from '@/hooks/useGetToDos';
import React from 'react'
import ToDo from './ToDo';

const AllToDos = () => {
  const { data, loading, error } = useGetToDos();

  if (error) return <div className='flex justify-center items-center text-4xl mt-4 '>El servidor esta inactivo, por favor inicie el serveridor</div>

  return (
    <div className='p-4 shadow-lg my-8 px-8'>
      <div className='flex items-center justify-center mb-2 text-2xl font-semibold'>TO DO&apos;S</div>
      {
        loading ? <p>Loading ... </p> :
          data.map((todo) => (<div key={todo.id} className='flex flex-col gap-4'>
            <ToDo id={todo.id} title={todo.title} done={todo.done} />
          </div>))
      }
    </div>
  )
}

export default AllToDos
