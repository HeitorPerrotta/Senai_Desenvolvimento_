import React from 'react';
import moment from 'moment';
import './title.css';

const Title = ({currentDate }) => {
    const dateTime = currentDate ? moment().format('MMMM Do YYYY') : 'Quarta-Feira, 21 de Agosto';

    return (
       <h1 className="title">
        {dateTime}
       </h1>
    );
};

export default Title;
