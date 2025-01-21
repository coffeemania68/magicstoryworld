import kidsData from './kidsDataSets.js';
import imageUrls from './imageUrls.js';

document.addEventListener('DOMContentLoaded', () => {
    // URL에서 스토리 ID 가져오기
    const urlParams = new URLSearchParams(window.location.search);
    const storyId = urlParams.get('id');
    
    if (storyId) {
        loadStory(storyId);
    }
});

function loadStory(storyId) {
    const story = kidsData.stories.find(s => s.id === storyId);
    if (!story) return;

    const storyContent = document.getElementById('storyContent');
    const storyChoices = document.getElementById('storyChoices');
    const gameCta = document.getElementById('gameCta');

    // 스토리 내용 표시
    storyContent.innerHTML = `
        <h1>${story.title}</h1>
        <p>${story.chapters[0].text}</p>
    `;

    // 선택지 버튼 생성
    if (story.chapters[0].options) {
        story.chapters[0].options.forEach(option => {
            const button = document.createElement('button');
            button.className = 'choice-button';
            button.innerHTML = `
                <span class="emoji">🌟</span>
                ${option.text}
            `;
            button.addEventListener('click', () => {
                // 다음 챕터로 이동
                loadChapter(story, option.nextChapterId);
            });
            storyChoices.appendChild(button);
        });
    }

    // 게임 CTA 표시
    if (story.chapters[0].hasGame) {
        gameCta.innerHTML = `
            <img src="${imageUrls.setThumbnails['story' + story.number]}" 
                 alt="게임 이미지" 
                 class="game-cta-image">
            <div class="game-cta-content">
                <h3>재미있는 게임하기</h3>
                <p>이야기와 함께 게임도 즐겨보세요!</p>
                <button class="game-button">게임 시작하기</button>
            </div>
        `;
    }
}

function loadChapter(story, chapterId) {
    // 챕터 전환 로직
    const chapter = story.chapters.find(ch => ch.id === chapterId);
    if (!chapter) return;

    // 챕터 내용 업데이트
    // ... 챕터 전환 로직 구현
}
