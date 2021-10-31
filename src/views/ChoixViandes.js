import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import { CustomCard } from '../components/customCard/CustomCard.js';
import { viandesData } from '../data/viandes';
import { cardStyle, selectedCardStyle } from '../components/styles/CardStyles';
import SelectableCardViande from '../components/selectableCard/SelectableCardViande.js';

export default function ChoixViandes() {
  const viandes = viandesData;

  return (
    <>
      <div className='viewTitle'>
        <h2>Plutôt viande ou tofu ?</h2>
      </div>
      <Box component='div'>
        <Grid
          container
          justifyContent='center'
          spacing={0}
          direction='row'
          alignItems='center'
        >
          {viandes.map(({ _id: id, imgName, title }) => (
            <SelectableCardViande imgName={imgName} _id={id} title={title}>
              
            </SelectableCardViande>
          ))}
        </Grid>
      </Box>
    </>
  );
}
