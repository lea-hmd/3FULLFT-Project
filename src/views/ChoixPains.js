import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import { painsData } from '../data/pains';
import SelectableCardPain from '../components/selectableCard/SelectableCardPain';
import { useHistory } from 'react-router-dom';
import { OrderContext } from '../context/OrderContext';
import React from 'react';
import '../components/styles/card.css';
export default function ChoixPains() {
  const pains = painsData;
  let history = useHistory();
  const { orderState } = React.useContext(OrderContext);

  return (
    <>
      <div className='viewTitle'>
        <h2>Pain maison ou tortilla ?</h2>
      </div>

      <Box component='div' className='container'>
        <Grid
          container
          justifyContent='center'
          spacing={0}
          direction='row'
          alignItems='center'
        >
          {pains.map(({ _id: id, title }) => (
            <SelectableCardPain _id={id} title={title}></SelectableCardPain>
          ))}
        </Grid>
      </Box>
      <div className='btnContainer'>
        <button
          className={orderState.theme === 'light' ? 'button' : 'buttonD'}
          onClick={() => history.replace('/choix-viandes')}
        >
          Valider
        </button>
      </div>
    </>
  );
}
