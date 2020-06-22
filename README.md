If you've come here from my resume, there are a couple things to note:
1. You can find the actual demo that uses this code at bit.ly/ck-demo-1
2. This demo is mainly to demonstrate my technical skills, but most of this project is actually something I built for my family to use as our method of sharing interesting articles - there's more on that below. 
3. Please reach out to me on LinkedIn if you find this interesting - I'd love to hear any feedback or if you're able to break the app completely

Original README starts below:
__________________

My family is a bunch of nerds and we love to share articles with each other, commenting, debating, and just sharing our thoughts. We always share articles and make comments by email, but articles get lost in everyone's inbox after a day or two. I built this so that we had a place to nerd out and share interesting things we read and get some thoughts/ideas flowing. As you can see from the list below, I plan on adding more features soon. 

Here's some techinal stuff:

To get started, clone the repo and type in the Terminal 
`npm install`

If you're having issues with node, run 

`sudo rm -rf /usr/local/lib/node_modules/npm`
`brew reinstall node`
 

Once you have all your packages installed, run
`npm run server-dev` to get the server going in a dev environment and
`npm run react-dev` to display the front-end

You can find the local version at http://localhost:3000/


Done
- Update Readme
- Database creation
- Ability to post articles to database
- Post to github 
- Display all posted articles
- Deploy live on heroku
- Ability to add category/description to articles and filter view by article
- Ability to upvote/downvote on articles
- Ability to display comments on articles
- Ability to comment on articles
- Ability to post apostrophes
- Re-render on vote
- Add category: 2019 Cruise Preparation, Self-Improvements, Written by Me!
- Link verification
- Recreate database
- Set up bit.ly
- Styling
- Grid for name/category
- Add banners
- Add code repo + LinkedIn links
- Update post + comment name from select list to free text 
- Implement server connection pool to prevent server timeout

Future
- Send notification whenever someone adds an article
- Ability to add pictures / PDF	
- Picture background and click on yourself to post article
- Scrape twitter for any articles posted by famous people (with tweet as summary)
- Convert articles to PDF for easy viewing (ads or no ads)
- Authentication
- Chrome plugin - based on usersnap design
- Weekly email sent with articles posted since last time
- Filter all messages for particular user when click on user
- Populate info based on link - uses API
- Schedule for when these articles are relevant (Itinerary planning)
- Map view for where these articles are relevant (Itinerary planning)
- Sponsored travelers (Itinerary planning)
