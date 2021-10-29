import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import { CustomCard } from '../components/customCard/CustomCard';
import { saucesData } from '../data/sauces';

export default function ChoixSauces() {
  const sauces = saucesData;
  return (
    <>
      <Box component="div">
        <Grid
          container
          justifyContent="center"
          spacing={0}
          direction="row"
          alignItems="center"
        >
          {sauces.map(({ _id: id, imgName, title }) => (
            <Box
              component="div"
              sx={{
                margin: '1%',
                textAlign: 'center',
                width: '180px',
                height: '180px',
                border: '5px solid',
                display: 'flex',
                borderRadius: '15px',
                flexDirection: 'column',
              }}
            >
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
