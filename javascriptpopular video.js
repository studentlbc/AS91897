const API_KEY = "YOUR_API_KEY";
const CHANNEL_ID = "YOUR_CHANNEL_ID";

async function showPopularVideos() {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&order=viewCount&type=video&maxResults=10&key=${API_KEY}`;

    const response = await fetch(url);
    const data = await response.json();

    const container = document.getElementById("video-container");

    data.items.forEach(video => {
        container.innerHTML += `
            <iframe
                src="https://www.youtube.com/embed/${video.id.videoId}"
                title="${video.snippet.title}"
                allowfullscreen>
            </iframe>
        `;
    });
}

showPopularVideos();
