import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import { CustomCard } from '../components/customCard/CustomCard.tsx';
import { saucesData } from '../data/sauces';
import { cardStyle, selectedCardStyle } from '../components/styles/CardStyles';

export default function ChoixSauces() {
  const sauces = saucesData;

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
          {sauces.map(({ _id: id, imgName, title }) => (
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
