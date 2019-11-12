import React, { useState, useContext } from 'react'
import {
    CREATE_EVENT,
    DELETE_ALL_EVENTS
} from '../actions'

import AppContext from '../contexts/AppContext'

const EventForm = () => {
    const { state, dispatch } = useContext(AppContext)
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    const addEvent = e => {
        e.preventDefault()
        dispatch({
            type: CREATE_EVENT,
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
                type: DELETE_ALL_EVENTS,
            })
        }
    }

    const unCreatable = title === '' || body === ''
    const unDeletable = state.events.length === 0

    return (
        <>
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
            </div>
        </>
    )
}

export default EventForm