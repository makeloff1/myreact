import React from 'react'
import Event from './Event'

const Events = ({ state, dispatch }) => {

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
          {state.map((event, index) => (<Event key={index} event={event} dispatch={dispatch} />))}
        </tbody>
      </table>
    </>
  )
}

export default Events;