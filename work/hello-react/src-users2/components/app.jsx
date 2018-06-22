import React,{Component} from 'react'
import Search from './search'
import Main from './main'
export default class App extends Component{


    render(){
        // const {searchName}=this.state
        return(
            <div className="container">
                <Search/>
                <Main/>
            </div>
        )

    }
}