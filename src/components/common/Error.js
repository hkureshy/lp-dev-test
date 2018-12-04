import React from 'react';

const Error = ({
  children
}) => (
  <p style={{ border: '1px solid #db0000', height: '35px', lineHeight: '2', background: 'ff8080', borderRadius: '3px', color: '#db0000' }}>
    {children}
  </p>
);

export default Error;
