// import { TodoList } from './classes/todo-list.class';
// import { Todo } from './classes/todo.class';
// import { Lista } from './classes/todo-list.class';

import './styles.css';

import { Todo, Lista} from './classes';
import { crearTodoHtml } from './js/componentes';

export const lista = new Lista();

// const tarea = new Todo('Aprender Javascript');

// lista.nuevoTodo(tarea);

// console.log(lista);

// tarea.completado = true;

// crearTodoHtml( tarea );

// localStorage.setItem('mi-key', 'ABC123');
// sessionStorage.setItem('mi-key', 'ABC123');

// setTimeout( () => {
//     localStorage.removeItem('mi-key');
// }, 1500 );

// lista.todos.forEach(todo => crearTodoHtml( todo ));

lista.todos.forEach( crearTodoHtml );

console.log('todos', lista.todos);