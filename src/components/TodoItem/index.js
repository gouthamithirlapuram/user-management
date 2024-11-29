// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteItem} = props
  const {id, title} = todoDetails
  const onDeleteClick = () => {
    deleteItem(id)
  }
  return (
    <li>
      <div className="container">
        <p>{title}</p>
        <button type="button" onClick={onDeleteClick}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
