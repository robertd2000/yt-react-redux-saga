import React from 'react';
import { connect } from 'react-redux';
import {createPost, showAlert} from '../redux/actions'
import { Alert } from './Alert';

class PostForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            title: ''
        }
    }

    submitHandler = e => {
        e.preventDefault()

        const {title} = this.state

        if (!title.trim()) {
            this.props.showAlert('Null post')
            return
        }

        const newPost = {
            title, id: Date.now().toString()
        }

        this.props.createPost(newPost)

        this.setState({title: ''})
    }

    changeInputHandler = e => {
        e.persist()
        this.setState(prev => ({
            ...prev,
            ...{
                [e.target.name]: e.target.value
            }
        }))
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                {this.props.alert ? <Alert text={this.props.alert} /> : null}
                
                <div className='form-group'>
                    <label htmlFor='title' >Заголовок поста</label>
                    <input 
                        type='text' 
                        className='form-control' 
                        id='title'
                        value={this.state.title}
                        name='title'
                        onChange={this.changeInputHandler} />
                </div>
                <button className='btn btn-success' type='submit' >Создать</button>
            </form>
        );
    }
}

const mapStateToProps = state => ({
    alert: state.app.alert
})

export default connect(mapStateToProps, {
    createPost,
    showAlert,
})(PostForm)