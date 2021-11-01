import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import { saucesData } from '../data/sauces';
import SelectableCardSauce from '../components/selectableCard/SelectableCardSauce';
import { useHistory } from 'react-router-dom';
import React from 'react';

export default function ChoixSauces() {
  const sauces = saucesData;
  let history = useHistory();
  const commande = () => {
    history.replace('/commande');
  };
  return (
    <>
      <div className='viewTitle'>
        <h2>Quelques sauces ?</h2>
      </div>

      <Box component='div'>
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
          <button onClick={commande}>Afficher la commande</button>
        </Grid>
      </Box>
    </>
  );
}
