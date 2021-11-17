import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';

// Utils
import { useContext } from '../utils/context';

// Component
import Report from './report';

const Input = styled("input")({
    background: "#fff",
    border: 0,
    outline: 0,
    width: 64,
    height: 38,
    fontSize: 22,
    textAlign: "center"
});

const Btn = styled(Button)({
    fontSize: 22,
    padding: 0,
    marginTop: -4
});


const Started = () => {
    const { amount, setAmount, StartQuestion, historyQuestions } = useContext();

    const changeAmount = (value) => {
        if (value === "") value = 0;
        if (value < 0) value = 0;
        if (isNaN(value)) value = 0;
        setAmount(parseInt(value));
    }

    const handleIncrementAmount = (n) => () => {
        changeAmount(amount + n);
    }
    return (
        <>
            <Box>
                <Tooltip title="Decrementar -1"><Btn onClick={handleIncrementAmount(-1)} variant="contained">-</Btn></Tooltip>
                <Input min="0" onChange={(e) => changeAmount(e.target.value)} value={amount} maxLength="2" />
                <Tooltip title="Incrementar +1"><Btn onClick={handleIncrementAmount(1)} variant="contained">+</Btn></Tooltip>
            </Box>
            <Tooltip title="Começar Questionário">
                <Button sx={{ marginTop: 3 }} color="secondary" onClick={StartQuestion} variant="contained">Começar</Button>
            </Tooltip>
            {historyQuestions && <><Divider sx={{ margin: "2em 0" }} /><Report /></>}
        </>
    )
}

Started.propTypes = {}

export default Started;