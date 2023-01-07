import Form from 'react-bootstrap/Form';


interface IProps {
    children: React.ReactNode;
    [key: string]: any;
}
const Register = (props: IProps) => {
    const { children, ...rest } = props;

    console.log("Register", props)

    return (
        <Form {...rest} onSubmit={() => { }}>
            <h1>{rest.title}</h1>
            {children}
        </Form>
    )
}

export default Register
