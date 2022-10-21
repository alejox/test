import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Pagination } from '../../components/pagination/Pagination';
import Task from './Task';
import './activities.scss';

const url = `${import.meta.env.VITE_API}todos/`;

const Activities = () => {
  const [task, setTask] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [todoPerPage, setTodoPerPage] = useState(12);
  useEffect(() => {
    async function getData() {
      const res = await axios.get(url);
      setTask(res.data);
    }
    getData();
  }, []);

  const lastTodoIndex = currentPage * todoPerPage;
  const firstTodoIndex = lastTodoIndex - todoPerPage;
  const currentTodos = task.slice(firstTodoIndex, lastTodoIndex);
  return (
    <section className="task">
      <h2 className="task__title">Tasks</h2>
      <Task task={currentTodos} />
      <Pagination
        totalTodos={task.length}
        todoPerPage={todoPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </section>
  );
};

export default Activities;
