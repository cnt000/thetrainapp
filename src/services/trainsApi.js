const trainsApi = ({ action }) =>
  fetch(action)
    .then(response => response.json())
    .catch(error => {
      throw error;
    });

export default trainsApi;
