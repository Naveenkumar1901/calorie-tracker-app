import React from 'react';
import './index.css';

const Loading = ({ variant }) => (
    <div className="spinner-box">
        <div className={`three-quarter-spinner ${variant}`}>
        </div>
    </div>
);

export default Loading;
