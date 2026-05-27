const menus = [
    {
        name: "김치찌개",
        category: "한식",
        price: "8,000원 ~ 10,000원",
        description: "든든하고 무난한 한식 메뉴입니다."
    },
    {
        name: "초밥",
        category: "일식",
        price: "12,000원 ~ 18,000원",
        description: "가볍지만 만족감 있는 메뉴입니다."
    },
    {
        name: "짜장면",
        category: "중식",
        price: "7,000원 ~ 9,000원",
        description: "빠르고 실패 확률이 낮은 메뉴입니다."
    },
    {
        name: "파스타",
        category: "양식",
        price: "10,000원 ~ 16,000원",
        description: "기분 전환하기 좋은 메뉴입니다."
    },
    {
        name: "떡볶이",
        category: "분식",
        price: "4,000원 ~ 8,000원",
        description: "가볍게 먹기 좋은 매콤한 메뉴입니다."
    }
];

const recommendButton = document.getElementById("recommendButton");
const menuName = document.getElementById("menuName");
const menuCategory = document.getElementById("menuCategory");
const menuPrice = document.getElementById("menuPrice");
const menuDescription = document.getElementById("menuDescription");

recommendButton.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * menus.length);
    const selectedMenu = menus[randomIndex];

    menuName.textContent = selectedMenu.name;
    menuCategory.textContent = "카테고리: " + selectedMenu.category;
    menuPrice.textContent = "가격대: " + selectedMenu.price;
    menuDescription.textContent = "설명: " + selectedMenu.description;
});