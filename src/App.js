import { Component} from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <BrowserRouter>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                </BrowserRouter>
            </div>
        )
    }
}


export default App;