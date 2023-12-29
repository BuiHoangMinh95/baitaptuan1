import fetch from 'node-fetch';

function fetchData(): Promise<any> {
  const apiUrl = 'http://localhost:3000/posts';
  return new Promise((resolve, reject) => {
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        reject(error);
      });
  });
}

fetchData()
  .then(data => {
    console.log('Data from API:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
