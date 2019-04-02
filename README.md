This is a starter dev kit with React, Express, and Mongo/MySQL. I'll be using this kit to start building a small app for the Keating/Russ family to post/comment/vote on articles. They will start off being grouped in large categories, like politics, sports, productivitym, etc.

Here's some techinal stuff:

To get started, type in the Terminal 
`npm install`

If you're having issues with node, run 

`sudo rm -rf /usr/local/lib/node_modules/npm`
`brew reinstall node`


Once you have all your packages installed, run
`npm run server-dev` to get the program going in a dev environment. 


DONE
- Update Readme
- Database creation
- Ability to post articles to database
- Post to github 
- Display all posted articles
- Deploy live on heroku
- Ability to add category/description to articles and filter view by article

Here is the order in which I am thinking of building this out
- Ability to comment and upvote/downvote on articles - April 11
- Authentication - April 30
- Convert articles to PDF for easy viewing (ads or no ads) - May 10
- Scrape twitter for any articles posted by famous people - May 17
- Chrome plugin - based on usersnap design - June 1
