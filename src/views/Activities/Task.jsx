import './activities.scss';
import { Link } from 'react-router-dom';

const Task = ({ task }) => {
  return (
    <article className="task__card">
      {task.map(todo => (
        <section key={todo.id} className="task__card-content">
          <h3 className="task__card-title">Drum exercise # {todo.id}</h3>
          <p className="task__card-text">
            <b>Task: </b>
            {todo.title}
          </p>
          <div className="task__card-icon">
            <div className="task__card-iconColor"></div>
            <p className="task__card-status">
              <b>Status: </b>
              {todo.completed ? 'Done' : 'To do'}
            </p>
          </div>
          <Link to={`/activities/${todo.id}`}>
            <button className='btn btn-outline-primary'>Detail</button>
          </Link>
        </section>
      ))}
    </article>
  );
};

export default Task;
