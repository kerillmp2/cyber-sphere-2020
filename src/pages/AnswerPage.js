import React, {useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {useForm} from "react-hook-form";

export default function AnswerPage(props) {

    const [isCorrect, setIsCorrect] = useState('null');

    const {register, handleSubmit, errors} = useForm();

    const checkPassword = (password) => {
        let userAnswer = password;
        let correctAnswer = "kekw";

        switch (props.class) {
            case '1': {
                correctAnswer = "";
                break;
            }
            case '2': {
                correctAnswer = "";
                break;
            }
            case '3': {
                correctAnswer = "";
                break;
            }
            case '4': {
                correctAnswer = "";
                break;
            }
            case '5': {
                correctAnswer = "kekw";
                break;
            }
            case '6': {
                correctAnswer = "kekw";
                break;
            }
            default:
                correctAnswer = "kekw";
        }

        if (userAnswer === correctAnswer) {
            setIsCorrect('true');
            props.onSendAnswer(userAnswer, true);
        } else {
            setIsCorrect('false');
            props.onSendAnswer(userAnswer, false);
        }
    }

    const registerSubmit = (values) => {
        setIsCorrect('null');
        setTimeout(checkPassword, 500, values.ans);
    }


    if (isCorrect === 'true') {
        return (<div className="h-100 bg-peach">
            <Header class={props.class}/>
            <div className="bg-peach p-4 correct text-center mt-4">
                <h2>Поздравляем! Вы успешно справились с заданием!</h2>
                <h4 className="mt-3">Не забудьте выполнить вторую часть</h4>
            </div>
            <Footer/>
        </div>);
    } else {
        return (
            <div className="h-100 bg-peach">
                <Header class={props.class}/>
                <div className="bg-peach p-4">
                    <form className="my-form" onSubmit={handleSubmit(registerSubmit)}>
                        <div>
                            <label>Пароль:</label>
                            <input name="ans" ref={register({required: true, maxLength: 128})}/>
                            <div className="error">
                                {errors.ans && errors.ans.type === "required" && (<p>Введите ответ!</p>)}
                                {errors.ans && errors.ans.type === "maxLength" && (
                                    <p>Ответ не должен превышать 128 символов!</p>)}
                                {isCorrect === 'false' && <p>Неверный пароль! Попробуйте ещё раз!</p>}
                            </div>
                        </div>
                        <div className="mt-3">
                            <div>
                                <button type="submit" className="bg-purple w-100">ОТПРАВИТЬ</button>
                            </div>
                        </div>
                    </form>
                </div>
                <Footer/>
            </div>
        );
    }
}