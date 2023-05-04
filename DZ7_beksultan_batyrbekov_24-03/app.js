async function fetchNews() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const news = await response.json()
    return news;
}

function createNewsCard(news) {
    const newsCard = document.createElement('div')
    newsCard.classList.add('news-card')

    const newsImage = document.createElement('img')
    newsImage.src = 'https://picsum.photos/300/200';
    newsImage.alt = news.title;
    newsCard.appendChild(newsImage);

    const newsTitle = document.createElement('h2')
    newsTitle.textContent = news.title;
    newsCard.appendChild(newsTitle)

    const newsBody = document.createElement('p')
    newsBody.textContent = news.body;
    newsCard.appendChild(newsBody);

    return newsCard;
}

async function renderNews() {
    const newsContainer = document.querySelector('.news-container')
    const news = await fetchNews();

    news.forEach((newsItem) => {
        const newsCard = createNewsCard(newsItem)
        newsContainer.appendChild(newsCard);
    })
}
renderNews()