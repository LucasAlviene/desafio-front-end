import { useMemo, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Form from './components/form';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

// Layout
import Header from './layout/header';
import Footer from './layout/footer';

// Components
import Started from './components/started';
import { Context } from './utils/context'; // Component <Context.Provider>

// Utils
import { getQuestions } from './utils/api';
import sleep from './utils/sleep';

const App = () => {
  const [loading, setLoading] = useState(false); // Loading
  const [currentQuestion, setCurrentQuestion] = useState(null); // Id da questão atual
  const [listQuestions, setListQuestions] = useState([]); // Lista de questões
  const [historyQuestions, setHistoryQuestions] = useState(JSON.parse(localStorage.getItem("history_questions")) ?? null);// Historico do último questionário
  const [amount, setAmount] = useState(0); // Quantidade


  // Organiza as questões e randomiza as opções
  const OrganizeQuestions = ({ question, incorrect_answers, correct_answer }, key) => {
    const options = [...incorrect_answers, ...[correct_answer]].sort(() => Math.random() - 0.5);
    return { id: key, question, options, selected: "", correct_answer };
  }

  // Começa o questionário
  const StartQuestion = async () => {
    if (amount > 0) {
      setLoading(true);
      try {
        const questions = await getQuestions(amount);
        setListQuestions(questions.map(OrganizeQuestions));
        setCurrentQuestion(0);
      } catch (e) {
        alert(e.message);
      }
      setLoading(false);
    }
  }

  // Seleciona uma questão e avança para outra, se chegar no final, finaliza o questionário.
  const selectedQuestion = async (id, selected) => {
    setListQuestions((old) => {
      old[id].selected = selected;
      return old;
    });

    /* --- */
    setLoading(true);
    await sleep(2); // Simula um delay de 2 segundos
    setLoading(false);
    /* --- */

    setCurrentQuestion((old) => {
      if (old === amount - 1) { // Se chegar no final, finaliza e armazena as questões
        setHistoryQuestions(listQuestions);
        localStorage.setItem("history_questions", JSON.stringify(listQuestions));
        return null;
      }
      return old + 1;
    });
  }

  // Cancela o questionário
  const handleCancel = () => {
    setListQuestions([]);
    setCurrentQuestion(null);
  }

  // Pega a questão atual
  const question = useMemo(() => listQuestions[currentQuestion], [listQuestions, currentQuestion]);

  return (
    <Context.Provider value={{ amount, setAmount, StartQuestion, question, selectedQuestion, listQuestions, historyQuestions, handleCancel, currentQuestion }}>
      <CssBaseline />
      <div style={{ textAlign: "center" }}>
        <Header />
        <div style={{marginBottom: 50}}>
          {currentQuestion === null ? <Started /> : <Form />}
          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        </div>
        <Footer />
      </div>
    </Context.Provider>
  );
}

export default App;
