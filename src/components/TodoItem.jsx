import styles from '../styles/TodoItem.module.css';
import { FaTrash } from "react-icons/fa";

const TodoItem = ({ itemProp, handleChange, delTodo }) => {
  
    return <li className={styles.item}>
             <div className={styles.content}>
               <input 
               type="checkbox" 
               checked={itemProp.completed}
               onChange={() => handleChange(itemProp.id)}
               />
               <button onClick={() => delTodo(itemProp.id)}><FaTrash /></button>
               {itemProp.title}
             </div>
           </li>;
  };
  export default TodoItem;
  