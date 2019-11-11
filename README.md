# First Hundred
A digital scrapbook/journal created to help people keep track of the first hundred activities and events they want to participate in.


[Front-end Client](https://kimdolion.github.io/first-hundred-client/#/)

[Front-end Repo](https://github.com/kimdolion/first-hundred-client)

[Back-end Client]()

[Back-end Repo](https://github.com/kimdolion/first-hundred-backend)

## Technologies Used
React, React Boostrap, Axios, MongoDB, Express, HTML, CSS, JS

  #### list actions currently supported:
  - Create lists
  - (Read) See
    - All lists
    - All lists by owner
    - Show list by id
  - Edit your list
  - Delete your list

##### End Point Testing

<ul style="list-style-type:none;">
  <li>get -> #index, #show</li>
  <li>post -> #create</li>
  <li>patch -> #update</li>
  <li>delete -> #destroy</li>
</ul>

## Resource Routes
`user routes`:
  - `/sign-up` - POST for sign up credentials
  - `/sign-in` - POST for sign in credentials
  - `/change-password` - PATCH for updating credentials
  - `/sign-out` - DELETE for sign out

`list routes`:
  - `/lists` - GET for index of lists
  - `/lists/:id` - GET for individual list
  - `/lists` - POST for list creation (applies ownership)
  - `/lists/:id` - PATCH for editting list (requires ownership)
  - `/lists/:id` - DELETE for deleting list (requires ownership)

## Development Process
Planning the project
I've always wanted to contribute something to my family that would be useful especially as we make dreams of making our lives easier in some way. Talking with my sister about the many projects that spark joy for her made me realize I could try to make a digital version of a project she has had on her mind for years. We've often discussed the audience, purpose, and even some prototypes of what this project could look like.

## Unsolved Problems
None so far?

## Wireframes and User Stories

[User Stories](https://docs.google.com/document/d/1rU0EMt1qlRVzYi5IN6PDTBv9FH-f241SB1buLiKU5VY/edit?usp=sharing)

[Wireframes](https://docs.google.com/document/d/1fBl3dgxk_mEDYv046e3K_8C_2X62qZ7jR50VZF5Wqb0/edit?usp=sharing)

[ERD](https://docs.google.com/document/d/1WzmbIm2MouuBNcSU2IIVc5zPz6RUSRO5YNMfSED4eD8/edit?usp=sharing)

## Stretch Goals
I have a number of stretch goals I'd love to implement in future iterations.

- Let other users copy a bucket list item for themselves.
- Share lists to social media/websites

## Additional Resources
