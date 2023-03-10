import React, {useState} from 'react';
import InputForm from './components/inputForm';
import axios from 'axios'
const Create = () => {
    const [state,setState] = useState([{
        product_code:'',
        work_type:'',
    }])
    const handleChange = ({ target: { name, value } }) => {
        setState(prevState => ({ ...prevState, [name]: value }));
    }
    const handleClick = () => {
    axios.get('http://localhost:4000/v1/takes')
        .then((response) => {
            console.log(response.data.data);
            console.log(response.status);
            console.log(response.statusText);
            console.log(response.headers);
            console.log(response.config);
        });
    }
    return(
        <div className="main">
            <div className="input-box">
                <InputForm handleChange={handleChange} text="Código:" id="product_code" name="product_code" value={state.product_code} />
                <InputForm handleChange={handleChange} text="Operação:" id="work_type" name="work_type" value={state.work_type} />
            </div>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default Create