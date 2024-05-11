
import {configureStore} from '@reduxjs/toolkit'
import { todoReducer  } from '../Slices'

const store = configureStore({
  reducer: todoReducer
})

export default store
