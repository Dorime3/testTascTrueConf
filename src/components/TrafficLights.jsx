import { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { Green } from './Green';
import { Red } from './Red';
import s from './TrafficLights.module.scss';
import { Yellow } from './Yellow';

export const TrafficLights = (props) => {


    return (
        <div className={s.wrapperTL}>
            <div className={s.trafficLights}>
                {props.color && <Redirect to={`/${props.color}`} />}
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