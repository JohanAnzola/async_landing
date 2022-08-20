const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC8hRNWq1YDN34LpJGgu19FA&part=snippet%2Cid&order=date&maxResults=10';

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8208b8938emsh1d37b17810f8b67p17cc74jsn33cd7d510012',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};


async function fetchData(urlApi) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const videos = await fetchData(API);
    let view = `
    ${videos.items.map(video => `
      <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-300">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.snippet.title}
          </h3>
        </div>
        <div class="mt-4 flex justify-between">
          <h4 class="text-sm text-gray-500">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.snippet.description}
          </h4>
        </div>
      </div>
    `).slice(0,10).join('')}

    `;
    content.innerHTML = view;
  } catch {
    console.log(error);

  }
})();