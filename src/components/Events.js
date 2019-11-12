import React, { useContext } from 'react'
import Event from './Event'
import AppContext from '../contexts/AppContext'

const Events = () => {
    const { state } = useContext(AppContext)

    return (
        <>
            <h4>イベント一覧</h4>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Body</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    {state.events.map((event, index) => (<Event key={index} event={event} />))}
                </tbody>
            </table>
        </>
    )
}

export default Events;