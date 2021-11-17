import List from '@mui/material/List';
import { useContext } from "../utils/context";

import Options from "./options";

const Report = () => {
    const { historyQuestions } = useContext();

    let correct_answer = 0,incorrect_answer = 0;

    historyQuestions.forEach((question) => {
        if(question.selected == question.correct_answer) correct_answer += 1;
        else incorrect_answer += 1;
    })
    return (
        <>
            <h2>Relatório do Questionário Anterior</h2>
            <p><b>Questões Corretas</b> {correct_answer}</p>
            <p><b>Questões Incorretas</b> {incorrect_answer}</p>
            {historyQuestions.map((question) => (
                <Options question={question} selected={question.selected} review={true} />
            ))}
        </>
    );
}

export default Report;