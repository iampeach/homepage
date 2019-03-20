import React, {Component} from 'react'
import Header from './component/Header'
import Body from './component/Body'
import Footer from './component/Footer'

class App extends Component {
	render() {
		return (
			<div>
				<Header/>
				<Body/>
				<Footer/>
			</div>
		)
	}
}

export default App
