// 음식 배열
const menus = [
    {
        name: "김치찌개",
        category: "한식",
        type: "든든한 메뉴",
        description: "얼큰한 국물과 밥이 잘 어울리는 든든한 한식 메뉴입니다."
    },
    {
        name: "된장찌개",
        category: "한식",
        type: "든든한 메뉴",
        description: "구수한 된장 향이 편안하게 입맛을 살려주는 메뉴입니다."
    },
    {
        name: "순두부찌개",
        category: "한식",
        type: "든든한 메뉴",
        description: "부드러운 순두부와 얼큰한 국물이 잘 어울리는 메뉴입니다."
    },
    {
        name: "부대찌개",
        category: "한식",
        type: "든든한 메뉴",
        description: "햄, 소시지, 라면사리가 어우러져 푸짐하게 즐기기 좋은 메뉴입니다."
    },
    {
        name: "제육볶음",
        category: "한식",
        type: "든든한 메뉴",
        description: "매콤달콤한 양념과 고기가 밥을 부르는 메뉴입니다."
    },
    {
        name: "불고기",
        category: "한식",
        type: "든든한 메뉴",
        description: "달짝지근한 양념에 재운 고기를 부드럽게 즐기는 메뉴입니다."
    },
    {
        name: "비빔밥",
        category: "한식",
        type: "든든한 메뉴",
        description: "여러 재료를 고추장과 함께 비벼 먹는 균형 잡힌 한 그릇 메뉴입니다."
    },
    {
        name: "돌솥비빔밥",
        category: "한식",
        type: "든든한 메뉴",
        description: "바삭한 누룽지와 따뜻한 재료가 어우러지는 든든한 메뉴입니다."
    },
    {
        name: "국밥",
        category: "한식",
        type: "든든한 메뉴",
        description: "뜨끈한 국물과 밥을 한 번에 즐기는 든든한 메뉴입니다."
    },
    {
        name: "순대국밥",
        category: "한식",
        type: "든든한 메뉴",
        description: "진한 국물과 순대가 들어가 속을 든든하게 채워주는 메뉴입니다."
    },
    {
        name: "돼지국밥",
        category: "한식",
        type: "든든한 메뉴",
        description: "깊고 진한 돼지고기 국물이 매력적인 든든한 메뉴입니다."
    },
    {
        name: "설렁탕",
        category: "한식",
        type: "든든한 메뉴",
        description: "뽀얀 국물에 밥을 말아 깔끔하게 즐기는 메뉴입니다."
    },
    {
        name: "갈비탕",
        category: "한식",
        type: "든든한 메뉴",
        description: "부드러운 갈비와 깊은 국물이 잘 어울리는 보양식 느낌의 메뉴입니다."
    },
    {
        name: "육개장",
        category: "한식",
        type: "든든한 메뉴",
        description: "얼큰한 국물과 고기, 채소가 어우러진 강한 맛의 메뉴입니다."
    },
    {
        name: "냉면",
        category: "한식",
        type: "가벼운 메뉴",
        description: "시원한 육수와 쫄깃한 면이 입맛을 깨워주는 메뉴입니다."
    },
    {
        name: "칼국수",
        category: "한식",
        type: "든든한 메뉴",
        description: "따뜻한 국물과 두툼한 면발이 편안하게 들어가는 메뉴입니다."
    },
    {
        name: "수제비",
        category: "한식",
        type: "든든한 메뉴",
        description: "쫄깃한 반죽과 구수한 국물이 잘 어울리는 메뉴입니다."
    },
    {
        name: "닭갈비",
        category: "한식",
        type: "든든한 메뉴",
        description: "매콤한 양념에 닭고기와 채소를 볶아 먹는 활기찬 메뉴입니다."
    },
    {
        name: "찜닭",
        category: "한식",
        type: "든든한 메뉴",
        description: "달짝지근한 간장 양념과 닭고기, 당면이 어울리는 메뉴입니다."
    },
    {
        name: "보쌈",
        category: "한식",
        type: "든든한 메뉴",
        description: "부드러운 삶은 고기를 김치와 함께 즐기는 깔끔한 고기 메뉴입니다."
    },
    {
        name: "족발",
        category: "한식",
        type: "든든한 메뉴",
        description: "쫀득한 식감과 진한 양념 향이 매력적인 메뉴입니다."
    },
    {
        name: "삼겹살",
        category: "한식",
        type: "든든한 메뉴",
        description: "노릇하게 구운 고기를 쌈과 함께 즐기는 대표 외식 메뉴입니다."
    },
    {
        name: "오징어볶음",
        category: "한식",
        type: "든든한 메뉴",
        description: "매콤한 양념과 쫄깃한 오징어가 밥과 잘 어울리는 메뉴입니다."
    },
    {
        name: "고등어구이",
        category: "한식",
        type: "든든한 메뉴",
        description: "고소하게 구운 생선을 담백하게 즐길 수 있는 메뉴입니다."
    },
    {
        name: "김치볶음밥",
        category: "한식",
        type: "든든한 메뉴",
        description: "잘 익은 김치와 밥을 볶아 감칠맛 있게 즐기는 메뉴입니다."
    },
    {
        name: "죽",
        category: "한식",
        type: "가벼운 메뉴",
        description: "부드럽고 따뜻해서 부담 없이 먹기 좋은 메뉴입니다."
    },

    {
        name: "짜장면",
        category: "중식",
        type: "든든한 메뉴",
        description: "달콤짭짤한 춘장 소스와 면이 잘 어울리는 대표 중식 메뉴입니다."
    },
    {
        name: "짬뽕",
        category: "중식",
        type: "든든한 메뉴",
        description: "얼큰한 국물과 해산물 향이 입맛을 확 살려주는 메뉴입니다."
    },
    {
        name: "볶음밥",
        category: "중식",
        type: "든든한 메뉴",
        description: "고슬고슬한 밥을 센 불에 볶아 고소하게 즐기는 메뉴입니다."
    },
    {
        name: "탕수육",
        category: "중식",
        type: "든든한 메뉴",
        description: "바삭한 튀김과 새콤달콤한 소스가 어울리는 인기 메뉴입니다."
    },
    {
        name: "마파두부덮밥",
        category: "중식",
        type: "든든한 메뉴",
        description: "부드러운 두부와 매콤한 소스를 밥 위에 얹어 먹는 메뉴입니다."
    },
    {
        name: "잡채밥",
        category: "중식",
        type: "든든한 메뉴",
        description: "쫄깃한 당면과 채소, 밥을 함께 즐기는 든든한 메뉴입니다."
    },
    {
        name: "고추잡채밥",
        category: "중식",
        type: "든든한 메뉴",
        description: "매콤한 고추잡채를 밥과 함께 먹는 풍미 강한 메뉴입니다."
    },
    {
        name: "유산슬밥",
        category: "중식",
        type: "든든한 메뉴",
        description: "부드러운 해산물과 채소 소스를 밥에 곁들이는 고급스러운 메뉴입니다."
    },
    {
        name: "군만두",
        category: "중식",
        type: "none",
        description: "바삭한 겉면과 촉촉한 속이 잘 어울리는 간단한 메뉴입니다."
    },
    {
        name: "양장피",
        category: "중식",
        type: "none",
        description: "톡 쏘는 겨자소스와 다양한 재료를 함께 즐기는 메뉴입니다."
    },
    {
        name: "깐풍기",
        category: "중식",
        type: "든든한 메뉴",
        description: "바삭한 닭튀김에 매콤달콤한 소스를 입힌 메뉴입니다."
    },
    {
        name: "깐쇼새우",
        category: "중식",
        type: "든든한 메뉴",
        description: "탱글한 새우튀김에 달콤매콤한 소스를 더한 메뉴입니다."
    },
    {
        name: "마라탕",
        category: "중식",
        type: "든든한 메뉴",
        description: "얼얼하고 매운 국물에 원하는 재료를 넣어 먹는 메뉴입니다."
    },
    {
        name: "마라샹궈",
        category: "중식",
        type: "든든한 메뉴",
        description: "강한 향신료와 매운맛으로 재료를 볶아 먹는 중독성 있는 메뉴입니다."
    },
    {
        name: "꿔바로우",
        category: "중식",
        type: "든든한 메뉴",
        description: "쫀득하고 바삭한 튀김에 새콤달콤한 소스를 더한 메뉴입니다."
    },
    {
        name: "우육면",
        category: "중식",
        type: "든든한 메뉴",
        description: "진한 고기 국물과 부드러운 소고기가 어울리는 면 요리입니다."
    },

    {
        name: "초밥",
        category: "일식",
        type: "가벼운 메뉴",
        description: "신선한 생선과 밥을 깔끔하게 즐기는 대표 일식 메뉴입니다."
    },
    {
        name: "라멘",
        category: "일식",
        type: "든든한 메뉴",
        description: "진한 국물과 탱글한 면발이 든든하게 어울리는 메뉴입니다."
    },
    {
        name: "돈카츠",
        category: "일식",
        type: "든든한 메뉴",
        description: "바삭하게 튀긴 돼지고기를 고소하게 즐기는 메뉴입니다."
    },
    {
        name: "규동",
        category: "일식",
        type: "든든한 메뉴",
        description: "달짝지근한 소고기와 양파를 밥 위에 올려 먹는 덮밥 메뉴입니다."
    },
    {
        name: "가츠동",
        category: "일식",
        type: "든든한 메뉴",
        description: "돈카츠와 달걀을 촉촉하게 얹어 먹는 든든한 덮밥 메뉴입니다."
    },
    {
        name: "오야코동",
        category: "일식",
        type: "든든한 메뉴",
        description: "닭고기와 달걀이 부드럽게 어우러지는 따뜻한 덮밥 메뉴입니다."
    },
    {
        name: "우동",
        category: "일식",
        type: "가벼운 메뉴",
        description: "두툼한 면발과 따뜻한 국물이 편안하게 어울리는 메뉴입니다."
    },
    {
        name: "소바",
        category: "일식",
        type: "가벼운 메뉴",
        description: "메밀 향이 은은하고 깔끔하게 먹기 좋은 면 요리입니다."
    },
    {
        name: "텐동",
        category: "일식",
        type: "든든한 메뉴",
        description: "바삭한 튀김을 밥 위에 올려 풍성하게 즐기는 메뉴입니다."
    },
    {
        name: "카레라이스",
        category: "일식",
        type: "든든한 메뉴",
        description: "진한 카레 소스와 밥을 함께 먹는 무난하고 든든한 메뉴입니다."
    },
    {
        name: "오므라이스",
        category: "일식",
        type: "든든한 메뉴",
        description: "부드러운 달걀과 볶음밥이 잘 어울리는 포근한 메뉴입니다."
    },
    {
        name: "야키소바",
        category: "일식",
        type: "든든한 메뉴",
        description: "짭짤한 소스에 볶은 면과 채소가 어울리는 메뉴입니다."
    },
    {
        name: "타코야키",
        category: "일식",
        type: "none",
        description: "겉은 부드럽고 속은 촉촉한 문어볼 간식 메뉴입니다."
    },
    {
        name: "회덮밥",
        category: "일식",
        type: "가벼운 메뉴",
        description: "신선한 회와 채소, 밥을 매콤하게 비벼 먹는 메뉴입니다."
    },
    {
        name: "연어덮밥",
        category: "일식",
        type: "가벼운 메뉴",
        description: "부드러운 연어를 밥 위에 올려 깔끔하게 즐기는 메뉴입니다."
    },
    {
        name: "사케동",
        category: "일식",
        type: "가벼운 메뉴",
        description: "고소한 연어와 밥을 심플하게 즐기는 일식 덮밥 메뉴입니다."
    },
    {
        name: "나베",
        category: "일식",
        type: "든든한 메뉴",
        description: "따뜻한 국물에 고기와 채소를 넣어 푸짐하게 먹는 메뉴입니다."
    },

    {
        name: "토마토 파스타",
        category: "양식",
        type: "든든한 메뉴",
        description: "산뜻한 토마토소스가 면과 잘 어울리는 깔끔한 메뉴입니다."
    },
    {
        name: "크림 파스타",
        category: "양식",
        type: "든든한 메뉴",
        description: "부드럽고 고소한 크림소스가 입맛을 감싸는 메뉴입니다."
    },
    {
        name: "알리오올리오",
        category: "양식",
        type: "none",
        description: "마늘 향과 올리브오일의 고소함을 가볍게 즐기는 파스타입니다."
    },
    {
        name: "리조또",
        category: "양식",
        type: "든든한 메뉴",
        description: "부드러운 쌀 식감과 진한 소스가 어우러지는 메뉴입니다."
    },
    {
        name: "스테이크",
        category: "양식",
        type: "든든한 메뉴",
        description: "육즙 가득한 고기를 제대로 즐길 수 있는 든든한 메뉴입니다."
    },
    {
        name: "함박스테이크",
        category: "양식",
        type: "든든한 메뉴",
        description: "부드러운 고기 패티와 진한 소스가 잘 어울리는 메뉴입니다."
    },
    {
        name: "피자",
        category: "양식",
        type: "든든한 메뉴",
        description: "고소한 치즈와 다양한 토핑을 함께 즐기는 인기 메뉴입니다."
    },
    {
        name: "샌드위치",
        category: "양식",
        type: "가벼운 메뉴",
        description: "빵 사이에 신선한 재료를 넣어 간편하게 즐기는 메뉴입니다."
    },
    {
        name: "샐러드",
        category: "양식",
        type: "가벼운 메뉴",
        description: "신선한 채소와 토핑을 가볍고 깔끔하게 즐기는 메뉴입니다."
    },
    {
        name: "오믈렛",
        category: "양식",
        type: "가벼운 메뉴",
        description: "부드러운 달걀에 다양한 재료를 넣어 포근하게 즐기는 메뉴입니다."
    },
    {
        name: "감바스",
        category: "양식",
        type: "none",
        description: "새우와 마늘을 올리브오일에 익혀 고소하게 즐기는 메뉴입니다."
    },
    {
        name: "그라탕",
        category: "양식",
        type: "든든한 메뉴",
        description: "치즈와 소스를 노릇하게 구워 따뜻하게 즐기는 메뉴입니다."
    },
    {
        name: "필라프",
        category: "양식",
        type: "든든한 메뉴",
        description: "고슬고슬한 밥에 재료와 소스를 더해 풍미 있게 먹는 메뉴입니다."
    },
    {
        name: "치킨스테이크",
        category: "양식",
        type: "든든한 메뉴",
        description: "부드러운 닭고기를 노릇하게 구워 든든하게 즐기는 메뉴입니다."
    },

    {
        name: "떡볶이",
        category: "분식",
        type: "none",
        description: "매콤달콤한 양념과 쫄깃한 떡이 입맛을 당기는 메뉴입니다."
    },
    {
        name: "라볶이",
        category: "분식",
        type: "든든한 메뉴",
        description: "라면과 떡볶이를 함께 즐기는 매콤하고 푸짐한 메뉴입니다."
    },
    {
        name: "김밥",
        category: "분식",
        type: "가벼운 메뉴",
        description: "밥과 다양한 재료를 한입 크기로 즐기는 간편한 메뉴입니다."
    },
    {
        name: "참치김밥",
        category: "분식",
        type: "가벼운 메뉴",
        description: "고소한 참치와 채소가 어우러진 든든한 김밥 메뉴입니다."
    },
    {
        name: "돈가스김밥",
        category: "분식",
        type: "든든한 메뉴",
        description: "바삭한 돈가스가 들어가 식감이 좋은 김밥 메뉴입니다."
    },
    {
        name: "순대",
        category: "분식",
        type: "none",
        description: "쫄깃한 식감과 고소한 맛이 매력적인 분식 메뉴입니다."
    },
    {
        name: "튀김",
        category: "분식",
        type: "none",
        description: "바삭한 식감으로 떡볶이와 잘 어울리는 메뉴입니다."
    },
    {
        name: "어묵",
        category: "분식",
        type: "가벼운 메뉴",
        description: "따뜻한 국물과 함께 먹기 좋은 부드러운 메뉴입니다."
    },
    {
        name: "쫄면",
        category: "분식",
        type: "none",
        description: "새콤매콤한 양념과 쫄깃한 면발이 잘 어울리는 메뉴입니다."
    },
    {
        name: "라면",
        category: "분식",
        type: "none",
        description: "얼큰한 국물과 꼬들한 면발을 빠르게 즐기는 메뉴입니다."
    },
    {
        name: "비빔국수",
        category: "분식",
        type: "가벼운 메뉴",
        description: "매콤새콤한 양념에 면을 비벼 가볍게 먹기 좋은 메뉴입니다."
    },
    {
        name: "잔치국수",
        category: "분식",
        type: "가벼운 메뉴",
        description: "따뜻한 육수와 부드러운 면이 편안하게 어울리는 메뉴입니다."
    },
    {
        name: "만두",
        category: "분식",
        type: "none",
        description: "촉촉한 속재료를 쫄깃한 피로 감싼 간편한 메뉴입니다."
    },
    {
        name: "컵밥",
        category: "분식",
        type: "든든한 메뉴",
        description: "밥과 토핑을 한 컵에 담아 간단히 즐기는 메뉴입니다."
    },
    {
        name: "주먹밥",
        category: "분식",
        type: "가벼운 메뉴",
        description: "한입에 먹기 좋은 밥 메뉴로 간단하게 배를 채우기 좋습니다."
    },
    {
        name: "토스트",
        category: "분식",
        type: "가벼운 메뉴",
        description: "바삭한 빵과 달콤짭짤한 속재료가 잘 어울리는 메뉴입니다."
    },
    {
        name: "계란 토스트",
        category: "분식",
        type: "가벼운 메뉴",
        description: "부드러운 계란과 바삭한 빵을 함께 즐기는 간단한 메뉴입니다."
    },

    {
        name: "햄버거",
        category: "패스트푸드",
        type: "든든한 메뉴",
        description: "빵, 패티, 소스가 한입에 어우러지는 간편하고 든든한 메뉴입니다."
    },
    {
        name: "치킨버거",
        category: "패스트푸드",
        type: "든든한 메뉴",
        description: "바삭한 치킨 패티를 빵과 함께 즐기는 메뉴입니다."
    },
    {
        name: "불고기버거",
        category: "패스트푸드",
        type: "든든한 메뉴",
        description: "달콤한 불고기 소스와 패티가 잘 어울리는 메뉴입니다."
    },
    {
        name: "새우버거",
        category: "패스트푸드",
        type: "든든한 메뉴",
        description: "탱글한 새우 패티의 고소한 맛이 매력적인 메뉴입니다."
    },
    {
        name: "치즈버거",
        category: "패스트푸드",
        type: "든든한 메뉴",
        description: "고소한 치즈와 패티를 간단하게 즐기는 메뉴입니다."
    },    
    {
        name: "치킨",
        category: "패스트푸드",
        type: "든든한 메뉴",
        description: "바삭한 튀김옷과 촉촉한 속살이 매력적인 인기 메뉴입니다."
    },
    {
        name: "핫도그",
        category: "패스트푸드",
        type: "none",
        description: "소시지와 빵을 간편하게 즐기는 부담 없는 메뉴입니다."
    },

    {
        name: "쌀국수",
        category: "아시안",
        type: "가벼운 메뉴",
        description: "깔끔한 국물과 부드러운 면이 부담 없이 어울리는 메뉴입니다."
    },
    {
        name: "팟타이",
        category: "아시안",
        type: "든든한 메뉴",
        description: "새콤달콤한 소스와 볶음면이 조화로운 태국식 메뉴입니다."
    },
    {
        name: "나시고랭",
        category: "아시안",
        type: "든든한 메뉴",
        description: "향신료와 재료를 볶아 깊은 풍미를 내는 볶음밥 메뉴입니다."
    },
    {
        name: "분짜",
        category: "아시안",
        type: "가벼운 메뉴",
        description: "고기, 면, 채소를 새콤한 소스에 곁들여 먹는 메뉴입니다."
    },
    {
        name: "카오팟",
        category: "아시안",
        type: "든든한 메뉴",
        description: "고소하게 볶은 밥에 아시아식 풍미를 더한 메뉴입니다."
    },
    {
        name: "커리",
        category: "아시안",
        type: "든든한 메뉴",
        description: "진한 향신료 소스와 밥을 함께 즐기는 풍미 있는 메뉴입니다."
    },
    {
        name: "탄두리치킨",
        category: "아시안",
        type: "든든한 메뉴",
        description: "향신료에 재운 닭고기를 구워 진한 맛을 내는 메뉴입니다."
    },
    {
        name: "월남쌈",
        category: "아시안",
        type: "가벼운 메뉴",
        description: "신선한 채소와 재료를 라이스페이퍼에 싸 먹는 깔끔한 메뉴입니다."
    },
    {
        name: "반미",
        category: "아시안",
        type: "가벼운 메뉴",
        description: "바삭한 바게트에 고기와 채소를 넣어 먹는 베트남식 샌드위치입니다."
    },

    {
        name: "타코",
        category: "기타",
        type: "none",
        description: "또르띠야에 고기와 채소를 넣어 한입 가득 즐기는 메뉴입니다."
    },
    {
        name: "브리또",
        category: "기타",
        type: "든든한 메뉴",
        description: "밥, 고기, 채소를 또르띠야에 말아 든든하게 즐기는 메뉴입니다."
    },
    {
        name: "퀘사디아",
        category: "기타",
        type: "든든한 메뉴",
        description: "치즈와 속재료를 또르띠야에 넣어 바삭하게 구운 메뉴입니다."
    },
    {
        name: "케밥",
        category: "기타",
        type: "든든한 메뉴",
        description: "고기와 채소를 빵이나 또르띠야에 감싸 먹는 든든한 메뉴입니다."
    },
    {
        name: "포케",
        category: "기타",
        type: "가벼운 메뉴",
        description: "밥이나 채소 위에 신선한 토핑을 올려 깔끔하게 즐기는 메뉴입니다."
    },
    {
        name: "오트밀",
        category: "기타",
        type: "가벼운 메뉴",
        description: "고소한 귀리를 부드럽게 먹는 가벼운 식사 메뉴입니다."
    },
    {
        name: "과일 요거트",
        category: "기타",
        type: "가벼운 메뉴",
        description: "상큼한 과일과 부드러운 요거트를 함께 즐기는 메뉴입니다."
    },
    {
        name: "닭가슴살 도시락",
        category: "기타",
        type: "가벼운 메뉴",
        description: "담백한 닭가슴살과 밥, 채소를 함께 먹는 깔끔한 메뉴입니다."
    }
];

const categoryEmojis = {
    "전체": "🍽️",
    "한식": "🍚",
    "중식": "🥡",
    "일식": "🍣",
    "양식": "🍝",
    "분식": "🍢",
    "패스트푸드": "🍔",
    "아시안": "🍜",
    "기타": "🍽️"
};

const categoryButtons = document.querySelectorAll(".category-button");
const typeButtons = document.querySelectorAll(".type-button");

const recommendButton = document.getElementById("recommendButton");

const resultBox = document.getElementById("resultBox");
const menuName = document.getElementById("menuName");
const menuCategory = document.getElementById("menuCategory");
const menuDescription = document.getElementById("menuDescription");

const resultOverlay = document.getElementById("resultOverlay");
const closeResultBtn = document.getElementById("closeResultBtn");

const resultMenuName = document.getElementById("resultMenuName");
const resultMenuCategory = document.getElementById("resultMenuCategory");
const resultMenuDescription = document.getElementById("resultMenuDescription");

function openResultModal(menu) {
    resultMenuName.textContent = menu.name;
    resultMenuCategory.textContent = menu.category;
    resultMenuDescription.textContent = menu.description;

    resultOverlay.classList.remove("hidden");
    document.body.classList.add("modal-open");
}

function closeResultModal() {
    resultOverlay.classList.add("hidden");
    document.body.classList.remove("modal-open");
}

closeResultBtn.addEventListener("click", closeResultModal);

resultOverlay.addEventListener("click", function (event) {
    if (event.target === resultOverlay) {
        closeResultModal();
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeResultModal();
    }
});

function applyCategoryButtonEmojis() {
    categoryButtons.forEach(function (button) {
        const category = button.dataset.category;
        const emoji = categoryEmojis[category] || "🍽️";

        if (category === "전체") {
            button.textContent = emoji + " 전체 선택";
        } else {
            button.textContent = emoji + " " + category;
        }
    });
}

function restartResultAnimation() {
    resultBox.classList.remove("hidden");
    resultBox.classList.remove("show");

    void resultBox.offsetWidth;

    resultBox.classList.add("show");
}

function clearButtons(buttons) {
    buttons.forEach(function (button) {
        button.classList.remove("active");
    });
}

function getActiveValues(buttons, dataName) {
    const values = [];

    buttons.forEach(function (button) {
        if (button.classList.contains("active")) {
            values.push(button.dataset[dataName]);
        }
    });

    return values;
}

function toggleCategoryButton(clickedButton) {
    const clickedCategory = clickedButton.dataset.category;
    const isAllButton = clickedCategory === "전체";
    const wasActive = clickedButton.classList.contains("active");

    if (isAllButton) {
        clearButtons(categoryButtons);

        if (!wasActive) {
            clickedButton.classList.add("active");
        }

        return;
    }

    categoryButtons.forEach(function (button) {
        if (button.dataset.category === "전체") {
            button.classList.remove("active");
        }
    });

    clickedButton.classList.toggle("active");
}

function selectTypeButton(clickedButton) {
    clearButtons(typeButtons);
    clickedButton.classList.add("active");
}

categoryButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        clearButtons(typeButtons);
        toggleCategoryButton(button);
    });
});

typeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        clearButtons(categoryButtons);
        selectTypeButton(button);
    });
});

function getFilteredMenus() {
    const selectedCategories = getActiveValues(categoryButtons, "category");
    const selectedTypes = getActiveValues(typeButtons, "type");

    if (selectedCategories.length > 0) {
        if (selectedCategories.includes("전체")) {
            return menus;
        }

        return menus.filter(function (menu) {
            return selectedCategories.includes(menu.category);
        });
    }

    if (selectedTypes.length > 0) {
        const selectedType = selectedTypes[0];

        if (selectedType === "전체") {
            return menus.filter(function (menu) {
                return menu.type === "가벼운 메뉴" || menu.type === "든든한 메뉴";
            });
        }

        return menus.filter(function (menu) {
            return menu.type === selectedType;
        });
    }

    return [];
}

recommendButton.addEventListener("click", function () {
    const filteredMenus = getFilteredMenus();

    if (filteredMenus.length === 0) {
        openResultModal({
            name: "추천할 메뉴가 없습니다.",
            category: "",
            description: "카테고리 또는 메뉴 타입을 하나 이상 선택해주세요."
        });

        return;
    }

    const randomIndex = Math.floor(Math.random() * filteredMenus.length);
    const selectedMenu = filteredMenus[randomIndex];

    const menuEmoji = categoryEmojis[selectedMenu.category] || "🍽️";

    let categoryText = "";

    if (selectedMenu.type === "none") {
        categoryText = "카테고리: " + selectedMenu.category;
    } else {
        categoryText = "카테고리: " + selectedMenu.category + " / " + selectedMenu.type;
    }

    openResultModal({
        name: menuEmoji + " " + selectedMenu.name,
        category: categoryText,
        description: "설명: " + selectedMenu.description
    });
});

applyCategoryButtonEmojis();
