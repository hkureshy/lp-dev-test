import React from 'react';
import { BorderRadius, Colors } from '../../config/styles';

const Card = ({
    children,
    classOverrides,
    key,
    cardWidth
}) => (
  <div className={classOverrides}
    key={key}
    style={{ backgroundColor: Colors.whiteSmoke, borderRadius: BorderRadius.small.all, width: cardWidth, boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', padding: '15px' }}>
    {children}
  </div>
);

export default Card;
