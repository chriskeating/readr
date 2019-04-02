import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Article from './Article.jsx';

var articles = ''
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [],
      articleLink: '',
      submittedArticleLink: '',
      articleTitle: '',
      submittedArticleTitle: '',
      articlePoster: '',
      submittedArticlePoster: '',
      articleCategory: '',
      submitted: [],
      numArticles: 0
    }
    this.postArticle = this.postArticle.bind(this)
    this.returnResults = this.returnResults.bind(this);
  }

  postArticle () {
    var postObj = {
      'articleLink': this.state.articleLink,
      'articleTitle': this.state.articleTitle,
      'articlePoster': this.state.articlePoster,
      'articleCategory': this.state.articleCategory
    }; //used to be styleId
    $.ajax({
      type: 'POST',
      url: '/addlink',
      data: postObj,
      success: (data => {
        console.log('success! here is the data', data);
      }),
      error: (err) => {
        console.log('error is ', err)
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
      },
      error: (err) => {
        console.log('err', err)
      }
    });
  }


  // componentDidMount() {
  //   $.ajax({
  //     type: 'GET',
  //     url: '/', 
  //     contentType: 'application/json',
  //     success: (data) => {
  //       this.setState({
  //         items: data
  //       })
  //       this.render();
  //     },
  //     error: (err) => {
  //       console.log('err', err)
  //     }
  //   });
  //   this.render()
  // }

  handleLinkChange(e) {
    // console.log('link is:' + JSON.stringify(this.state.articleLink))
    this.setState({
      articleLink: e.target.value
    })
  }

  handleTitleChange(e) {
    // console.log('title is:' + JSON.stringify(this.state.articleTitle))
    this.setState({
      articleTitle: e.target.value
    })
  }

  handlePosterChange(e) {
    // console.log('poster is' + JSON.stringify(this.state.articlePoster))
    this.setState({
      articlePoster: e.target.value
    })
  }

  handleCategoryChange(e) {
    console.log('cat is' + JSON.stringify(this.state.articleCategory))
    this.setState({
      articleCategory: e.target.value
    })
    console.log('cat is' + JSON.stringify(this.state.articleCategory))
  }

  componentDidMount () {this.returnResults()}


// componentWillReceiveProps (nextProps) {
//   if(nextProps !== this.props) {
//     this.returnResults();
//   }
// }



  render() {
    return (
    <div>
      <div className="landing-page">
        <h1 className="container-fluid full-page-1">Keating-Russ Readr™</h1>
        <form action="" className="submit-form">
          <input type="text" name="articleTitle" placeholder="Article Title Here" value={this.state.articleTitle} onChange={this.handleTitleChange.bind(this)} id='title'></input>
          <input type="text" name="articleLink" placeholder="Article Link Here" value={this.state.articleLink} onChange={this.handleLinkChange.bind(this)} id='link'></input>
          <input type="text" name="articleTitle" placeholder="Article Poster Here" value={this.state.articlePoster} onChange={this.handlePosterChange.bind(this)} id='poster'></input>
          <select onChange={this.handleCategoryChange.bind(this)} value={this.state.articleCategory}>
            <option value="select">Select</option>
            <option value="politics">Politics</option>
            <option value="sports">Sports</option>
          </select>
          <button type="submit" className="post-button" onClick={() => { this.postArticle();}}>Post</button>
          <button type="button" onClick={() => { this.returnResults();}}>Search</button>
        </form>
      </div>
      <div>
        <div>There have been <b>{ this.state.submitted.length }</b> articles posted in Readr.</div>
        <div className="space">-</div>
        <div className="space">-</div>
        {this.state.submitted.slice(0).reverse().map(article => <Article key={article.title} article={article} />)}
      </div>
    </div>
    )
  }
}
        


// {console.log('is array? ' + Array.isArray(this.state.submitted))}
//         {console.log(this.state.submitted)}
        // this.state.submitted.map(article => <Article title={article.title} link={article.link} poster={article.poster} 
// <div>{ for (var i = 0; i < this.state.submitted.length; i++) {<Article props=this.state.submitted[i] } }</div>
export default App;
// onClick={() => { this.postArticle()}}>Post</button> //this.componentDidMount();
        // console.log(this.state.items)
        // this.state.items.push(JSON.parse(data))