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
      submitted: []
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

  render() {
    return (
    <div>
      <div className="landing-page">
        <h1 className="container-fluid full-page-1">Keating-Russ Readr™</h1>
        <form action="" className="submit-form">
          <input type="text" name="articleTitle" placeholder="Article Title Here" value={this.state.articleTitle} onChange={this.handleTitleChange.bind(this)} id='title'></input>
          <input type="text" name="articleLink" placeholder="Article Link Here" value={this.state.articleLink} onChange={this.handleLinkChange.bind(this)} id='link'></input>
          <input type="text" name="articleTitle" placeholder="Username Here" value={this.state.articlePoster} onChange={this.handlePosterChange.bind(this)} id='poster'></input>
          
          <select onChange={this.handleCategoryChange.bind(this)} value={this.state.articleCategory}>
            <option value="select">Select</option>
            <option value="politics">Politics</option>
            <option value="sports">Sports</option>
          </select>
          <button type="submit" className="post-button" onClick={() => { this.postArticle();}} style={{cursor: 'pointer'}}>Post</button>
        </form>
        <textarea type="text" name="articleDescription" placeholder="Description Here" value={this.state.articleDescription} onChange={this.handleDescriptionChange.bind(this)} id='description' style={{width: '40%', height: '100px'}}/>
      </div>
      <div>
        <div>There have been <b>{ this.state.submitted.length }</b> articles posted in Readr.</div>
        <div className="space">-</div>
        <button type="button" onClick={() => { this.returnResults();}} style={{cursor: 'pointer'}}>All Articles</button>
        <button type="button" onClick={() => { this.returnSports();}} style={{cursor: 'pointer'}}>Sports Articles</button>
        <button type="button" onClick={() => { this.returnPolitics();}} style={{cursor: 'pointer'}}>Politics Articles</button>
        <div className="space">-</div>
        {this.state.submitted.slice(0).reverse().map(article => <Article key={article.title} article={article} />)}
      </div>
    </div>
    )
  }
}

export default App;