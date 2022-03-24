import React from "react";
import style from "./Clock.module.scss"

interface Props {
    time: number | undefined
}

export function Clock({ time = 0 }: Props) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const [minuteDez, minuteUni] = String(minutes).padStart(2, "0");
    const [secondDez, secondUni] = String(seconds).padStart(2, "0");
    return (
        <React.Fragment>
            <span className={style.relogioNumero}>{minuteDez}</span>
            <span className={style.relogioNumero}>{minuteUni}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{secondDez}</span>
            <span className={style.relogioNumero}>{secondUni}</span>
        </React.Fragment>
    )
}