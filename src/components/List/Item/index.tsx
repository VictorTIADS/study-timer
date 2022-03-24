import style from "./Item.module.scss"
import { ITask } from "../../../types/ITask";

interface Props extends ITask {
    selectTask: (selectedTask: ITask) => void
}

export default function Item(
    { name,
        time,
        isSelected,
        isFinished,
        id,
        selectTask
    }: Props) {
    return (
        <li className={
            `${style.item} 
            ${isSelected ? style.itemSelecionado : ''} 
            ${isFinished ? style.itemConcluido : ''}`}
            onClick={() => !isFinished && selectTask({
                id,
                time,
                name,
                isSelected,
                isFinished
            })}>
            <h3>
                {name}
            </h3>
            <span>
                {time}
            </span>
        </li>
    )
}