import React, {useState} from 'react';
import InputForm from './components/inputForm';

const Create = () => {
    const [state,setState] = useState({val:''})
    const handleChange = ({ target: { name, value } }) => {
        setState(prevState => ({ ...prevState, [name]: value }));
    }
    return(
        <div className="main">
            <InputForm handleChange={handleChange} text="testando" id="testando" name="val" value={state.val} />
        </div>
    )
}

export default Create