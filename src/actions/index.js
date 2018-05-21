
// normally this comes from process.env.API
const API = process.env.API ||
  'https://powerful-beyond-70119.herokuapp.com/jokes'

export const ADD_JOKE = 'ADD_JOKE'
export const addJoke = joke =>
  async (dispatch) => {
    console.log("joke to send to API", joke)
    const response = await fetch(API, {
      method: 'POST',
      body: JSON.stringify(joke),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    const newJoke = await response.json()

    // this IS redux...
    dispatch({
      type: ADD_JOKE,
      payload: newJoke // {id: 1, question: '...', answer: ''}
    })
  }

export const GET_JOKES = 'GET_JOKES'
export const UPDATE_JOKES = 'UPDATE_JOKES'

export const getJokes = () => {
  return async (dispatch) => {
    const response = await fetch(API)
    const jokes = await response.json()

    dispatch({
      type: UPDATE_JOKES,
      jokes
    })
  }
}
