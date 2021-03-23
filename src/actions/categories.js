import SUCCESSFULLY_CREATED_CATEGORIES from ".";

export const createCategory = (formData) => {
  return (dispatch) => {
    fetch('http://localhost:3001/categories', {
      method: 'POST',
      body: formData 
    })

      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          return response.json().then(errors => Promise.reject(errors));
        }
      })
      .then(categoryJson => {
        dispatch({
          type: SUCCESSFULLY_CREATED_CATEGORIES,
          payload: categoryJson
        })
      })
  }
}