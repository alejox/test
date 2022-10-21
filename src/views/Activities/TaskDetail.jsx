import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import './activities.scss';

const TaskDetail = () => {
  const { id } = useParams();
  const url = `${import.meta.env.VITE_API}todos/${id}`;

  const [task, setTask] = useState({});

  useEffect(() => {
    async function getData() {
      const res = await axios.get(url);
      setTask(res.data);
    }
    getData();
  }, []);

  return (
    <section className="detail">
      <article className="detail__card">
        <h2 className="detail__card-title">Drum execise # {id}</h2>
        <p>
          <b className="detail__card-b">Task: </b>
          {task.title}
        </p>
        <p>
          <b className="detail__card-b">Description: </b> Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Earum sunt asperiores provident
          iusto aut qui, laborum aliquid aliquam rem, et repellat veritatis,
          itaque inventore. Dolore nihil et rem est culpa!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          suscipit possimus voluptatibus eius, ipsam maiores sequi nemo? Autem
          ipsum, fugiat quisquam tempora facilis est vel harum tenetur amet cum
          officia!
        </p>
        <p>
          <b className="detail__card-b">Status: </b>
          {task.completed ? 'Done' : 'To do'}
        </p>
        <Link to='/activities'>
          <button className="btn btn-outline-primary">Go back</button>
        </Link>
      </article>
    </section>
  );
};

export default TaskDetail;
