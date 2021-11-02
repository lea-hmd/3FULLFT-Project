import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import { saucesData } from '../data/sauces';
import SelectableCardSauce from '../components/selectableCard/SelectableCardSauce';
import { useHistory } from 'react-router-dom';
import React from 'react';
import '../components/styles/card.css';
import { OrderContext } from '../context/OrderContext';

export default function ChoixSauces() {
  const { orderDispatch } = React.useContext(OrderContext);
  const sauces = saucesData;
  let history = useHistory();
  const commande = () => {
    history.replace('/commande');
  };
  const resetOrder = () => {
    orderDispatch({ type: 'resetOrder' });
    history.replace('/choix-pains');
    window.location.reload();
  };
  return (
    <>
      <div className='viewTitle'>
        <h2>Quelques sauces ?</h2>
      </div>

      <Box component='div' className='container'>
        <Grid
          container
          justifyContent='center'
          spacing={0}
          direction='row'
          alignItems='center'
        >
          {sauces.map(({ _id: id, title }) => (
            <SelectableCardSauce _id={id} title={title}></SelectableCardSauce>
          ))}
        </Grid>
      </Box>
      <div className='btnContainer'>
        <button onClick={() => resetOrder()} className='button'>
          Annuler
        </button>{' '}
        <button className='button' onClick={commande}>
          Afficher la commande
        </button>
      </div>
    </>
  );
}
