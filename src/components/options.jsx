import PropTypes from 'prop-types';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';

const LIB = styled(ListItemButton)(({ theme }) => ({
    "&.question-correct": {
        backgroundColor: theme.palette.success.main,
        color: "#fff",
        "& .MuiCheckbox-root": {
            color: "#f1f1f1"
        }
    },
    "&.question-incorrect": {
        backgroundColor: theme.palette.error.main,
        color: "#fff",
        "& .MuiCheckbox-root": {
            color: "#f1f1f1"
        }
    }
}));

const Options = ({ question, handleToggle, selected, review = false }) => {
    return (
        <>
            <p><b>Questão {question.id+1}:</b> {question.question}</p>
            <List sx={{ width: '100%', maxWidth: 360, margin: "0 auto", bgcolor: 'background.paper' }}>
                {question.options.map((item, key) => (
                    <ListItem
                        key={key}
                        disablePadding
                    >
                        <LIB role={undefined} onClick={handleToggle && handleToggle(item)} dense className={review && (selected === item || item === question.correct_answer) && ((selected === question.correct_answer || item === question.correct_answer) ? "question-correct" : "question-incorrect")}>
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={selected === item || (review && item === question.correct_answer)}
                                    tabIndex={-1}
                                    disableRipple
                                />
                            </ListItemIcon>
                            <ListItemText primary={item} />
                        </LIB>
                    </ListItem>
                ))}
            </List>
        </>
    )
};


Options.propTypes = {
    question: PropTypes.object.isRequired,
    handleToggle: PropTypes.func, 
    selected: PropTypes.string, 
    review: PropTypes.bool
}
export default Options;