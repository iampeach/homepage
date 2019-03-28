import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './contents/Home'
import About from './contents/About'
import Skills from './contents/Skills'
import Experience from './contents/Experience'
import Portfolio from './contents/Portfolio'
import Blog from './contents/Blog'
import Contact from './contents/Contact'

export default class Content extends Component {
	render() {
		const style = 'w-1200 fl-0-1'
		return (
			<div className="mr-0 pd-0 fl-row fl-center">
				<Switch>
					<Route exact path='/' render={() => <Home className={style} />} />
					<Route path='/about' component={About} />
					<Route path='/skill' component={Skills} />
					{/* <Route path='/experience' component={Experience} /> */}
					{/* <Route path='/portfolio' component={Portfolio} /> */}
					<Route path='/blog' render={() => <Blog className={style} />} />
					<Route path='/contact' component={Contact} />
				</Switch>
			</div>
		)
	}
}

