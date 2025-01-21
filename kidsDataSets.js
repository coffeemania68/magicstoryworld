export default {
    "seriesInfo": {
        "title": "매직 스토리 월드",
        "description": "신비한 이야기와 함께하는 24가지 모험!",
        "season1": {
            "title": "매직 스토리 월드 시즌 1",
            "subtitle": "12가지 신비한 모험",
            "period": "2024 상반기"
        },
        "season2": {
            "title": "매직 스토리 월드 시즌 2",
            "subtitle": "12가지 특별한 모험",
            "period": "2024 하반기"
        }
    },
    "stories": [
        {
            "id": "science-wonderland",
            "title": "이상한 나라의 과학 실험",
            "description": "앨리스와 함께하는 신기한 과학의 세계!",
            "thumbnail": "https://example.com/thumbnails/science-wonderland.jpg",
            "category": "세계 동화",
            "season": 1,
            "number": 1,
            "chapters": [
                {
                    "id": "chapter1",
                    "title": "토끼굴 속 실험실",
                    "text": "하얀 토끼를 따라 들어간 굴속에는 신기한 실험도구들이 가득했어요...",
                    "image": "https://example.com/chapters/science-wonderland-ch1.jpg",
                    "hasGame": true,
                    "gameType": "puzzle",
                    "gameData": {
                        "type": "실험도구 맞추기",
                        "difficulty": "easy"
                    },
                    "options": [
                        {
                            "text": "빨간 물약 마시기",
                            "nextChapterId": "chapter2"
                        },
                        {
                            "text": "파란 물약 마시기",
                            "nextChapterId": "chapter3"
                        }
                    ]
                }
            ]
        },
        {
            "id": "gumiho-school",
            "title": "구미호의 신비한 학교생활",
            "description": "여우 친구들과 함께하는 신기한 학교!",
            "thumbnail": "https://example.com/thumbnails/gumiho-school.jpg",
            "category": "한국 전래",
            "season": 1,
            "number": 2,
            "chapters": [
                {
                    "id": "chapter1",
                    "title": "첫 등교날",
                    "text": "새로 전학 온 학교에는 여우 꼬리를 가진 친구들이 가득...",
                    "image": "https://example.com/chapters/gumiho-school-ch1.jpg",
                    "hasGame": true,
                    "gameType": "matching",
                    "gameData": {
                        "type": "여우 친구 찾기",
                        "difficulty": "easy"
                    }
                }
            ]
        },
        {
            "id": "thor-lab",
            "title": "토르의 번개 연구소",
            "description": "천둥의 신 토르와 함께 전기와 번개의 비밀을 알아보아요!",
            "thumbnail": "https://example.com/thumbnails/thor-lab.jpg",
            "category": "북유럽 신화",
            "season": 1,
            "number": 3,
            "chapters": [
                {
                    "id": "chapter1",
                    "title": "묠니르의 비밀",
                    "text": "토르의 망치 묠니르에서 반짝이는 번개를 관찰하던 중...",
                    "image": "https://example.com/chapters/thor-lab-ch1.jpg",
                    "hasGame": true,
                    "gameType": "action",
                    "gameData": {
                        "type": "번개 제어하기",
                        "difficulty": "medium",
                        "items": ["망치", "번개구름", "전기"]
                    },
                    "options": [
                        {
                            "text": "번개 실험하기",
                            "nextChapterId": "chapter2"
                        },
                        {
                            "text": "안전 장비 착용하기",
                            "nextChapterId": "chapter3"
                        }
                    ]
                }
            ]
        },
        {
            "id": "mermaid-eco",
            "title": "인어공주의 해양 환경 교실",
            "description": "아리엘과 함께 깨끗한 바다를 만들어보아요!",
            "thumbnail": "https://example.com/thumbnails/mermaid-eco.jpg",
            "category": "세계 동화",
            "season": 1,
            "number": 4,
            "chapters": [
                {
                    "id": "chapter1",
                    "title": "플라스틱 섬의 비밀",
                    "text": "인어공주 아리엘이 발견한 거대한 쓰레기 섬에서...",
                    "image": "https://example.com/chapters/mermaid-eco-ch1.jpg",
                    "hasGame": true,
                    "gameType": "collection",
                    "gameData": {
                        "type": "해양 쓰레기 분리수거",
                        "difficulty": "easy",
                        "items": ["플라스틱", "비닐", "유리", "재활용"]
                    },
                    "options": [
                        {
                            "text": "해양 생물 구조하기",
                            "nextChapterId": "chapter2"
                        },
                        {
                            "text": "바다 청소하기",
                            "nextChapterId": "chapter3"
                        }
                    ]
                }
            ]
        },
        {
            "id": "dokkaebi-delivery",
            "title": "도깨비 마을의 특별한 심부름",
            "description": "도깨비 방망이를 든 특급 배달부의 신나는 모험!",
            "thumbnail": "https://example.com/thumbnails/dokkaebi-delivery.jpg",
            "category": "한국 전래",
            "season": 1,
            "number": 5,
            "chapters": [
                {
                    "id": "chapter1",
                    "title": "도깨비 방망이 배달부",
                    "text": "도깨비 마을에서 가장 바쁜 배달부가 되어보아요...",
                    "image": "https://example.com/chapters/dokkaebi-ch1.jpg",
                    "hasGame": true,
                    "gameType": "delivery",
                    "gameData": {
                        "type": "신비한 물건 배달하기",
                        "difficulty": "medium"
                    }
                }
            ]
        },
        {
            "id": "freya-magic",
            "title": "프레이야의 마법 학교",
            "description": "북유럽 여신과 함께하는 마법 수업!",
            "thumbnail": "https://example.com/thumbnails/freya-magic.jpg",
            "category": "북유럽 신화",
            "season": 1,
            "number": 6,
            "chapters": [
                {
                    "id": "chapter1",
                    "title": "마법의 첫걸음",
                    "text": "프레이야의 마법 수업이 시작됩니다...",
                    "image": "https://example.com/chapters/freya-ch1.jpg",
                    "hasGame": true,
                    "gameType": "magic",
                    "gameData": {
                        "type": "마법 주문 만들기",
                        "difficulty": "medium"
                    }
                }
            ]
        },
        {
            "id": "peter-coding",
            "title": "피터팬의 코딩 교실",
            "description": "네버랜드에서 배우는 신나는 코딩!",
            "thumbnail": "https://example.com/thumbnails/peter-coding.jpg",
            "category": "세계 동화",
            "season": 1,
            "number": 7,
            "chapters": [
                {
                    "id": "chapter1",
                    "title": "네버랜드의 코딩 비밀",
                    "text": "피터팬과 함께 블록 코딩을 배워봐요...",
                    "image": "https://example.com/chapters/peter-ch1.jpg",
                    "hasGame": true,
                    "gameType": "coding",
                    "gameData": {
                        "type": "블록 코딩 퍼즐",
                        "difficulty": "easy"
                    }
                }
            ]
        },
        {
            "id": "mountain-eco",
            "title": "산신령님의 자연 탐험",
            "description": "산신령님과 함께하는 생태계 관찰!",
            "thumbnail": "https://example.com/thumbnails/mountain-eco.jpg",
            "category": "한국 전래",
            "season": 1,
            "number": 8,
            "chapters": [
                {
                    "id": "chapter1",
                    "title": "숲속 생물 관찰",
                    "text": "산신령님이 알려주는 숲속 이야기...",
                    "image": "https://example.com/chapters/mountain-ch1.jpg",
                    "hasGame": true,
                    "gameType": "observation",
                    "gameData": {
                        "type": "동물 친구 찾기",
                        "difficulty": "easy"
                    }
                }
            ]
        },
        {
            "id": "loki-invention",
            "title": "로키의 장난감 발명실",
            "description": "장난꾸러기 로키와 함께하는 신기한 발명품 만들기!",
            "thumbnail": "https://example.com/thumbnails/loki-invention.jpg",
            "category": "북유럽 신화",
            "season": 1,
            "number": 9,
            "chapters": [
                {
                    "id": "chapter1",
                    "title": "장난감 발명가 로키",
                    "text": "로키의 비밀 발명실에서 일어나는 재미있는 이야기...",
                    "image": "https://example.com/chapters/loki-ch1.jpg",
                    "hasGame": true,
                    "gameType": "invention",
                    "gameData": {
                        "type": "발명품 조립하기",
                        "difficulty": "medium"
                    }
                }
            ]
        },
        {
            "id": "fairy-eco",
            "title": "선녀와 나무꾼의 에코하우스",
            "description": "친환경 집 짓기 프로젝트!",
            "thumbnail": "https://example.com/thumbnails/fairy-eco.jpg",
            "category": "한국 전래",
            "season": 1,
            "number": 10,
            "chapters": [
                {
                    "id": "chapter1",
                    "title": "하늘에서 온 건축가",
                    "text": "선녀와 나무꾼이 함께 만드는 친환경 집...",
                    "image": "https://example.com/chapters/fairy-ch1.jpg",
                    "hasGame": true,
                    "gameType": "building",
                    "gameData": {
                        "type": "에코하우스 만들기",
                        "difficulty": "hard"
                    }
                }
            ]
        },
        {
            "id": "hansel-cooking",
            "title": "헨젤과 그레텔의 요리 실험실",
            "description": "과학과 요리의 신나는 만남!",
            "thumbnail": "https://example.com/thumbnails/hansel-cooking.jpg",
            "category": "세계 동화",
            "season": 1,
            "number": 11,
            "chapters": [
                {
                    "id": "chapter1",
                    "title": "과학적인 요리의 비밀",
                    "text": "과자로 배우는 신기한 과학 원리...",
                    "image": "https://example.com/chapters/hansel-ch1.jpg",
                    "hasGame": true,
                    "gameType": "cooking",
                    "gameData": {
                        "type": "레시피 실험하기",
                        "difficulty": "medium"
                    }
                }
            ]
        },
        {
            "id": "jormungandr-ocean",
            "title": "요르문간드의 해저 탐험",
            "description": "세계 뱀과 함께하는 깊은 바다 여행!",
            "thumbnail": "https://example.com/thumbnails/jormungandr-ocean.jpg",
            "category": "북유럽 신화",
            "season": 1,
            "number": 12,
            "chapters": [
                {
                    "id": "chapter1",
                    "title": "심해 탐험가",
                    "text": "요르문간드와 함께 깊은 바다 속으로...",
                    "image": "https://example.com/chapters/jormungandr-ch1.jpg",
                    "hasGame": true,
                    "gameType": "exploration",
                    "gameData": {
                        "type": "해저 생물 찾기",
                        "difficulty": "hard"
                    }
                }
            ]
        },
        // ... 시즌 1 스토리들 유지 ...
        {
            "id": "moon-science",
            "title": "달토끼의 우주 과학교실",
            "description": "달토끼 박사와 함께하는 신나는 우주 탐험!",
            "thumbnail": "https://example.com/thumbnails/moon-science.jpg",
            "category": "한국 전래",
            "season": 2,
            "number": 13,
            "chapters": [
                {
                    "id": "chapter1",
                    "title": "달나라 연구소",
                    "text": "달토끼의 비밀 연구소에서 시작되는 우주 과학...",
                    "image": "https://example.com/chapters/moon-ch1.jpg",
                    "hasGame": true,
                    "gameType": "science",
                    "gameData": {
                        "type": "우주 실험실",
                        "difficulty": "medium"
                    }
                }
            ]
        },
        {
            "id": "pinocchio-robot",
            "title": "피노키오의 로봇 공작소",
            "description": "현대판 피노키오의 로봇 만들기 도전!",
            "thumbnail": "https://example.com/thumbnails/pinocchio-robot.jpg",
            "category": "세계 동화",
            "season": 2,
            "number": 14,
            "chapters": [
                {
                    "id": "chapter1",
                    "title": "로봇 제작자의 꿈",
                    "text": "제페토 할아버지의 로봇 연구실에서...",
                    "image": "https://example.com/chapters/pinocchio-ch1.jpg",
                    "hasGame": true,
                    "gameType": "robotics",
                    "gameData": {
                        "type": "로봇 조립하기",
                        "difficulty": "hard"
                    }
                }
            ]
        },
        {
            "id": "dwarf-recycling",
            "title": "드워프의 재활용 공방",
            "description": "드워프 장인과 함께하는 업사이클링!",
            "thumbnail": "https://example.com/thumbnails/dwarf-recycling.jpg",
            "category": "북유럽 신화",
            "season": 2,
            "number": 15,
            "chapters": [
                {
                    "id": "chapter1",
                    "title": "마법의 재활용",
                    "text": "드워프의 망치로 시작하는 재활용 이야기...",
                    "image": "https://example.com/chapters/dwarf-ch1.jpg",
                    "hasGame": true,
                    "gameType": "crafting",
                    "gameData": {
                        "type": "재활용 아이템 제작",
                        "difficulty": "medium"
                    }
                }
            ]
        },
        {
            "id": "grim-diary",
            "title": "저승사자의 착한 마음 일기",
            "description": "따뜻한 마음을 가진 꼬마 저승사자의 하루!",
            "thumbnail": "https://example.com/thumbnails/grim-diary.jpg",
            "category": "한국 전래",
            "season": 2,
            "number": 16,
            "chapters": [
                {
                    "id": "chapter1",
                    "title": "특별한 심부름",
                    "text": "착한 일을 하고 싶은 꼬마 저승사자의 모험...",
                    "image": "https://example.com/chapters/grim-ch1.jpg",
                    "hasGame": true,
                    "gameType": "adventure",
                    "gameData": {
                        "type": "착한 일 미션",
                        "difficulty": "easy"
                    }
                }
            ]
        },
        {
            "id": "valkyrie-garden",
            "title": "발키리의 하늘 정원",
            "description": "발키리와 함께 가꾸는 공중 정원!",
            "thumbnail": "https://example.com/thumbnails/valkyrie-garden.jpg",
            "category": "북유럽 신화",
            "season": 2,
            "number": 17,
            "chapters": [
                {
                    "id": "chapter1",
                    "title": "하늘정원 만들기",
                    "text": "발키리의 날개를 타고 올라간 하늘 위에서...",
                    "image": "https://example.com/chapters/valkyrie-ch1.jpg",
                    "hasGame": true,
                    "gameType": "gardening",
                    "gameData": {
                        "type": "공중 정원 디자인",
                        "difficulty": "medium"
                    }
                }
            ]
        },
        {
            "id": "dragon-school",
            "title": "용궁에서 온 전학생",
            "description": "용왕님의 막내딸이 우리 학교에?!",
            "thumbnail": "https://example.com/thumbnails/dragon-school.jpg",
            "category": "한국 전래",
            "season": 2,
            "number": 18,
            "chapters": [
                {
                    "id": "chapter1",
                    "title": "신비한 전학생",
                    "text": "비가 오는 날, 전학 온 수상한 친구...",
                    "image": "https://example.com/chapters/dragon-ch1.jpg",
                    "hasGame": true,
                    "gameType": "puzzle",
                    "gameData": {
                        "type": "용궁 미스터리",
                        "difficulty": "medium"
                    }
                }
            ]
        },
        {
            "id": "cinderella-fashion",
            "title": "신데렐라의 재활용 패션쇼",
            "description": "업사이클링으로 만드는 환상의 드레스!",
            "thumbnail": "https://example.com/thumbnails/cinderella-fashion.jpg",
            "category": "세계 동화",
            "season": 2,
            "number": 19,
            "chapters": [
                {
                    "id": "chapter1",
                    "title": "마법의 재활용",
                    "text": "요정 대신 재활용으로 만드는 드레스...",
                    "image": "https://example.com/chapters/cinderella-ch1.jpg",
                    "hasGame": true,
                    "gameType": "design",
                    "gameData": {
                        "type": "패션 디자이너",
                        "difficulty": "hard"
                    }
                }
            ]
        },
        {
            "id": "odin-library",
            "title": "오딘의 지혜 도서관",
            "description": "신들의 왕과 함께하는 독서 여행!",
            "thumbnail": "https://example.com/thumbnails/odin-library.jpg",
            "category": "북유럽 신화",
            "season": 2,
            "number": 20,
            "chapters": [
                {
                    "id": "chapter1",
                    "title": "지혜의 책장",
                    "text": "오딘의 까마귀가 알려주는 신비한 이야기...",
                    "image": "https://example.com/chapters/odin-ch1.jpg",
                    "hasGame": true,
                    "gameType": "quiz",
                    "gameData": {
                        "type": "지혜의 퀴즈",
                        "difficulty": "hard"
                    }
                }
            ]
        },
        // ... 앞의 스토리들 유지 ...
        {
            "id": "rapunzel-botany",
            "title": "라푼젤의 식물 관찰 일기",
            "description": "탑 위에서 시작하는 신기한 식물 연구!",
            "thumbnail": "https://example.com/thumbnails/rapunzel-botany.jpg",
            "category": "세계 동화",
            "season": 2,
            "number": 21,
            "chapters": [
                {
                    "id": "chapter1",
                    "title": "마법의 식물원",
                    "text": "라푼젤의 머리카락처럼 자라나는 신기한 식물들...",
                    "image": "https://example.com/chapters/rapunzel-ch1.jpg",
                    "hasGame": true,
                    "gameType": "observation",
                    "gameData": {
                        "type": "식물 성장 관찰",
                        "difficulty": "medium"
                    }
                }
            ]
        },
        {
            "id": "tiger-travel",
            "title": "방랑 호랑이의 한국 여행",
            "description": "호랑이와 함께 떠나는 우리나라 구석구석!",
            "thumbnail": "https://example.com/thumbnails/tiger-travel.jpg",
            "category": "한국 전래",
            "season": 2,
            "number": 22,
            "chapters": [
                {
                    "id": "chapter1",
                    "title": "산골 마을 탐험",
                    "text": "꼬리를 살랑살랑 흔들며 시골 마을에 도착한 호랑이...",
                    "image": "https://example.com/chapters/tiger-ch1.jpg",
                    "hasGame": true,
                    "gameType": "adventure",
                    "gameData": {
                        "type": "전통문화 찾기",
                        "difficulty": "easy"
                    }
                }
            ]
        },
        {
            "id": "heimdall-bridge",
            "title": "헤임달의 무지개 다리 여행",
            "description": "비프로스트를 따라가는 신비한 모험!",
            "thumbnail": "https://example.com/thumbnails/heimdall-bridge.jpg",
            "category": "북유럽 신화",
            "season": 2,
            "number": 23,
            "chapters": [
                {
                    "id": "chapter1",
                    "title": "무지개 수호자",
                    "text": "아홉 개의 세계를 연결하는 무지개 다리에서...",
                    "image": "https://example.com/chapters/heimdall-ch1.jpg",
                    "hasGame": true,
                    "gameType": "bridge",
                    "gameData": {
                        "type": "무지개 다리 건설",
                        "difficulty": "hard"
                    }
                }
            ]
        },
        {
            "id": "sleeping-forest",
            "title": "잠자는 숲속의 생태 연구",
            "description": "100년 동안 잠든 숲의 비밀을 찾아서!",
            "thumbnail": "https://example.com/thumbnails/sleeping-forest.jpg",
            "category": "세계 동화",
            "season": 2,
            "number": 24,
            "chapters": [
                {
                    "id": "chapter1",
                    "title": "잠든 숲의 생명들",
                    "text": "오로라 공주와 함께 깨어나는 숲속 이야기...",
                    "image": "https://example.com/chapters/sleeping-ch1.jpg",
                    "hasGame": true,
                    "gameType": "ecology",
                    "gameData": {
                        "type": "생태계 균형 맞추기",
                        "difficulty": "medium"
                    }
                }
            ]
        }
    ]
}
