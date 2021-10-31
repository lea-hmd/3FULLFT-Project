import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import { CustomCard } from '../components/customCard/CustomCard.js';
import { garnituresData } from '../data/garnitures';
import { cardStyle, selectedCardStyle } from '../components/styles/CardStyles';
import SelectableCardGarniture from '../components/selectableCard/SelectableCardGarniture.js';
import { useHistory } from "react-router-dom";

export default function ChoixGarnitures() {
  const garnitures = garnituresData;
  let history = useHistory();
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
          {garnitures.map(({ _id: id, imgName, title }) => (
            <SelectableCardGarniture imgName={imgName} _id={id} title={title}>
              
            </SelectableCardGarniture>
          ))}
        </Grid>
        <button onClick={(() => history.replace("/choix-sauces"))}>VALIDER</button>
      </Box>
    </>
  );
}
