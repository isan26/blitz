import React from 'react'
import { Accordion } from 'react-bootstrap'



interface Props {
    items: ItemProps[],
    [key: string]: any
}

interface ItemProps {
    title: string,
    body: string,
    [key: string]: any,
}

const Component = (props: Props) => {
    const { items, ...rest } = props

    return (
        <Accordion defaultActiveKey="0" {...rest}>
            {items.map((item, index) => (
                <Item
                    key={index}
                    eventKey={index}
                    {...item}
                />))}
        </Accordion>
    )
}


function Item(props: ItemProps) {
    const { title, body, eventKey, ...rest } = props
    return (
        <Accordion.Item eventKey={eventKey} {...rest}>
            <Accordion.Header>{title}</Accordion.Header>
            <Accordion.Body>{body}</Accordion.Body>
        </Accordion.Item>
    )
}

export default Component
