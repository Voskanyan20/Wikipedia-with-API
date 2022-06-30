import React from 'react'
import { useSelector } from "react-redux";
import ContentItem from './ContentItem';

export default function ContentBody() {

    const data = useSelector(state =>state.data)

    return (
        <div>
            {
                data.map(item =>(
                    <ContentItem key={item.pageid} item={item}/>
                ))
            }
        </div>
    )
}