import React from 'react'

const ToDoForm = ({ handleSubmit, todo, tododesc, editId, setTodo, setTododesc }) => {
  return <>
  <div class="w-full">
          <form className="bg-gray-700 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div class="mb-4">
      <input
      className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        type="text"
        placeholder='Write title'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      </div>
      <div class="mb-4">
      <textarea className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        placeholder='Write description'
        value={tododesc}
        onChange={(f) => setTododesc(f.target.value)}
      />
      </div>
      <button className="w-full bg-gray-400 hover:bg-gray-200 text-white hover:text-black font-bold py-2 px-4 border-b-4 rounded" type="submit"> {editId ? "EDIT" : "SUBMIT"}</button>
    </form>
    </div>
      </>
}

export default ToDoForm
