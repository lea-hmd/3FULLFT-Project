import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import { garnituresData } from '../data/garnitures';
import SelectableCardGarniture from '../components/selectableCard/SelectableCardGarniture.js';
import { useHistory } from 'react-router-dom';
import React from 'react';
import '../components/styles/card.css';
import { OrderContext } from '../context/OrderContext';

export default function ChoixGarnitures() {
  const { orderDispatch } = React.useContext(OrderContext);
  const resetOrder = () => {
    orderDispatch({ type: 'resetOrder' });
    history.replace('/choix-pains');
    window.location.reload();
  };
  const garnitures = garnituresData;
  let history = useHistory();
  return (
    <>
      <div className='viewTitle'>
        <h2>Garnitures ?</h2>
      </div>
      <Box component='div' className='container'>
        <Grid
          container
          justifyContent='center'
          spacing={0}
          direction='row'
          alignItems='center'
        >
          {garnitures.map(({ _id: id, title }) => (
            <SelectableCardGarniture
              _id={id}
              title={title}
            ></SelectableCardGarniture>
          ))}{' '}
        </Grid>
      </Box>
      <div className='btnContainer'>
        <button onClick={() => resetOrder()} className='button'>
          Annuler
        </button>{' '}
        <button
          className='button'
          onClick={() => history.replace('/choix-sauces')}
        >
          Valider
        </button>
      </div>
    </>
  );
}
