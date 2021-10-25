import { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { Green } from './Green';
import { Red } from './Red';
import s from './TrafficLights.module.scss';
import { Yellow } from './Yellow';

export const TrafficLights = (props) => {
    const [colorNum, setColorNum] = useState(0)
    const [color, setColor] = useState('red')
    const timeoutColor = [
        {
            color: 'red',
            time: 3000
        },
        {
            color: 'yellow',
            time: 10000
        },
        {
            color: 'green',
            time: 3000
        },
        {
            color: 'yellow',
            time: 15000
        }]
    useEffect(() => {
        const { color, time } = timeoutColor[colorNum];
        const timer = setTimeout(() => {
            setColorNum((colorNum + 1) % 4);
            setColor(() => color);
        }, time)
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
        </div>
    )
}