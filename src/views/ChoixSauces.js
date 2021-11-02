import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import SelectableCardSauce from '../components/selectableCard/SelectableCardSauce';
import { useHistory } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import '../components/styles/card.css';
import { OrderContext } from '../context/OrderContext';
import { buttons } from '../data/sauces';
import { getSauce, filterSauce } from '../services/services';

export default function ChoixSauces() {
  const { orderDispatch } = React.useContext(OrderContext);
  let history = useHistory();
  const commande = () => {
    history.replace('/commande');
  };
  const resetOrder = () => {
    orderDispatch({ type: 'resetOrder' });
    history.replace('/choix-pains');
    window.location.reload();
  };

  const [filtredSauce, setFiltredSauce] = useState(null);
  useEffect(() => {
    setFiltredSauce(getSauce());
  }, []);

  function handleSauce(e) {
    let typeSauce = e.target.value;
    typeSauce !== 'all'
      ? setFiltredSauce(filterSauce(typeSauce))
      : setFiltredSauce(getSauce());
  }

  return (
    <>
      <div className='viewTitle'>
        <h2>Quelques sauces ?</h2>
      </div>

      <Box component='div' className='container'>
        <Grid
          container
          justifyContent='center'
          spacing={0}
          direction='row'
          alignItems='center'
        >
          {filtredSauce &&
            filtredSauce.map(({ _id: id, title }) => (
              <SelectableCardSauce _id={id} title={title}></SelectableCardSauce>
            ))}
        </Grid>
      </Box>
      <div className='btnContainer'>
        {buttons &&
          buttons.map((type) => (
            <>
              <button
                className='button'
                value={type.value}
                onClick={handleSauce}
              >
                {type.name}
              </button>
            </>
          ))}
        <button onClick={() => resetOrder()} className='button'>
          Annuler
        </button>{' '}
        <button className='button' onClick={commande}>
          Afficher la commande
        </button>
      </div>
    </>
  );
}
