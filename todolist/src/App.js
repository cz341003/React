import { useEffect, useState } from 'react'
import './App.css'
import Add from './Components/Add'
import Lists from './Components/List'

function App() {
    const [stateObj, setStateObj] = useState([])
    const setList = (list) => {
        setStateObj(pre => [...pre, list])
    }
    const changeStatus = (checked, index) => {
        setStateObj(stateObj => {
            stateObj[index].done = checked
            return [...stateObj]
        })
    }
    const changeShow = (bool, index) => {
        setStateObj(stateObj => {
            stateObj[index].isShow = bool
            return [...stateObj]
        })
    } 
    const deleteItem = (index) => {
        setStateObj(pre => {
            pre.splice(index, 1)
            return [...pre]
        })
    }
    const checkAll = (checked) => {
        setStateObj(pre => {
            pre.forEach(item => item.done = checked)
            return [...pre]
        })
    }
    const clearUndone = () => {
        debugger
        setStateObj(pre => {
            return pre.filter(item => {
                return item.done === true
            })
        })
    }
    const clearDone = () => {
        setStateObj(pre => {
            return pre.filter(item => {
                return item.done === false
            })
        })
    }
    useEffect(() => {
        setStateObj([{
            name: 'zczczcz',
            done: false,
            isShow: false
        }])
    }, [])
	return (
		<div className="App">
			<Add setList={setList} />
			<Lists list={stateObj} 
                   changeStatus={changeStatus} 
                   changeShow={changeShow} 
                   deleteItem={deleteItem}
                   checkAll={checkAll}
                   clearUndone={clearUndone}
                   clearDone={clearDone} />
		</div>
	)
}

export default App
