import React,{useEffect} from 'react'
import {useSelector} from 'react-redux'
export function Profile() {
    const login =useSelector(state=>state.UserReducer.login)
    return (
        <div className='profile'>
           <h1>{login}</h1>
        </div>
    )
}