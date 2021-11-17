import { useState } from 'react';
import Button from '@mui/material/Button';

// Utils
import { useContext } from '../utils/context';

// Component
import Options from './options';

const Form = () => {
    const { question, selectedQuestion, handleCancel } = useContext();

    const [selected, setSelected] = useState("");
    const handleToggle = (value) => () => {
        setSelected(value);
    };

    const handleNext = () => {
        if (selected !== "") {
            selectedQuestion(question.id, selected);
        }
    }

    return (
        <>
            <Options question={question}  selected={selected} handleToggle={handleToggle} />
            <Button color="secondary" disabled={selected === ""} onClick={handleNext} variant="contained" sx={{ marginTop: 3 }} >Continuar</Button>

            <Button color="error" variant="contained" onClick={handleCancel} sx={{ margin: "3em auto", display: "block" }} >Cancelar</Button>
        </>
    );

}

Form.propTypes = {}

export default Form;