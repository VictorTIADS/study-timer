import React, { useState } from "react";
import { ITask } from "../../types/ITask";
import Button from '../Button'
import style from "./Form.module.scss"
import { v4 as uuidv4 } from "uuid";

interface Props {
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}

export default function Form({ setTasks }: Props) {
    const [name, setName] = useState("");
    const [time, setTime] = useState("00:00");
    function addTask(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault()
        setTasks(previousTask => [
            ...previousTask,
            {
                name,
                time,
                isSelected: false,
                isFinished: false,
                id: uuidv4()
            }
        ])
        setName("");
        setTime("");
    }
    return (
        <form className={style.novaTarefa} onSubmit={addTask}>
            <div className={style.inputContainer}>
                <label htmlFor="task">
                    Adicione um novo estudo
                </label>
                <input
                    type="text"
                    name="Tarefa"
                    id="task"
                    value={name}
                    onChange={event => setName(event.target.value)}
                    placeholder="O que você quer estudar"
                    required />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="time">
                    Tempo
                </label>
                <input
                    type="time"
                    step="1"
                    name="tempo"
                    value={time}
                    onChange={
                        event => setTime(event.target.value)}
                    id="time"
                    min="00:00:00"
                    max="01:30:00"
                    required />
                <Button type="submit">
                    Adicionar
                </Button>
            </div>
        </form>
    )
}