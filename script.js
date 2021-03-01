const btn = document.querySelector('.btn');
const joke = document.querySelector('.joke');

const getDadJoke = async () => {
    const result = await axios.get('https://icanhazdadjoke.com/', {headers: {Accept: 
                                                                'application/json'}});
    joke.innerHTML = result.data.joke;
}
btn.addEventListener('click', getDadJoke);