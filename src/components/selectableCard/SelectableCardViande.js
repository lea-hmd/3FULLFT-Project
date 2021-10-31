import React from "react"
import "./SelectableCard.css"
import { OrderContext } from "../../context/OrderContext"
import { cardStyle, selectedCardStyle } from '../../components/styles/CardStyles';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import { useHistory } from "react-router-dom";

export default function SelectableCardViande(props) {
    const { orderState, orderDispatch } = React.useContext(OrderContext)
    let history = useHistory();
    const afterClick = () => {
        orderDispatch({ type: "chooseViande", payload: props.title })
        history.replace('/choix-garnitures')
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