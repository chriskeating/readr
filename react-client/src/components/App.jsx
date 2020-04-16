import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Article from './Article.jsx';
import Map from './Map.jsx';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Alert from '@material-ui/lab/Alert';

 

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));



function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Built by Chris Keating'}
    </Typography>
  );
}


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
      entryLatitude: undefined,
      entryLongitude: undefined,
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
        this.setState({
          articleLink: '',
          articleTitle: '',
          articlePoster: '',
          articleCategory: '',
          articleDescription: ''
        })
        this.returnResults();
        console.log(this.state);
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
        // console.log('DATA: ', data)
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
    console.log('here')
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

  handleLatChange(e) {
    console.log(this.state)
    this.setState({
      entryLatitude: e.target.value
    })
  }

  handleLongChange(e) {
    this.setState({
      entryLongitude: e.target.value
    })
  }


  componentDidMount () {this.returnResults()}

  render() {
    return ( 
    <div className="">
      <div>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h5" color="inherit">
            Share interesting reading resources!
          </Typography>
        </Toolbar>
      </AppBar>
      <Alert severity="info">For anyone visiting this page from Chris résumé, feel free to click around and post an article (you can use a fake name too)! Find the code repository and my LinkedIn at the bottom of the page.</Alert>
      <div className="landing-page">
          <Grid container spacing={2} className="col-11 grid-pic">
            <Grid item xs={12} sm={6}>
               <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="title"
                  label="Article Title"
                  name="title"
                  autoComplete="text"
                  autoFocus
                  value={this.state.articleTitle} 
                  onChange={this.handleTitleChange.bind(this)}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="title"
                  label="Your Name"
                  name="poster"
                  autoComplete="text"
                  autoFocus
                  value={this.state.articlePoster} 
                  onChange={this.handlePosterChange.bind(this)}
                />
            </Grid>
            <Grid item xs={12} sm={9}>
               <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="link"
                  label="Article Link"
                  name="link"
                  autoComplete="link"
                  autoFocus
                  value={this.state.articleLink} 
                  onChange={this.handleLinkChange.bind(this)}
                />
            </Grid>
            <Grid item xs={12} sm={3}>
              <FormControl variant="outlined" className="formControl">
                <InputLabel ref={null} htmlFor="outlined-age-simple">
                  Category
                </InputLabel>
                <Select
                  required
                  value={this.state.articleCategory}
                  onChange={this.handleCategoryChange.bind(this)}
                  input={<OutlinedInput name="category" id="outlined-age-simple" />}
                >
                  <MenuItem value="Sports">Sports</MenuItem>
                  <MenuItem value="Business">Business</MenuItem>
                  <MenuItem value="Politics">Politics/News</MenuItem>
                  <MenuItem value="Travel">Travel</MenuItem>
                  <MenuItem value="Health">Health & Fitness</MenuItem>
                  <MenuItem value="Self-written">Written by Me</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
            <TextField
              id="outlined-multiline-static"
              label="Why are you sharing?"
              multiline
              fullWidth
              rows="5"
              margin="normal"
              variant="outlined"
              value={this.state.articleDescription} 
              onChange={this.handleDescriptionChange.bind(this)}
            />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Send an email to Chris to let him know you posted." 
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" type="submit" onClick={() => { this.postArticle();}}>Submit</Button>
            </Grid>
          </Grid>
      </div>
      </div>
      <div className="col-11 articles">
        <div className="articles-header">There have been <b>{ this.state.submitted.length }</b> articles posted in Readr.</div>
        {this.state.submitted.slice(0).reverse().map(article => <Article key={article.id} article={article} />)}
      </div>
      <Grid container spacing={2} className="grid-pic landing-page">
          <Grid item xs={12} xs={6}>
            <Button variant="contained" color="primary" href="https://github.com/ckeating-nh/readr" className="top-button" style={{alignContent: 'right'}}>
              Code Repository
            </Button>
          </Grid>
          <Grid item xs={12} xs={6}>
            <Button variant="contained" color="primary" href="https://www.linkedin.com/in/ckeating-nh/" className="top-button" style={{cursor: 'pointer'}}>
              My LinkedIn
            </Button>
          </Grid>
          </Grid>
      <Box mt={3}>
        <MadeWithLove />
      </Box>
    </div>
    )
  }
}

              // <FormControl variant="outlined" className="formControl" margin="normal">
              //   <InputLabel ref={null} htmlFor="outlined-age-simple">
              //     Poster
              //   </InputLabel>
              //   <Select
              //     input={<OutlinedInput name="age" id="outlined-age-simple" />}
              //   >
              //     <MenuItem value="Kyleigh">Kyleigh</MenuItem>
              //     <MenuItem value="Anthony">Anthony</MenuItem>
              //     <MenuItem value="Matthew">Matthew</MenuItem>
              //     <MenuItem value="Candice">Candice</MenuItem>
              //     <MenuItem value="Mike">Mike</MenuItem>
              //     <MenuItem value="Carol">Carol</MenuItem>
              //     <MenuItem value="Tony">Tony</MenuItem>
              //     <MenuItem value="Ted">Ted</MenuItem>
              //     <MenuItem value="Nina">Nina</MenuItem>
              //     <MenuItem value="Kiwi">Kiwi</MenuItem>
              //     <MenuItem value="Chris">Chris</MenuItem>
              //     <MenuItem value="Guest">I'm a Guest!</MenuItem>
              //   </Select>
              // </FormControl>

export default App;