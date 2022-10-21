import axios from 'axios';
import React, { useEffect } from 'react';
import './home.scss';

const baseIMG = `${import.meta.env.VITE_API_TEACHERS}/?results=10`;

const Home = () => {
  const [img, setImg] = React.useState([]);

  useEffect(() => {
    async function getData() {
      const res = await axios.get(baseIMG);
      setImg(res.data.results);
    }
    getData();
  }, []);

  return (
    <section className="home">
      <h3 className="title">Welcome meet our teachers</h3>
      <section className="content">
        {img.map((teacher, index) => (
          <article key={index} className="content__card">
            <img
              className="content__card-img"
              src={teacher.picture.large}
              alt=""
            />
            <h4 className="content__card-title">
              <span className="content__card-span">Teacher: </span>
              {teacher.name.first} {teacher.name.last}
            </h4>
            <p className="content__card-text">
              <b>City: </b> {teacher.location.city}
            </p>

            <p className="content__card-text">
              <b>Country: </b>
              {teacher.location.country}
            </p>
            <p className="content__card-text">
              <b>Email: </b>
              {teacher.email}
            </p>
          </article>
        ))}
      </section>
    </section>
  );
};

export default Home;
