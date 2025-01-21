import kidsData from './kidsDataSets.js';
import imageUrls from './imageUrls.js';

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const storyId = urlParams.get('id');
    
    if (storyId) {
        loadStory(storyId);
    }
});

function loadStory(storyId) {
    const story = kidsData.stories.find(s => s.id === storyId);
    if (!story) return;

    const contentContainer = document.getElementById('storyContent');
    const choicesContainer = document.getElementById('storyChoices');
    const gameContainer = document.getElementById('gameCta');

    // 첫 페이지 렌더링 (인사)
    contentContainer.innerHTML = `
        <div class="chapter-content">
            <h2>${story.chapters[0].title}</h2>
            <p>${story.chapters[0].text}</p>
        </div>
    `;

    // 선택지 버튼 생성
    choicesContainer.innerHTML = `
        <button class="choice-button" id="btnLike">
            <span class="emoji">👍</span> 좋아요!
        </button>
        <button class="choice-button" id="btnNext">
            <span class="emoji">➡️</span> 다음으로
        </button>
    `;
     
    // 이벤트 리스너 추가
    document.getElementById('btnLike').addEventListener('click', () => {
        loadChapter(story.id, story.chapters[1].id);
    });
    document.getElementById('btnNext').addEventListener('click', () => {
        loadChapter(story.id, story.chapters[1].id);
    });

    // 첫 페이지에서는 게임 CTA 숨김
    gameContainer.innerHTML = '';
}

function loadChapter(storyId, chapterId) {
    const story = kidsData.stories.find(s => s.id === storyId);
    const chapter = story.chapters.find(ch => ch.id === chapterId);
    if (!chapter) return;

    const contentContainer = document.getElementById('storyContent');
    const choicesContainer = document.getElementById('storyChoices');
    const gameContainer = document.getElementById('gameCta');

    // 챕터 내용 표시
    contentContainer.innerHTML = `
        <div class="chapter-content">
            <h2>${chapter.title}</h2>
            <p>${chapter.text}</p>
        </div>
    `;

    // 선택지 버튼 생성 및 이벤트 연결
    if (chapter.options) {
        choicesContainer.innerHTML = chapter.options.map(option => `
            <button class="choice-button" data-next="${option.nextChapterId}">
                <span class="emoji">✨</span> ${option.text}
            </button>
        `).join('');

        // 버튼 클릭 이벤트 추가
        const buttons = choicesContainer.querySelectorAll('.choice-button');
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const nextChapterId = button.dataset.next;
                loadChapter(storyId, nextChapterId);
            });
        });
    }

    // 게임 연결
    if (chapter.hasGame) {
        gameContainer.innerHTML = `
            <img src="${imageUrls.setThumbnails[story.id]}" 
                 alt="게임 이미지" 
                 class="game-cta-image">
            <div class="game-cta-content">
                <h3>재미있는 게임하기</h3>
                <p>이야기와 함께 게임도 즐겨보세요!</p>
                <button class="game-button" data-game="${chapter.gameType}">게임 시작하기</button>
            </div>
        `;

        // 게임 시작 버튼 이벤트
        document.querySelector('.game-button').addEventListener('click', () => {
            const gameType = chapter.gameType;
            startGame(gameType);  // 게임 시작 함수 (아직 구현 필요)
        });
    }
}
