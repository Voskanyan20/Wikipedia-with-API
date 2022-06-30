import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import {wikiRequest} from '../store/actions/index';
import wiki from '../Wiki.png'

export default function Search() {

    const [text, setText] = useState('')
    const dispatch = useDispatch()

    const onInput = (e) => {
        setText(e.target.value)
    }
    const onSearch = (e) => {
        e.preventDefault()
        dispatch(wikiRequest(text))
    }

    return (
        <div className="block">
            <div style={{textAlign: "center"}} className="img">
                <img  src={wiki} />
            </div>
            <form onSubmit={onSearch} className="input-group mb-3">
                <input
                    onChange={onInput}
                    value={text}
                    type="text"
                    className="form-control"
                    placeholder="Search"
                />
                <button className="btn btn-outline-secondary" type="submit" >Search</button>
            </form>
        </div>

    )
}
