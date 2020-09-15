//combineReducer    辅助函数，把一个由多个不同reducer函数作为value的object，合并成一个最终的reducer函数
import { createStore,combineReducers,applyMiddleware } from 'redux'

import todoReducer from './reducers/todoReducer'
import goodReducer from './reducers/goodReducer'
import userReducer from './reducers/userReducer'

//是一个中间件，用于支持redux中的异步action
import thunk from 'redux-thunk'

//核心1
const reducer =  combineReducers({
    todo:todoReducer,
    good:goodReducer,
    user:userReducer

})

//核心2
const store = createStore(reducer,applyMiddleware(thunk))

export default store