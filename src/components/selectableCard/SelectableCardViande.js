import React from 'react';
import './SelectableCard.css';
import { OrderContext } from '../../context/OrderContext';
import { cardStyle } from '../../components/styles/CardStyles';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import { useHistory } from 'react-router-dom';

export default function SelectableCardViande(props) {
  const { orderDispatch } = React.useContext(OrderContext);
  let history = useHistory();
  const afterClick = () => {
    orderDispatch({ type: 'chooseViande', payload: props.title });
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
