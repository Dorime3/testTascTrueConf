import s from './Timer.module.scss'

export const Timer = (props) => {

    return (
        <div className={s.timer}>
            Timer: {props.sec} sec
        </div>
    )
}