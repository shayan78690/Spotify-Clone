const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('input', function() {
    const filter = searchInput.value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        if (title.includes(filter)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
});

function playSong(src) {
    const audioPlayer = document.getElementById('audioPlayer');
    const audioSource = document.getElementById('audioSource');

    audioSource.src = src; 
    audioPlayer.load(); 
    audioPlayer.play(); 
}

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        const songSrc = card.getAttribute('data-song-src'); 
        playSong(songSrc);
    });
});


document.querySelectorAll('.like-btn').forEach(button => {
    button.addEventListener('click', () => {
        const liked = button.getAttribute('data-liked') === 'true';
        button.textContent = liked ? 'Like' : 'Liked';
        button.setAttribute('data-liked', !liked);
    });
});

document.querySelectorAll('.dislike-btn').forEach(button => {
    button.addEventListener('click', () => {
        const disliked = button.getAttribute('data-disliked') === 'true';
        button.textContent = disliked ? 'Dislike' : 'Disliked';
        button.setAttribute('data-disliked', !disliked);
    });
});

const createPlaylistButton = document.getElementById('createPlaylist');
const playlistContainer = document.getElementById('playlistContainer');

createPlaylistButton.addEventListener('click', () => {
    const playlistName = document.getElementById('playlistName').value;
    if (playlistName) {
        const playlistDiv = document.createElement('div');
        playlistDiv.textContent = playlistName;
        playlistContainer.appendChild(playlistDiv);
        document.getElementById('playlistName').value = ''; 
    }
});


