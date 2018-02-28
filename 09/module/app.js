import React,{Component} from 'react'
import NavLink from '../components/NavLink.js'
import {IndexLink} from 'react-router'
import activeLike from '../css/LinkStyle.css'

export default class extends Component{
	render(){
		return (<div>
				<h1>React Router Tutorial</h1>
				<ul role="nav">
					<li><IndexLink to="/" activeClassName={activeLike.active}>Home</IndexLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/repos">Repos</NavLink></li>
        </ul>
        {this.props.children}
			</div>)
	}
}