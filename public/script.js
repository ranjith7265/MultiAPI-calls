// API URLs
const apiUrls = [
  'https://jsonplaceholder.typicode.com/todos/1',
  'https://jsonplaceholder.typicode.com/posts/1',
  'https://jsonplaceholder.typicode.com/comments/1',
  'https://jsonplaceholder.typicode.com/users/1',
  'https://jsonplaceholder.typicode.com/albums/1'
];

// Create buttons
const buttonsContainer = document.querySelector('.buttons-container');
for (let i = 0; i < apiUrls.length; i++) {
  const button = document.createElement('button');
  button.textContent = `API ${i+1}`;
  button.addEventListener('click', () => {
    fetch(apiUrls[i])
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  });
  buttonsContainer.appendChild(button);
}
