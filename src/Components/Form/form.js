import React from 'react';

import './style.css'

class Form extends React.Component{

    constructor(props){
        super(props);

        this.state={
            userName: '',
            userEmail: '',
            userPhone: '',
            userGender: '',
            userPassword: ''
        };
    }

    onNameChange = (event) => {
        
        this.setState({
            userName: event.target.value
        })
    }

    onEmailChange = (event) => {

        this.setState({
            userEmail: event.target.value
        })
    }

    onPhoneChange = (event) => {

        this.setState({
            userPhone: event.target.value
        })
    }

    onGenderChange = (event) => {

        this.setState({
            userGender: event.target.value
        })
    }

    onPasswordChange = (event) => {

        this.setState({
            userPassword: event.target.value
        })
    }

    // onFieldChange = (event) => {
    //    this.setState({
    //    [event.target.name]: event.target.value
    //    });  
    //};

    onSubmit = () => {

        window.alert(`

            Name: ${this.state.userName}
            Emaill: ${this.state.userEmail}
            Phone: ${this.state.userPhone}
            Gender: ${this.state.userGender}
            Password: ${this.state.userPassword}
        
            
        `);

        this.clearFormFields();
    }

    clearFormFields = () => {

        this.setState({
            userName: '',
            userEmail: '',
            userPhone: '',
            userGender: '',
            userPassword: ''
        });
     
    };



    render = () => {
        return(

            <div className='form-container'>

                <p className='title'><h2> USER FORM </h2></p>

                <input
                // name = userName 
                // onChange={this.onFieldChange}
                 onChange={this.onNameChange}
                 value={this.state.userName}
                 className='input-style' 
                 type='text' 
                 placeholder='Enter your Name'
                />

                <input
                 onChange={this.onEmailChange}
                 value={this.state.userEmail}
                 className='input-style' 
                 type='email' 
                 placeholder='Enter your Email'
                />

                <input
                 onChange={this.onPhoneChange}
                 value={this.state.userPhone}
                 className='input-style' type='text' placeholder='Enter Phone Number'
                />

                <select onChange={this.onGenderChange}
                value={this.state.userGender}
                className='input-style'>
                    <option value=''>Choose Gender</option>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                </select>

                <input 
                 onChange={this.onPasswordChange}
                 value={this.state.userPassword} 
                 className='input-style' 
                 type='password' 
                 placeholder='Enter Password'
                />

                <button
                onClick={this.onSubmit}
                className='submit-btn'>Submit</button>

            </div>
        )
    }
}

export default Form