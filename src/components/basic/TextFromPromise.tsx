import React, { useState, useEffect } from 'react';


interface TextFromPromiseProps {
    loadData: () => Promise<string>
}
const TextFromPromise = ({ loadData }: TextFromPromiseProps) => {

    const [text, setText] = useState<string>('')

    useEffect(() => {
        loadData().then(text => setText(text))
    }, [])

    return (
        <p>{text}</p>
    )
}

export default TextFromPromise
