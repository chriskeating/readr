import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Article from './Article.jsx';
// import Names from './Menu.jsx';
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
        console.log(this.state)
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

          // <input type="text" name="articleTitle" placeholder="Username Here" value={this.state.articlePoster} onChange={this.handlePosterChange.bind(this)} id='poster' required></input>
          // <input className="coordinates-entry" type="number" name="lat-entry" placeholder="Latitude here" value={this.state.entryLatitude} onChange={this.handleLatChange.bind(this)} id='lat' required></input>
          // <input className="coordinates-entry" type="number" name="long-entry" placeholder="Latitude here" value={this.state.entryLongitude} onChange={this.handleLongChange.bind(this)} id='long' required></input>
          // <button className="post-button button" type="submit" onClick={() => { this.postArticle();}} style={{cursor: 'pointer'}}>Post</button>
          // <input className="data-entry" type="url" name="articleLink" placeholder="Article Link Here" value={this.state.articleLink} onChange={this.handleLinkChange.bind(this)} id='link' required></input>
          // <input className="data-entry" type="text" name="articleTitle" placeholder="Article Title Here" value={this.state.articleTitle} onChange={this.handleTitleChange.bind(this)} id='title' required></input>
          // <textarea className="data-entry" type="text" name="articleDescription" placeholder="Why did you add this article?" value={this.state.articleDescription} onChange={this.handleDescriptionChange.bind(this)} id='description' style={{width: '40%', height: '100px'}}/>
          //           <Box width="25%" bgcolor="grey.300" p={1} my={0.5}>
          //   <Paper>
          //     <MenuList>
          //       <MenuItem onClick={()=>{this.handlePosterChange.bind(this).apply("Nina")}}>Nina</MenuItem>
          //       <MenuItem onClick={()=>{this.handlePosterChange.bind(this).apply("Ted")}} >Ted</MenuItem>
          //       <MenuItem onClick={()=>{this.handlePosterChange.bind(this).apply("Kyleigh")}} >Kyleigh</MenuItem>
          //     </MenuList>
          //   </Paper>
          // </Box>

          //           <Box width="25%" bgcolor="grey.300" p={1} my={0.5}>
          //   <Paper>
          //     <MenuList>
          //       <MenuItem onClick={()=>{this.handlePosterChange.bind(this).apply("Nina")}}>Nina</MenuItem>
          //       <MenuItem onClick={()=>{this.handlePosterChange.bind(this).apply("Ted")}} >Ted</MenuItem>
          //       <MenuItem onClick={()=>{this.handlePosterChange.bind(this).apply("Kyleigh")}} >Kyleigh</MenuItem>
          //     </MenuList>
          //   </Paper>
        //   // </Box>
        //   <button className="button" type="button" onClick={() => { this.returnResults();}} style={{cursor: 'pointer'}}>All Articles</button>
        // <button className="button" type="button" onClick={() => { this.returnSports();}} style={{cursor: 'pointer'}}>Sports Articles</button>
        // <button className="button" type="button" onClick={() => { this.returnPolitics();}} style={{cursor: 'pointer'}}>Politics Articles</button>
              //         <TextField
              //   variant="outlined"
              //   margin="normal"
              //   required
              //   fullWidth
              //   id="name"
              //   label="Your Name"
              //   name="name"
              //   autoFocus
              //   autoComplete="name"
              //   value={this.state.articlePoster} 
              //   onChange={this.handlePosterChange.bind(this)}
              // />

  render() {
    return ( 
    <div >
        <AppBar position="relative">
          <Toolbar>
            <Typography variant="h5" color="inherit">
              Keating-Russ Readr
            </Typography>
          </Toolbar>
        </AppBar>
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
              <FormControl variant="outlined" className="formControl" margin="normal">
                <InputLabel ref={null} htmlFor="outlined-age-simple">
                  Poster
                </InputLabel>
                <Select
                  required
                  value={this.state.articlePoster}
                  onChange={this.handlePosterChange.bind(this)}
                  input={<OutlinedInput name="age" id="outlined-age-simple" />}
                >
                  <MenuItem value="Kyleigh">Kyleigh</MenuItem>
                  <MenuItem value="Anthony">Anthony</MenuItem>
                  <MenuItem value="Ted">Ted</MenuItem>
                  <MenuItem value="Nina">Nina</MenuItem>
                  <MenuItem value="Carol">Carol</MenuItem>
                  <MenuItem value="Tony">Tony</MenuItem>
                  <MenuItem value="Kiwi">Kiwi</MenuItem>
                  <MenuItem value="Chris">Chris</MenuItem>
                </Select>
              </FormControl>
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
                  <MenuItem value="sports">Sports</MenuItem>
                  <MenuItem value="business">Business</MenuItem>
                  <MenuItem value="politics">Politics/News</MenuItem>
                  <MenuItem value="travel">Travel</MenuItem>
                  <MenuItem value="health">Health & Fitness</MenuItem>
                  <MenuItem value="self">Written by Me</MenuItem>
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
          </Grid>
          <Button variant="contained" color="primary" type="submit" onClick={() => { this.postArticle(); this.returnResults();}} style={{cursor: 'pointer'}} >Submit</Button>
      </div>
      <div className="col-11">
        <div>There have been <b>{ this.state.submitted.length }</b> articles posted in Readr.</div>
        {this.state.submitted.slice(0).reverse().map(article => <Article key={article.id} article={article} />)}
      </div>
      <Box mt={5}>
        <MadeWithLove />
      </Box>
    </div>
    )
  }
}

export default App;