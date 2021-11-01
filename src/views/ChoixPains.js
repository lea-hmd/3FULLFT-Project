import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import { painsData } from '../data/pains';
import SelectableCardPain from '../components/selectableCard/SelectableCardPain';
import { useHistory } from 'react-router-dom';

import '../components/styles/card.css';
export default function ChoixPains() {
  const pains = painsData;
  let history = useHistory();
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
          <button onClick={() => history.replace('/choix-viandes')}>
            Valider
          </button>
        </Grid>
      </Box>
    </>
  );
}
