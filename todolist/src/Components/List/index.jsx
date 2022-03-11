import React, { Component } from 'react'
import { List, Button, Checkbox, Modal } from 'antd'
import './index.css'

export default class Lists extends Component {
    state = {
        isShow: false
    }
	onChange = (e, index) => {
		this.props.changeStatus(e.target.checked, index)
	}
    onMouseLeave = (e, index) => {
        this.props.changeShow(false, index)
    }
    onMouseEnter = (e, index) => {
        this.props.changeShow(true, index)
    }
    deleteItem = (e, index) => {
        this.props.deleteItem(index)
    }
    handleOk = (e, index) => {
        this.deleteItem(index)
    }
    checkAll = (e) => {
        this.props.checkAll(e.target.checked)
    }
    clearDone = () => {
        this.props.clearDone()
    }
    clearUndone = () => {
        this.props.clearUndone()
    }
	render() {
        const list = this.props.list
        const doneNum = list.filter(item => item.done === true).length
        const undoneNum = list.filter(item => item.done === false).length
		return (
			<div>
				<List
					className="myList"
					footer={
						<div>
                            <div>
                                <Checkbox onChange={this.checkAll}>
                                    <span className='mySpan'>全选</span>    
                                    <span className='mySpan'>已完成{doneNum}</span> 
                                    <span className='mySpan'>未完成{undoneNum}</span> 
                                </Checkbox>
                            </div>
							<Button type="primary" className="done" onClick={this.clearDone}>
								清除已完成
							</Button>
							<Button type="default" onClick={this.clearUndone}>清除未完成</Button>
						</div>
					}
					bordered
					dataSource={list}
					renderItem={(item, index) => (
						<List.Item onMouseEnter={e => this.onMouseEnter(e, index)} onMouseLeave={e => this.onMouseLeave(e, index)}>
							<Checkbox onChange={e => this.onChange(e, index)} checked={item.done}>
                                <span className='mySpan'>{item.name}</span>    
                            </Checkbox>
                            {item.isShow ? <Button type="primary" danger onClick={_ => this.setState({isShow: true})}>删除</Button> : null}
                            <Modal title="确认框" visible={this.state.isShow} 
                            onOk={e => this.handleOk(e, index)} 
                            onCancel={_ => this.setState({isShow: false})}
                            okText="确认"
                            cancelText="取消">
                              <p className='delete'>是否删除？</p>
                            </Modal>
						</List.Item>
					)}
				/>
			</div>
		)
	}
}
