import React, {useEffect, useState} from "react";
import {API} from 'aws-amplify';
import {listTodos} from "../graphql/queries";
import {createTodo} from "../graphql/mutations";
import SimpleRouter from "./SimpleRouter";

const initialFormState = {command: '', cl: '', answer: '', time: 0, correct: false}

export default function DBConnection(props) {
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        fetchAnswers();
    }, []);

    async function fetchAnswers() {
        const apiData = await API.graphql({query: listTodos});
        setAnswers(apiData.data.listTodos.items);
    }

    async function createAnswer(command, cl, answer, time, correct) {
        if (command === null || cl === null || answer === null || time === null || correct === null) {
            return
        }
        let newAnswer = {
            'command': command,
            'cl': cl,
            'answer': answer,
            'time': time,
            'correct': correct
        }
        await API.graphql({query: createTodo, variables: {input: newAnswer}});
        setAnswers([...answer, newAnswer]);
    }

    const handleSend = (command, cl, answer, time, correct) => {
        createAnswer(command, cl, answer, time, correct).then(r => {
            console.log("Answer" + answer + "sent")
        });
    }

    return (
            <SimpleRouter onSendAnswer={handleSend}/>
    );
}