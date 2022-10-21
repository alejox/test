import React from 'react';
import './lesson.scss'

const Lesson = () => {
  return (
    <section className='lesson'>
      <h1 className='lesson__title'>Lesson Day</h1>
      <iframe
      className='lesson__video'
        width="80%"
        height="720"
        src="https://www.youtube.com/embed/TkkrPWBx2PY?start=14"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </section>
  );
};

export default Lesson;
