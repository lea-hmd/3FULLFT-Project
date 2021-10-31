import React from "react"
import "./SelectableCard.css"
import { OrderContext } from "../../context/OrderContext"
import { cardStyle} from '../../components/styles/CardStyles';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import { useHistory } from "react-router-dom";

export default function SelectableCardPain(props) {
    const {orderDispatch } = React.useContext(OrderContext)
    let history = useHistory();

    const afterClick = () => {
        orderDispatch({ type: "choosePain", payload: props.title })
        history.replace('/choix-viandes')
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
                    <img src={process.env.PUBLIC_URL + '/img/' + props.imgName + '.png' } style = {{width: '70%', height: '70%', marginTop: '15px'}}>
                    </img>
                    <h6>
                        {props.title}
                    </h6>
                </div>

            </Grid>
        </Box>

    )
}