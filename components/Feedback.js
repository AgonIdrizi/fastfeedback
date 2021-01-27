import React from 'react';
import { format, parseISO } from 'date-fns';

const Feedback = ({ author, text, createdAt }) => (
  <div className="rounded mt-10 max-h-40">
    <h3 className="m-0 text-sm text-primary font-medium">{author}</h3>
    <p className="text-ternary text-xs font-light">
      {format(parseISO(createdAt), 'PPpp')}
    </p>
    <p className="text-ternary text-sm mt-3 mb-3 font-medium">{text}</p>
  </div>
);

export default Feedback;
