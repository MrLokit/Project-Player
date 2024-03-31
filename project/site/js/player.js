const themeToggle = document.getElementById('theme_toggle');
const commSection = document.querySelector('.comment-section');
const commentInput = document.getElementById('commentInput');
const comments = document.getElementById('comments');
const addCommentButton = document.querySelector('button');
const sentComment = document.querySelector('#comments div');
const body = document.body;

// Dark theme
if (localStorage.getItem('theme') === 'dark') {
    themeToggle.checked = true;
    applyDarkTheme();
}

themeToggle.addEventListener('change', function() {
    if (this.checked) {
        localStorage.setItem('theme', 'dark');
        applyDarkTheme();
    } else {
        localStorage.removeItem('theme');
        applyLightTheme();
    }
});

function applyDarkTheme() {
    body.style.backgroundColor = '#202020';
    comments.style.backgroundColor = '#202020';

    if (commSection) {
        commSection.classList.add('dark-theme');
        commSection.classList.remove('light-theme');
    }
    if (sentComment) {
        sentComment.classList.add('dark-theme');
        sentComment.classList.remove('light-theme');
    }
    if (commentInput) {
        commentInput.classList.add('dark-theme');
        commentInput.classList.remove('light-theme');
    }
    if (addCommentButton) {
        addCommentButton.classList.add('dark-theme');
        addCommentButton.classList.remove('light-theme');
    }
    if (comments) {
        comments.classList.add('dark-theme');
        comments.classList.remove('light-theme');
    }
    
    body.style.color = '#dcdcdc';
    body.classList.add('dark-theme');
}

function applyLightTheme() {
    body.style.backgroundColor = '#fff';
    
    if (commSection) {
        commSection.classList.add('light-theme');
        commSection.classList.remove('dark-theme');
    }
    if (sentComment) {
        sentComment.classList.add('light-theme');
        sentComment.classList.remove('dark-theme');
    }
    if (commentInput) {
        commentInput.classList.add('light-theme');
        commentInput.classList.remove('dark-theme');
    }
    if (addCommentButton) {
        addCommentButton.classList.add('light-theme');
        addCommentButton.classList.remove('dark-theme');
    }
    if (comments) {
        comments.classList.add('light-theme');
        comments.classList.remove('dark-theme');
        comments.style.backgroundColor = '#fff';
    }
    
    body.style.color = '#000';
    body.classList.remove('dark-theme');
}

document.addEventListener('DOMContentLoaded', () => {
    body.style.visibility = 'visible';
});





// Comments
const commentsContainer = document.getElementById('comments');

function loadComments() {
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.forEach(function(comment) {
        appendComment(comment);
    });
}

function addComment() {
    const commentText = commentInput.value.trim();
    if (commentText !== '') {
        const comment = { id: Date.now(), text: commentText, date: new Date().toLocaleString() };
        appendComment(comment);

        let comments = JSON.parse(localStorage.getItem('comments')) || [];
        comments.push(comment);
        localStorage.setItem('comments', JSON.stringify(comments));

        commentInput.value = '';
    }
}

function appendComment(comment) {
    const commentElement = document.createElement('div');
    commentElement.setAttribute('data-id', comment.id);
    commentElement.innerHTML =
        '<p style="color:inherit;">' + comment.text + '</p>' +
        '<span style="color:inherit;">' + comment.date + '</span>';

    commentsContainer.insertBefore(commentElement, commentsContainer.firstChild);
}

function deleteComment(id) {
    let comments = JSON.parse(localStorage.getItem('comments')) || [];
    const updatedComments = comments.filter(function(comment) {
        return comment.id !== id;
    });
    localStorage.setItem('comments', JSON.stringify(updatedComments));

    const commentElement = document.querySelector('div[data-id="' + id + '"]');
    if (commentElement) {
        commentElement.remove();
    }
}

function handleCommentButtonClick(event) {
    event.preventDefault();
    addComment();
}

document.addEventListener('DOMContentLoaded', function() {
    loadComments();
});

addCommentButton.addEventListener('click', handleCommentButtonClick);





// Player
const seasonDropdown = document.getElementById('season-dropdown');
const episodeDropdown = document.getElementById('episode-dropdown');
const voiceoverDropdown = document.getElementById('voiceover');
const video = document.querySelector('.video');

const videosBySeasonEpisodeVoiceover = {
    season1: {
        episode1: {
            voice1: '../videos/arrow/lostfilm/s1/Arrow.S01E01.720p.WEB.rus.LostFilm.TV.mp4',
            voice2: '../videos/season1/episode1/voice2.mp4'
        },
        episode2: {
            voice1: '../videos/arrow/lostfilm/s1/Arrow.S01E02.720p.WEB.rus.LostFilm.TV.mp4',
            voice2: '../videos/season1/episode2/voice2.mp4'
        },
        episode3: {
            voice1: '../videos/arrow/lostfilm/s1/Arrow.S01E03.720p.WEB.rus.LostFilm.TV.mp4',
            voice2: '../videos/season1/episode1/voice2.mp4'
        },
        episode4: {
            voice1: '../videos/arrow/lostfilm/s1/Arrow.S01E04.720p.WEB.rus.LostFilm.TV.mp4',
            voice2: '../videos/season1/episode2/voice2.mp4'
        },
        episode5: {
            voice1: '../videos/arrow/lostfilm/s1/Arrow.S01E05.720p.WEB.rus.LostFilm.TV.mp4',
            voice2: '../videos/season1/episode1/voice2.mp4'
        },
        episode6: {
            voice1: '../videos/arrow/lostfilm/s1/Arrow.S01E06.720p.WEB.rus.LostFilm.TV.mp4',
            voice2: '../videos/season1/episode2/voice2.mp4'
        },
        episode7: {
            voice1: '../videos/arrow/lostfilm/s1/Arrow.S01E07.720p.WEB.rus.LostFilm.TV.mp4',
            voice2: '../videos/season1/episode1/voice2.mp4'
        },
        episode8: {
            voice1: '../videos/arrow/lostfilm/s1/Arrow.S01E08.720p.WEB.rus.LostFilm.TV.mp4',
            voice2: '../videos/season1/episode2/voice2.mp4'
        },
        episode9: {
            voice1: '../videos/arrow/lostfilm/s1/Arrow.S01E09.720p.WEB.rus.LostFilm.TV.mp4',
            voice2: '../videos/season1/episode1/voice2.mp4'
        },
        episode10: {
            voice1: '../videos/arrow/lostfilm/s1/Arrow.S01E10.720p.WEB.rus.LostFilm.TV.mp4',
            voice2: '../videos/season1/episode2/voice2.mp4'
        },
        episode11: {
            voice1: '../videos/arrow/lostfilm/s1/Arrow.S01E11.720p.WEB.rus.LostFilm.TV.mp4',
            voice2: '../videos/season1/episode1/voice2.mp4'
        },
        episode12: {
            voice1: '../videos/arrow/lostfilm/s1/Arrow.S01E12.720p.WEB.rus.LostFilm.TV.mp4',
            voice2: '../videos/season1/episode2/voice2.mp4'
        },
        episode13: {
            voice1: '../videos/arrow/lostfilm/s1/Arrow.S01E13.720p.WEB.rus.LostFilm.TV.mp4',
            voice2: '../videos/season1/episode1/voice2.mp4'
        },
        episode14: {
            voice1: '../videos/arrow/lostfilm/s1/Arrow.S01E14.720p.WEB.rus.LostFilm.TV.mp4',
            voice2: '../videos/season1/episode2/voice2.mp4'
        },
        episode15: {
            voice1: '../videos/arrow/lostfilm/s1/Arrow.S01E15.720p.WEB.rus.LostFilm.TV.mp4',
            voice2: '../videos/season1/episode1/voice2.mp4'
        },
        episode16: {
            voice1: '../videos/arrow/lostfilm/s1/Arrow.S01E16.720p.WEB.rus.LostFilm.TV.mp4',
            voice2: '../videos/season1/episode2/voice2.mp4'
        },
        episode17: {
            voice1: '../videos/arrow/lostfilm/s1/Arrow.S01E17.720p.WEB.rus.LostFilm.TV.mp4',
            voice2: '../videos/season1/episode1/voice2.mp4'
        },
        episode18: {
            voice1: '../videos/arrow/lostfilm/s1/Arrow.S01E18.720p.WEB.rus.LostFilm.TV.mp4',
            voice2: '../videos/season1/episode2/voice2.mp4'
        },
        episode19: {
            voice1: '../videos/arrow/lostfilm/s1/Arrow.S01E19.720p.WEB.rus.LostFilm.TV.mp4',
            voice2: '../videos/season1/episode1/voice2.mp4'
        },
        episode20: {
            voice1: '../videos/arrow/lostfilm/s1/Arrow.S01E20.720p.WEB.rus.LostFilm.TV.mp4',
            voice2: '../videos/season1/episode2/voice2.mp4'
        },
        episode21: {
            voice1: '../videos/arrow/lostfilm/s1/Arrow.S01E21.720p.WEB.rus.LostFilm.TV.mp4',
            voice2: '../videos/season1/episode1/voice2.mp4'
        },
        episode22: {
            voice1: '../videos/arrow/lostfilm/s1/Arrow.S01E22.720p.WEB.rus.LostFilm.TV.mp4',
            voice2: '../videos/season1/episode2/voice2.mp4'
        },
        episode23: {
            voice1: '../videos/arrow/lostfilm/s1/Arrow.S01E23.720p.WEB.rus.LostFilm.TV.mp4',
            voice2: '../videos/season1/episode1/voice2.mp4'
        }
        // Добавьте остальные серии первого сезона и озвучки
    },
    season2: {
        episode1: {
            voice1: '../videos/season2/episode1/voice1.mp4',
            voice2: '../videos/season2/episode1/voice2.mp4'
        },
        episode2: {
            voice1: '../videos/season2/episode2/voice1.mp4',
            voice2: '../videos/season2/episode2/voice2.mp4'
        }
        // Добавьте остальные серии второго сезона и озвучки
    }
    // Добавьте другие сезоны, серии и озвучки по мере необходимости
};

function updateVideoSource() {
    const selectedSeason = seasonDropdown.value;
    const selectedEpisode = episodeDropdown.value;
    const selectedVoiceover = voiceoverDropdown.value;
    
    const videoSource = videosBySeasonEpisodeVoiceover[selectedSeason][selectedEpisode][selectedVoiceover];

    video.src = videoSource;
    video.load();
    video.play();
}

seasonDropdown.addEventListener('change', updateVideoSource);
episodeDropdown.addEventListener('change', updateVideoSource);
voiceoverDropdown.addEventListener('change', updateVideoSource);

const episodesBySeason = {
    season1: ["Эпизод 1", "Эпизод 2", "Эпизод 3", "Эпизод 4", "Эпизод 5", "Эпизод 6", "Эпизод 7", "Эпизод 8", "Эпизод 9", "Эпизод 10", "Эпизод 11", "Эпизод 12", "Эпизод 13", "Эпизод 14", "Эпизод 15", "Эпизод 16", "Эпизод 17", "Эпизод 18", "Эпизод 19", "Эпизод 20", "Эпизод 21", "Эпизод 22", "Эпизод 23"],
    season2: ["Эпизод 1", "Эпизод 2", "Эпизод 3", "Эпизод 4", "Эпизод 5"]
    // Добавьте остальные сезоны и их серии по мере необходимости
};

function updateEpisodeDropdown() {
    const selectedSeason = seasonDropdown.value;
    const episodes = episodesBySeason[selectedSeason];

    episodeDropdown.innerHTML = '';
    
    episodes.forEach((episode, index) => {
        const option = document.createElement('option');
        option.value = 'episode' + (index + 1);
        option.textContent = episode;
        episodeDropdown.appendChild(option);
    });
}

updateEpisodeDropdown();

seasonDropdown.addEventListener('change', updateEpisodeDropdown);
