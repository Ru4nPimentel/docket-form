export default async function ImgApi() {
  const imgSlide = document.querySelector('.slide');
  const dados = await fetch('https://picsum.photos/v2/list');
  const dadosJson = await dados.json();

  dadosJson.forEach(({ download_url, author }, index) => {
    const img = document.createElement('img');
    const liElement = document.createElement('li');
    img.setAttribute('src', download_url);
    img.setAttribute('alt', author);
    img.setAttribute('id', `img-${index}`);

    liElement.appendChild(img);
    imgSlide.appendChild(liElement);
  });
  return dadosJson ? true : false;
}
