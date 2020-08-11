export default function fetchData() {
  const url = 'http://localhost:3000/products';
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      return error;
    });
}
