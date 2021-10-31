import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import { CustomCard } from '../components/customCard/CustomCard.js';
import { saucesData } from '../data/sauces';
import { cardStyle, selectedCardStyle } from '../components/styles/CardStyles';
import SelectableCardSauce from '../components/selectableCard/SelectableCardSauce'
import { useHistory } from "react-router-dom";
import { OrderContext } from "../context/OrderContext"
import React from 'react'

export default function ChoixSauces() {
  const { orderState, orderDispatch } = React.useContext(OrderContext)
  const sauces = saucesData;
  let history = useHistory();
  const addToCart = () => {
    history.replace("/choix-pains")
    orderDispatch({type: 'addOrderToCart'})
  }
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
            <SelectableCardSauce imgName={imgName} _id={id} title={title}>

            </SelectableCardSauce>
          ))}
        </Grid>
        <button onClick={addToCart}>VALIDER</button>
      </Box>
    </>
  );
}
