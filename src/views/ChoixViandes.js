import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import { viandesData } from '../data/viandes';
import SelectableCardViande from '../components/selectableCard/SelectableCardViande.js';
import { useHistory } from 'react-router-dom';

import '../components/styles/card.css';
export default function ChoixViandes() {
  const viandes = viandesData;
  let history = useHistory();
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
          <button onClick={() => history.replace('/choix-garnitures')}>
            Valider
          </button>
        </Grid>
      </Box>
    </>
  );
}
