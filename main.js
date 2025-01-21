import kidsData from './kidsDataSets.js';
import imageUrls from './imageUrls.js';

document.addEventListener('DOMContentLoaded', () => {
    const storyGrid = document.getElementById('storyGrid');
    
    // 스토리 카드 생성 및 그리드에 추가
    kidsData.stories.forEach(story => {
        const card = createStoryCard(story);
        storyGrid.appendChild(card);
    });
});

function createStoryCard(story) {
    const card = document.createElement('div');
    card.className = 'story-card';
    
    // 썸네일과 내용을 포함하는 구조 생성
    card.innerHTML = `
        <img src="${imageUrls.setThumbnails['story' + story.number]}" 
             alt="${story.title}" 
             class="story-thumbnail">
        <div class="story-content">
            <h2 class="story-title">${story.title}</h2>
            <p class="story-description">${story.description}</p>
        </div>
    `;

    // 카드 클릭 이벤트 추가
    card.addEventListener('click', () => {
        navigateToStory(story.id);
    });

    // 터치 디바이스를 위한 추가 이벤트
    card.addEventListener('touchstart', () => {
        card.style.transform = 'scale(0.98)';
    });

    card.addEventListener('touchend', () => {
        card.style.transform = 'scale(1)';
        navigateToStory(story.id);
    });

    return card;
}

function navigateToStory(storyId) {
    // 스토리 페이지로 이동
    window.location.href = `story.html?id=${storyId}`;
}
