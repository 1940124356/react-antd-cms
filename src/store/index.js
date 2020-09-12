//combineReducer    辅助函数，把一个由多个不同reducer函数作为value的object，合并成一个最终的reducer函数
import { createStore,combineReducers } from 'redux'

import todoReducer from './reducers/todoReducer'
import goodReducer from './reducers/goodReducer'

//核心1
const reducer =  combineReducers({
    todo:todoReducer,
    good:goodReducer

})

//核心2
const store = createStore(reducer)

export default store