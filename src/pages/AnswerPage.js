import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {useForm} from "react-hook-form";

export default function AnswerPage(props) {

    const {register, handleSubmit, errors} = useForm();

    const registerSubmit = (values) => {
        localStorage.setItem("name", values.name);
        localStorage.setItem("class", values.class);
        localStorage.setItem("start", "");
        console.log(values);
        props.onEnter(values.name, values.class, "");
    }

    return (
        <div className="h-100 bg-peach">
            <Header class={props.class}/>
            <div className="bg-peach p-4">
                <form className="my-form" onSubmit={handleSubmit(registerSubmit)}>
                    <div>
                        <label>Пароль:</label>
                        <input name="ans" ref={register({required: true, maxLength: 128})}/>
                        <div className="error">
                            {errors.name && errors.name.type === "required" && (<p>Введите название ответ!</p>)}
                            {errors.name && errors.name.type === "maxLength" && (
                                <p>Ответ не должен превышать 128 символов!</p>)}
                        </div>
                    </div>
                    <div className="mt-3">
                        <div>
                            <button type="submit" className="bg-purple w-100">ОТПРАВИТЬ</button>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
}