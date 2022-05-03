# Homiengineering Challenge 

Thank you for your interest in joining Homie as a Homiengineer — we're glad you're here. 

This is your technical challenge. This challenge is divided in two, a fron-end and a back-end challenge. But, bear in mind: **we like to hire people, engineers, not JavaScript or Ruby programmers.** However, we know that many of people like to specialize on a certain part of the stack, so that's why we're setting this challenge this way.

To apply to one of our positions at Homie, follow these steps:

1. Fork this repo into your own GitHub account. Pick the latest commit on the `main` branch.
2. Choose your challenge: front-end, back-end or a combination of both.
3. Work on your assigment. 
4. Once you have what you want to deliver as your challenge, open a PR to your own fork with your modifications to the project.
5. Send us a link to that PR so we can take a look at it.

We're going to be paying close attention to:

1. How you commit the code (please don't squash your commits)
2. Your ability to work in an organized manner
3. Your ability to create documentation that explains what you're doing and why
4. How you present your work, in general

And that's it! Good luck! 

## About the application process

**We don't want to make you work without the right expectations, so read this carefully.**

Our process usually goes as follows:

1. You apply for an open position. This means that you've sent us your resume and are on our radar. 
2. A member of our recruiting team schedules a call with you to get to know you more. This is an informal interview. If they think that your profile could fit within our team, you move to the next interview.
3. The next step is an engineering culture interview. We'll get to know more of you as an engineer, your work philosophy and desired role.
4. We'll then assess your technical challenge. If your solution sparks our interest, we'll move you to the final technical interview.
5. In the technical interview we'll ask you to share with us details of your implementation and what you would've done different. This is your opportunity to impress us.

You may start poking around with the challenge while the interview process is underway. If you found this challenge through GitHub or Twitter, please take into consideration that _we won't be reviewing your challenge submission untill you've formally started the interview process with us_. That said, feel free to play around with the challenge, use it to study and learn.


---

## Github Repositories Catalog (Backend)

### Description

For this challenge you have to implement a basic catalog for a github user's repository.
It has to import all repositories for a given user to the database, implement required relationships if any.
And you have to create an endpoint that allows you to search a repository by name.

You must use the Github API (It is public and free!) to fetch the information about any public user.

NOTE: There is code already on the project that you are encouraged to improve, refactor or rewrite as needed.
It has mistakes on purpose and finding and fixing this mistakes gives you extra points

### Stack

- Ruby on Rails
- PostgreSQL
- [Optional] Searchkick with OpenSearch
- [Optional] ActiveJob with Sidekiq
- [Optional] Redis

### What are we going to evaluate?

- How to import data from an external API
- How well structured is your code (avoid huge classes/functions)
- How search feature is implemented
- How tests handles the happy path

### Minimum Required

- [ ] Repositories and User data stored on the database (You are free to define the models and relationships if required)
- [ ] Search feature for repositories (Naive search is okay)
- [ ] Unit tests
- [ ] Integrations tests
- [ ] Basic endpoint security. (Validate required / optional parameters and user input sanitization)

### Nice to have extras

- [ ] OpenAPI Schema Definitions
- [ ] Advanced filtering (See available filters on: <https://github.com/yknx4?tab=repositories>)
- [ ] Integration with existing tools (ie. Searchkick)
- [ ] Graceful error handling
- [ ] Background Synchronization of API
- [ ] Retry strategy on failues
- [ ] Caching
- [ ] Pagination
- [ ] Meaningful Logging
- [ ] Add useful gems for development
- [ ] Anything... Your imagination is the limit

## Recreate Github Repositories Page (Frontend)

### Description

For this challenge you have to recreate the github repositories page (<https://github.com/yknx4?tab=repositories>) for any given user.
It has to show the repositories list with basic information about the repository. Also you must be able to search by name.
The content must be comfortably visible in a standard display with a resolution of 1920×1080

You must use the Github API (It is public and free!) to fetch the information about any public user. (In case you are applying for full stack, then you must use your own backend implementations for this)

Example: <https://imgur.com/V4j8V9v>

NOTE: There is code already on the project that you are encouraged to improve, refactor or rewrite as needed.
It has mistakes on purpose and finding and fixing this mistakes gives you extra points

### Stack

- React <with hooks> (Create React App is ok)
- Typescript
- CSS (SASS, SCSS, PostCSS is ok) (Frameworks like Bootstrap / Tailwind is ok)

### What are we going to evaluate?

- How to connect to an external API
- How reusable are the Components
- How to filter results
- How to create tests
  
### Minimum Required

- [ ] Repositories List
- [ ] Search by Repository Name
- [ ] Repository Card with Name and Description
- [ ] Basic Tests with Jest (Snapshot Tests)
- [ ] Basic Page Layout (Header, Content and Footer)
  
### Nice to have extras

- [ ] Profile Info
- [ ] Filtering
- [ ] Activity Graph
- [ ] Detailed Repo Info Card
- [ ] Animations
- [ ] Icons (Font Awesome)
- [ ] Integration Tests (Jest)
- [ ] End to End Tests (Cypress)
- [ ] Resposive Layout
- [ ] Dark Mode / Light Mode
- [ ] Cell Recycling View
- [ ] Suspense / Loader
- [ ] Caching
- [ ] Pagination
- [ ] Anything... Your imagination is the limit

# Development

## Start Environment

- run `yarn install` on root directory
- run `bundle install` on backend directory
- run `yarn install` on e2e_tests directory
- run `yarn install` on frontned directory
- run `docker-compose up -d` to start stack
- run `bundle exec rails db:create` on backend directory
- run `bundle exec rails db:migrate` on backend directory
- run `bundle exec rails server` on backend directory
- run `yarn start` on frontend directory
