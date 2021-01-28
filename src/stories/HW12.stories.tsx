import React, { VFC } from 'react'
import { Provider } from 'react-redux'
import store from '../p2-homeworks/h10/bll/store'
import HW12 from '../p2-homeworks/h12/HW12'

export default {
    title: 'HW12',
    component: HW12

}

export const Template: VFC<{}> = () => 
    <Provider store={store}>
        <HW12 />
    </Provider>

