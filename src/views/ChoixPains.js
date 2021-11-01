import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import { painsData } from '../data/pains';
import SelectableCardPain from '../components/selectableCard/SelectableCardPain';

export default function ChoixPains() {
  const pains = painsData;

  return (
    <>
      <div className='viewTitle'>
        <h2>Pain maison ou tortilla ?</h2>
      </div>

      <Box component='div'>
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
    </>
  );
}
