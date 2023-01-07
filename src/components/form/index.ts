import IComponentPool from 'core/Interfaces/IComponentPool';

import Register from "./Register";
import ReactForm from 'react-bootstrap/Form';


const components: IComponentPool = {
    Register,
    Input: ReactForm.Control,
}

export default components;
