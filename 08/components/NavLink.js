import { Link } from 'react-router'
import React , {Component} from 'react'
import activeStyle from '../css/LinkStyle.css'

export default class extends Component {
	render(){
		return (
			<Link {...this.props} activeClassName={activeStyle.active}></Link>
		)
	}
}