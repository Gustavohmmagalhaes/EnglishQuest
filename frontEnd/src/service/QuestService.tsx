import axios from 'axios';

const baseURL = 'http://localhost:3000';

export async function fetchQuestionsEnem() {
    try{
        const response = await axios.get(`${baseURL}/questions`);  // tenho que criar outra função dessa para a api de gramatica
        return response.data;
    }catch(error){
        console.error('Erro ao buscar as questões:', error);
    }
}

export async function fetchQuestionGrammar() {
    try{
        const response = await axios.get(`${baseURL}/questionsGrammar`);
        return response.data;
    }catch(error){
        console.error('Erro ao buscar as questões:', error);
    }
}