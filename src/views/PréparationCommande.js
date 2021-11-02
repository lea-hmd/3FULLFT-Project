import React from 'react';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';
export default function PréparationCommande() {
  return (
    <>
      <div className='viewTitle'>
        <h2>Votre commande est en cours de préparation ...</h2>
      </div>
      <Box component='div'>
        <Grid
          container
          justifyContent='center'
          spacing={0}
          direction='row'
          alignItems='center'
        >
          <div className='divSpinner'>
            <img
              src={process.env.PUBLIC_URL + '/img/viande.png'}
              alt='broche'
              className='imgSpinner'
            />
          </div>
        </Grid>
      </Box>
    </>
  );
}
