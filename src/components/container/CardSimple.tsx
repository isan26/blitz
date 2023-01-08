import Card from 'react-bootstrap/Card';

type Props = {
    children: any,
    [key: string]: any
}
const CardSimple = (props: Props) => {
    return (
        <Card>
            <Card.Body>{props.children}</Card.Body>
        </Card>
    )
}

export default CardSimple
