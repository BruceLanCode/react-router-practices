import React from 'react'
import { Router , Route , hashHistory } from 'react-router'
import {render} from 'react-dom'
import App from './module/app.js'
import About from './module/about.js'
import Repos from './module/repos.js'
import Repo from './module/repo.js'


render(
	(<Router history={hashHistory}>
			<Route path="/" component={App}>
				<Route path="/about" component={About} />
				<Route path="/repos" component={Repos}>
					<Route path=":userName/:repoName" component={Repo} />
				</Route>
			</Route>
	</Router>),
	document.getElementById('app')
)