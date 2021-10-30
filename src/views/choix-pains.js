import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import { CustomCard } from '../components/customCard/CustomCard.tsx';
import { painsData } from '../data/pains';
import { cardStyle, selectedCardStyle } from '../components/styles/CardStyles';

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
          {pains.map(({ _id: id, imgName, title }) => (
            <Box component='div' sx={cardStyle}>
              <Grid
                item
                xs
                style={{ alignItems: 'center', justifyContent: 'center' }}
                key={id}
              >
                <CustomCard imgName={imgName} _id={id} title={title} />
              </Grid>
            </Box>
          ))}
        </Grid>
      </Box>
    </>
  );
}
