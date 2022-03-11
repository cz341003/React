import React, { Component } from 'react'
import { Button, Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import './index.css'

export default class Add extends Component {
    state = {
        inputValue: ''
    }
	onChange = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }
    onClick = () => {
        const {inputValue} = this.state
        this.props.setList({
            name: inputValue,
            done: false,
            isShow: false
        })
        this.setState({
            inputValue: ''
        })
    }
	render() {
        const {inputValue} = this.state
		return (
			<div>
				<div className="container">
					<Input
						id="btn"
						className="myInput"
						onChange={this.onChange}
                        value={inputValue}
					/>
					<Button
						type="primary"
						icon={<SearchOutlined />}
						className="myBtn"
                        onClick={this.onClick}
					>
						添加
					</Button>
				</div>
			</div>
		)
	}
}
