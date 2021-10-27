import { useEffect, useState } from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router';
import { Green } from './Green';
import { Red } from './Red';
import { Timer } from './Timer';
import s from './TrafficLights.module.scss';
import { Yellow } from './Yellow';

const TrafficLights = (props) => {
    const [color, setColor] = useState(props.location.pathname.slice(1))
    const [sec, setSec] = useState(0)
    const [index, setIndex] = useState(0)
    const duration = [10000, 3000, 15000, 3000];
    const colors = ['red', 'yellow', 'green', 'yellow'];

    useEffect(() => {
        const timer = setTimeout(() => {
            setColor(() => colors[index]);

            setSec(() => duration[index])
            setIndex(() => ((index + 1) % 4));
        }, sec);
        if ((sec < 3000) && (colors[index] === 'yellow')) {
            if (sec % 1000) {
                setColor(() => null);
            } else {
                setColor(() => colors[index - 1])
            }
        }
        return () => clearTimeout(timer);
    }, [index, sec])
    useEffect(() => {
        const timer = setTimeout(() => setSec(sec - 500), 500);
        console.log(sec)
        return () => {
            clearTimeout(timer);
        };
    }, [sec]);
    return (
        <div className={s.wrapperTL}>
            <div className={s.trafficLights}>
                {color
                    ? <Redirect to={`/${color}`} />
                    : <Redirect to='' />}
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
            <Timer sec={Math.round(sec / 1000)} />
        </div>
    )
}

export const TrafficLightsContainer = withRouter(TrafficLights)