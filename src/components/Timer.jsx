import s from './Timer.module.scss'

export const Timer = (props) => {
    return (
        <div className={s.timer}>
            Timer: {props.time / 1000} sec
        </div>
    )
}