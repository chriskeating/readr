import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Article from './Article.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      articleLink: '',
      articleTitle: '',
      articlePoster: '',
      articleCategory: '',
      articleDescription: '',
      submitted: [],
      comments: ''
    }
    this.postArticle = this.postArticle.bind(this);
    this.returnResults = this.returnResults.bind(this);
    this.returnSports = this.returnSports.bind(this);
    this.returnPolitics = this.returnPolitics.bind(this);
  }

  postArticle () {
    var postObj = {
      'articleLink': this.state.articleLink,
      'articleTitle': this.state.articleTitle,
      'articlePoster': this.state.articlePoster,
      'articleCategory': this.state.articleCategory,
      'articleDescription': this.state.articleDescription
    };
    $.ajax({
      type: 'POST',
      url: '/addlink',
      data: postObj,
      success: (data => {
        console.log('POST DATA: ', data);
      }),
      error: (err) => {
        console.log('POST ERROR: ', err)
      }
    })
  }

  returnResults () {
    $.ajax({
      type: 'GET',
      url: '/links', 
      success: (data) => {
        if (data) {
          this.setState({
            submitted: data
          })
        }
        console.log('DATA: ', data)
      },
      error: (err) => {
        console.log('ERROR: ', err)
      }
    });
  }

  returnSports () {
    $.ajax({
      type: 'GET',
      url: '/links/sports', 
      success: (data) => {
        if (data) {
          this.setState({
            submitted: data
          })
        }
        console.log('DATA: ', data)
      },
      error: (err) => {
        console.log('ERROR: ', err)
      }
    });
  }

  returnPolitics () {
    $.ajax({
      type: 'GET',
      url: '/links/politics', 
      success: (data) => {
        if (data) {
          this.setState({
            submitted: data
          })
        }
        console.log('DATA: ', data)
      },
      error: (err) => {
        console.log('ERROR: ', err)
      }
    });
  }

  handleLinkChange(e) {
    this.setState({
      articleLink: e.target.value
    })
  }

  handleTitleChange(e) {
    this.setState({
      articleTitle: e.target.value
    })
  }

  handlePosterChange(e) {
    this.setState({
      articlePoster: e.target.value
    })
  }

  handleCategoryChange(e) {
    this.setState({
      articleCategory: e.target.value
    })
  }

  handleDescriptionChange(e) {
    this.setState({
      articleDescription: e.target.value
    })
  }

  componentDidMount () {this.returnResults()}

          // <input type="text" name="articleTitle" placeholder="Username Here" value={this.state.articlePoster} onChange={this.handlePosterChange.bind(this)} id='poster' required></input>

  render() {
    return ( 
    <div className="col-11">
      <div className="landing-page">
        <h1 className="page-title">The Keating-Russ Readr</h1>
        <form action="" className="submit-form">
          <input className="data-entry" type="text" name="articleTitle" placeholder="Article Title Here" value={this.state.articleTitle} onChange={this.handleTitleChange.bind(this)} id='title' required></input>
          <input className="data-entry" type="url" name="articleLink" placeholder="Article Link Here" value={this.state.articleLink} onChange={this.handleLinkChange.bind(this)} id='link' required></input>
          <select className="category-dropdown" onChange={this.handlePosterChange.bind(this)} value={this.state.articlePoster}>
            <option value="select">Select Your Name</option>
            <option value="Nina">Nina</option>
            <option value="Ted">Ted</option>
            <option value="Kyleigh">Kyleigh</option>
            <option value="Anthony">Anthony</option>
            <option value="Carol">Carol</option>
            <option value="Tony">Tony</option>
            <option value="Kiwi">Kiwi</option>
            <option value="Chris">Chris</option>
          </select>
          <select className="username-dropdown" onChange={this.handleCategoryChange.bind(this)} value={this.state.articleCategory}>
            <option value="select">Select the Article Category</option>
            <option value="Politics">Politics</option>
            <option value="Sports">Sports</option>
            <option value="Cruise">2019 Cruise Prep</option>
            <option value="Self-Improvement">Self-Improvement</option>
            <option value="Written by Me">Written by Me!</option>
          </select>
          <button className="post-button button" type="submit" onClick={() => { this.postArticle();}} style={{cursor: 'pointer'}}>Post</button>
        </form>
        <textarea className="data-entry" type="text" name="articleDescription" placeholder="Why did you add this article?" value={this.state.articleDescription} onChange={this.handleDescriptionChange.bind(this)} id='description' style={{width: '40%', height: '100px'}}/>
      </div>
      <div>
        <div>There have been <b>{ this.state.submitted.length }</b> articles posted in Readr.</div>
        <div className="space">-</div>
        <button className="button" type="button" onClick={() => { this.returnResults();}} style={{cursor: 'pointer'}}>All Articles</button>
        <button className="button" type="button" onClick={() => { this.returnSports();}} style={{cursor: 'pointer'}}>Sports Articles</button>
        <button className="button" type="button" onClick={() => { this.returnPolitics();}} style={{cursor: 'pointer'}}>Politics Articles</button>
        <div className="space">-</div>
        {this.state.submitted.slice(0).reverse().map(article => <Article key={article.id} article={article} />)}
      </div>
    </div>
    )
  }
}

export default App;