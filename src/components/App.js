import React, { useReducer, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Event from './Event'
import reducer from '../reducers/index'

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  const addEvent = e => {
    e.preventDefault()
    console.log("addEvent")
    console.log({ title, body })

    dispatch({
      type: 'CREATE_EVENT',
      title,
      body
    })

    setTitle('')
    setBody('')
  }

  const deleteAllEvents = e => {
    e.preventDefault()
    const result = window.confirm("本当にイベントを全削除しますか？")
    if (result) {
      dispatch({
        type: 'DELETE_ALL_EVENTS',
      })
    }
  }

  const unCreatable = title === '' || body === ''
  const unDeletable = state.length === 0

  return (
    <div className="container-fluid">
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">Title</label>
          <input className="form-control" id="formEventTitle" value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="formEventBody">Body</label>
          <textarea className="form-control" id="formEventBody" value={body} onChange={e => setBody(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button className="btn btn-primary" onClick={addEvent} disabled={unCreatable}>Submit</button>
        <button type="submit" className="btn btn-danger" onClick={deleteAllEvents} disabled={unDeletable}>Reset</button>
      </form>

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
    </div>
  );
}

export default App
