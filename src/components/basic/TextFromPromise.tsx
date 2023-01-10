import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';


interface TextFromPromiseProps {
    loadData: () => Promise<string>
}
const TextFromPromise = ({ loadData }: TextFromPromiseProps) => {

    const [text, setText] = useState<string>('')

    useEffect(() => {
        loadJoke();
    }, []);

    function loadJoke() {
        loadData().then(text => setText(text))
    }

    return (
        <>
            <p>{text}</p>
            <Button variant="primary" onClick={loadJoke}>Not funny, try again</Button>
        </>
    )
}

export default TextFromPromise
