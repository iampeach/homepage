import React, {Component} from 'react'
import Header from './component/Header'
import Body from './component/Body'
import Footer from './component/Footer'

class App extends Component {
	render() {
		return (
			<div className="mg-0 pd-0">
				<Header/>
				<Body/>
				<Footer/>
			</div>
		)
	}
}

export default App
