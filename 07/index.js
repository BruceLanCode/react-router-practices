import React from 'react'
import { Router , Route , hashHistory , IndexRoute } from 'react-router'
import {render} from 'react-dom'
import App from './module/app.js'
import About from './module/about.js'
import Repos from './module/repos.js'
import Repo from './module/repo.js'
import Home from './module/home.js'


render(
	(<Router history={hashHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={Home} />
				<Route path="/about" component={About} />
				<Route path="/repos" component={Repos}>
					<Route path=":userName/:repoName" component={Repo} />
				</Route>
			</Route>
	</Router>),
	document.getElementById('app')
)