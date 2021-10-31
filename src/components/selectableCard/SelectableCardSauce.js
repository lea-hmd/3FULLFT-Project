import React from "react"
import "./SelectableCard.css"
import { OrderContext } from "../../context/OrderContext"
import { cardStyle, selectedCardStyle } from '../../components/styles/CardStyles';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';




export default function SelectableCardGarniture(props) {
    const [IsSelected, setIsSelected] = React.useState(false);
    const { orderState, orderDispatch } = React.useContext(OrderContext)

    const afterClick = () => {
        
        if (orderState.order.sauces.length < 2 || IsSelected){
        IsSelected ? 
        orderDispatch({ type: "removeSauce", payload: props.title }) :
        orderDispatch({type: "chooseSauces", payload: props.title })
        setIsSelected(!IsSelected)
        }
    }

    return (
        <Box component='div' sx={cardStyle} onClick={afterClick}>
            <Grid
                item
                xs
                style={{ alignItems: 'center', justifyContent: 'center' }}
                key={props.id}
            >
                <div>
                    <img>
                    </img>
                    <h6>
                        {props.title}
                    </h6>
                </div>

            </Grid>
        </Box>

    )
}