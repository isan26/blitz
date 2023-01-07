import Form from 'react-bootstrap/Form';


interface IProps {
    children: React.ReactNode;
    [key: string]: any;
}
const Register = (props: IProps) => {
    const { children, ...rest } = props;

    return (
        <Form {...rest}>
            {children}
        </Form>
    )
}

export default Register
