import React, { useContext } from 'react';
import Todo from './Todo';
import CtxTodo from './CtxTodo';

const Todos = () => {

  const [todos] = useContext(CtxTodo);

  return(
    <div>
      {todos.map((todo, index) => {
        return <Todo key={index} title={todo.title} description={todo.description} kitty={todo.kitty} index={index} />
      })}
    </div>
  )
}

export default Todos;
