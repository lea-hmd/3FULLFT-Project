import React from 'react';
import './SelectableCard.css';
import { OrderContext } from '../../context/OrderContext';
import { cardStyle } from '../../components/styles/CardStyles';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';

export default function SelectableCardPain(props) {
  const { orderDispatch } = React.useContext(OrderContext);

  const afterClick = () => {
    orderDispatch({ type: 'choosePain', payload: props.title });
  };

  return (
    <Box component='div' sx={cardStyle} onClick={() => afterClick()}>
      <Grid item xs className='gridCard' key={props.id}>
        <div>
          <img
            src={process.env.PUBLIC_URL + '/img/' + props.title + '.png'}
            className='imgCard'
            alt={props.title}
          ></img>
          <h6>{props.title}</h6>
        </div>
      </Grid>
    </Box>
  );
}
