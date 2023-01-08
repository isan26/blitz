import React from 'react'
import { Form, FormControl, Button } from 'react-bootstrap';

type LoadFromUrlProps = {
    setData: (data: JSX.Element) => void,
    blitz: (data: any) => JSX.Element
}

function LoadURLForm({ setData, blitz }: LoadFromUrlProps) {
    const [url, setURL] = React.useState('http://localhost:3000/test.json');

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setURL(event.target.value);
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setData(<div>Loading please wait...</div>);

        fetch(url)
            .then(response => response.json())
            .then(data => {
                setData(blitz(data))
            })
            .catch(error => setData(<div>Failed to load data: {error}</div>));
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormControl
                type="text"
                placeholder="Enter URL"
                value={url}
                onChange={handleChange} />
            <Button type="submit">Load</Button>
        </Form>
    );
}

export default LoadURLForm
