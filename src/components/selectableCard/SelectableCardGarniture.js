import React from 'react';
import './SelectableCard.css';
import { OrderContext } from '../../context/OrderContext';
import {
  cardStyle,
  selectedCardStyle,
} from '../../components/styles/CardStyles';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';

export default function SelectableCardGarniture(props) {
  const [IsSelected, setIsSelected] = React.useState(false);
  const { orderDispatch } = React.useContext(OrderContext);

  const afterClick = () => {
    IsSelected
      ? orderDispatch({ type: 'removeGarniture', payload: props.title })
      : orderDispatch({ type: 'chooseGarnitures', payload: props.title });
    setIsSelected(!IsSelected);
  };

  return (
    <Box
      component='div'
      sx={IsSelected ? selectedCardStyle : cardStyle}
      onClick={() => afterClick()}
    >
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
