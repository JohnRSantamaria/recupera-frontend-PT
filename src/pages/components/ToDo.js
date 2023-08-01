import React, { useEffect, useState } from 'react'
import Checkbox from './Checkbox'
import { AiOutlineDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { usePatchToDO } from '@/hooks/usePatchTodo';
import { calcLength } from 'framer-motion';

const ToDo = ({ id, title, done }) => {
  const [isDone, setIsDone] = useState(done);
  const { patch } = usePatchToDO();

  const handleChange = async () => {
    await patch(id, { done: !isDone })
    setIsDone(!isDone)
  }


  return (
    <div className='flex items-center justify-between border mb-4 rounded-md px-2 py-4'>
      <div className='flex gap-4'>
        <Checkbox name={title} label={title} checked={isDone} onChange={handleChange} />
        <span className={`capitalize select-none ${isDone && "line-through"}`}>{title}</span>
      </div>

      <div className='flex gap-2 justify-center items-center text-2xl ' >
        <AiOutlineDelete className='hover:text-primary dark:hover:text-primaryDark cursor-pointer' />
        <CiEdit className='hover:text-primary dark:hover:text-primaryDark cursor-pointer' />
      </div>
    </div>
  )
}

export default ToDo
