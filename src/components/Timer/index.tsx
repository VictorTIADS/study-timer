import { useEffect, useState } from "react";
import { timeToSeconds } from "../../common/utils/time";
import { ITask } from "../../types/ITask";
import Button from "../Button";
import { Clock } from "./Clock";
import style from "./Timer.module.scss"

interface Props {
    selected: ITask | undefined,
    onFinished: () => void
}

export function Timer({ selected, onFinished }: Props) {
    const [time, setTime] = useState<number>();

    useEffect(() => {
        if (selected?.time) {
            setTime(timeToSeconds(selected.time));
        }
    }, [selected])

    function startTime(count: number = 0) {
        setTimeout(() => {
            if (count > 0) {
                setTime(count - 1)
                return startTime(count - 1)
            }
            onFinished();
        }, 1000)
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>
                Escolha um card e inicie o cronômetro
            </p>
            <div className={style.relogioWrapper}>
                <Clock time={time} />
            </div>
            <Button onClick={() => startTime(time)}>
                Começar
            </Button>
        </div>
    )
}