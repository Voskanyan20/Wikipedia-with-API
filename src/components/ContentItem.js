import React from 'react'
import {Card} from "react-bootstrap";

export default function ContentItem(props) {
    const {item} = props
    return (
        <Card>
            <div className="card-header">
                <a href={`https://en.wikipedia.org/wiki/${item.title}`} target='_blank'>
                    {item.title}
                </a>
            </div>
            <div className="card-body">
                <blockquote className="blockquote mb-0">
                    <p>{item.snippet}</p>
                    <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                </blockquote>
            </div>
        </Card>
    )
}