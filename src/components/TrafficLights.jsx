import { useEffect, useState } from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router';
import { Green } from './Green';
import { Red } from './Red';
import { Timer } from './Timer';
import s from './TrafficLights.module.scss';
import { Yellow } from './Yellow';

const TrafficLights = (props) => {
    const [color, setColor] = useState(props.location.pathname.slice(1))
    const [time, setTime] = useState(0)
    const [colorNum, setColorNum] = useState(0)
    const timeoutColor = [
        {
            color: 'red',
            time: 10000
        },
        {
            color: 'yellow',
            time: 3000
        },
        {
            color: 'green',
            time: 15000
        },
        {
            color: 'yellow',
            time: 3000
        }]
    useEffect(() => {
        const { color, time } = timeoutColor[colorNum];
        const timer = setTimeout(() => {
            setColorNum(() => ((colorNum + 1) % 4));
            setColor(() => color);
            setTime(() => time)
        }, time)
        return () => clearTimeout(timer);
    }, [colorNum])
    return (
        <div className={s.wrapperTL}>
            <div className={s.trafficLights}>
                {color && <Redirect to={`/${color}`} />}
                <div className={s.trafficColor + ' ' + s.offRed}>
                    <Route path='/red' component={Red} />
                </div>
                <div className={s.trafficColor + ' ' + s.offYellow}>
                    <Route path='/yellow' component={Yellow} />
                </div>
                <div className={s.trafficColor + ' ' + s.offGreen}>
                    <Route path='/green' component={Green} />
                </div>
            </div>
            <Timer time={time} />
        </div>
    )
}

export const TrafficLightsContainer = withRouter(TrafficLights)