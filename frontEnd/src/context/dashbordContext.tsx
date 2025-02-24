import { createContext, useContext, useState, ReactNode } from "react";

interface DashbordContextProps {
    correctAnswerEnem : number,
    correctAnswerGrammar : number,
    wrongAnswerEnem: number,
    wrongAnswerGrammar: number,
    setCorrectAnswerEnem : (value:number) => void,
    setCorrectAnswerGrammar : (value:number) => void,
    setWrongAnswerEnem : (value:number) => void;
    setWrongAnswerGrammar : (value:number) => void;
    totalQuestions: number, 
    setTotalQuestions: (value:number) => void;
}

export const DashbordContext = createContext<DashbordContextProps | undefined>(undefined);

export const DashbordProvider = ({children}: {children: ReactNode}) =>{

    const [correctAnswerEnem, setCorrectAnswerEnem] = useState(0);
    const [correctAnswerGrammar, setCorrectAnswerGrammar] = useState(0);
    const [wrongAnswerEnem, setWrongAnswerEnem] = useState(0);
    const [wrongAnswerGrammar, setWrongAnswerGrammar] = useState(0);
    const [totalQuestions, setTotalQuestions] = useState(0);

    return(
        <DashbordContext.Provider value={{correctAnswerEnem, correctAnswerGrammar, wrongAnswerEnem, wrongAnswerGrammar, setCorrectAnswerEnem, setCorrectAnswerGrammar, setWrongAnswerEnem, setWrongAnswerGrammar, setTotalQuestions, totalQuestions}}>
            {children}
        </DashbordContext.Provider>
    )
}

export const useDashbord = () =>{
    const context = useContext(DashbordContext);
    if(!context){
        throw new Error(" useDashbord não está sendo usado dentro do DashbordProvider")
    }
    return context;
}

