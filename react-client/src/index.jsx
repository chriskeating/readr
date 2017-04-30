import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [],
      number: '1',
    }
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  search () {
    var postObj = {'styleId': this.state.number};
    $.ajax({
      type: 'POST',
      url: '/items/import',
      data: postObj,
      success: (data => {
        console.log('success! here is the data', data);
      }),
      error: (err) => {
        console.log('error is ', err)
      }
    })
  }

  componentDidMount() {
    $.ajax({
      type: 'GET',
      url: '/items', 
      contentType: 'application/json',
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err)
      }
    });
    this.render()
  }

  handleChange(e) {
    this.setState({
      number: e.target.value
    })
  }

  render () {
    return (<div>
      <h1>What's In The Cooler™</h1>
      <List items={this.state.items}/>x
      <form action="">
        Enter Beer ID Type here : 
        <input type="text" name="beerType" value={this.state.number} onChange={this.handleChange.bind(this)} id='typeid'></input>
        <button onClick={this.search.bind(this)}>Search</button>
        <button onClick={this.componentDidMount.bind(this)}>Get Your Results</button>
      </form>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
        



        // console.log(this.state.items)
        // this.state.items.push(JSON.parse(data))
        // 