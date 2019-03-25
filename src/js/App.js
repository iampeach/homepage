import React, { Component } from 'react'
import Header from './components/Header'
import Content from './components/Content'
import { withRouter } from 'react-router'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			chosen: 0,
			contents: [
				{ url: '/'							,text: 'Home' },
				{ url: '/about'					,text: 'About' },
				{ url: '/skill'					,text: 'Skills' },
				{ url: '/experience'		,text: 'Experience' },
				{ url: '/portfolio'			,text: 'Portfolio' },
				{ url: '/blog'					,text: 'Blog' },
				{ url: '/contact'				,text: 'Contact' }
			]
		}
	}
	change_page = id => {
		this.setState({ chosen: id })
		this.props.history.push(this.state.contents[id].url)
	}
	render() {
		return (
			<div className="mg-0 pd-0 fl-col">
				<Header chosen={this.state.chosen}
								contents={this.state.contents}
								change_page={this.change_page} />
				<Content />
			</div>
		)
	}
}

export default withRouter(App)
