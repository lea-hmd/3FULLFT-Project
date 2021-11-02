import { Box } from '@mui/system';
import React from 'react';
import { Grid } from '@mui/material';
import { viandesData } from '../data/viandes';
import SelectableCardViande from '../components/selectableCard/SelectableCardViande.js';
import { useHistory } from 'react-router-dom';

import '../components/styles/card.css';
import { OrderContext } from '../context/OrderContext';
export default function ChoixViandes() {
  const { orderDispatch } = React.useContext(OrderContext);
  const viandes = viandesData;
  let history = useHistory();
  const resetOrder = () => {
    orderDispatch({ type: 'resetOrder' });
    history.replace('/choix-pains');
    window.location.reload();
  };
  return (
    <>
      <div className='viewTitle'>
        <h2>Plutôt viande ou tofu ?</h2>
      </div>
      <Box component='div' className='container'>
        <Grid
          container
          justifyContent='center'
          spacing={0}
          direction='row'
          alignItems='center'
        >
          {viandes.map(({ _id: id, title }) => (
            <SelectableCardViande _id={id} title={title}></SelectableCardViande>
          ))}
        </Grid>
      </Box>
      <div className='btnContainer'>
        <button onClick={() => resetOrder()} className='button'>
          Annuler
        </button>{' '}
        <button
          className='button'
          onClick={() => history.replace('/choix-garnitures')}
        >
          Valider
        </button>
      </div>
    </>
  );
}
