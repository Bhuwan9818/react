import React, { useContext } from 'react'
import { Context } from './Context'
import style from './ConsumerApp.module.css'

function ConsumerApp() {
    const providerValue = useContext(Context)
    const contextName = providerValue.name;
    const contextAge = providerValue.age;
    const contextIq = providerValue.IQ;
    const contextCountry = providerValue.country;
    return (
        <div className={style.container}>
            <div className={style.consumer}>
                <h1> my name is {contextName}</h1>
                <h1>my age is {contextAge}</h1>
                <h1>my IQ is {contextIq}</h1>
                <h1>my love {contextCountry}</h1>
            </div>
        </div>
    )
}

export default ConsumerApp