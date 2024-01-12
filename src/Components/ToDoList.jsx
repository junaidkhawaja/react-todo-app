import React from 'react'

const ToDoList = ({ todos, handleDelete, handleEdit }) => {
  return <>
  <div className='bg-gray-700 rounded pt-3 pb-3 pl-3 pr-3'>
  <ul className="allTodos">
      {todos.map((t) => (
        <li className="mb-3 singleTodo bg-gray-500 rounded p-2 grid grid-rows-1 grid-cols-3 grid-flow-col gap-4">
          <span className="todoText block col-span-2" id={t.id}>
            <span className='block text-white font-semibold text-2xl'>{t.todo} <span className='text-white text-xs'>{new Date().toLocaleDateString()}</span></span>
            <span className='block text-gray-200 text-xl'>{t.tododesc}</span>
          </span>
          <span className='col-span-1'>
          <button className=' border-cyan-100 text-white bg-gray-600 w-full p-1 uppercase font-normal text-md mb-2 hover:bg-cyan-700 rounded' onClick={() => handleEdit(t.id)}>Edit</button>
          <button className=' border-red-700 text-white bg-gray-600 w-full p-1 uppercase font-normal  text-md mb-2 hover:bg-red-500 rounded' onClick={() => handleDelete(t.id)}>Delete</button>
          </span>
        </li>
      ))}
    </ul>
    </div>
  </>
}

export default ToDoList
