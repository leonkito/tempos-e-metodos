import React, {useState} from 'react';
import InputForm from './components/inputForm';

const Create = () => {
    const [state,setState] = useState([{
        product_code:'',
        work_type:'',
    }])
    const handleChange = ({ target: { name, value } }) => {
        setState(prevState => ({ ...prevState, [name]: value }));
    }
    return(
        <div className="main">
            <div className="input-box">
                <InputForm handleChange={handleChange} text="Código:" id="product_code" name="product_code" value={state.product_code} />
                <InputForm handleChange={handleChange} text="Operação:" id="work_type" name="work_type" value={state.work_type} />
            </div>
        </div>
    )
}

export default Create