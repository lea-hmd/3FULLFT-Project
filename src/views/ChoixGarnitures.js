import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import { garnituresData } from '../data/garnitures';
import SelectableCardGarniture from '../components/selectableCard/SelectableCardGarniture.js';
import { useHistory } from 'react-router-dom';

import '../components/styles/card.css';
export default function ChoixGarnitures() {
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
          <button onClick={() => history.replace('/choix-sauces')}>
            VALIDER
          </button>
        </Grid>
      </Box>
    </>
  );
}
