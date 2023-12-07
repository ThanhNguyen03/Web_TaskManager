// Lấy tất cả các tab và nội dung tương ứng
const tabs = document.querySelectorAll('.btn-choose-tab');
const tabContents = document.querySelectorAll('.tab-content');

// Lặp qua từng tab và thêm sự kiện click
tabs.forEach((tab, index) => {
    tab.addEventListener('click', (event) => {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của sự kiện click

        // Loại bỏ lớp 'active' khỏi tất cả các tab và nội dung
        tabs.forEach((tab) => tab.classList.remove('active'));
        tabContents.forEach((content) => content.classList.remove('active'));

        // Thêm lớp 'active' cho tab hiện tại và nội dung tương ứng
        tab.classList.add('active');
        tabContents[index].classList.add('active');
    });
});
var toggleButtons = document.getElementsByClassName('toggleContent');
for (var i = 0; i < toggleButtons.length; i++) {
    toggleButtons[i].addEventListener('click', function() {
        var milestoneItems = document.getElementsByClassName('milestone-item');
        // Trả về trạng thái chưa nhấn cho các nút khác
        for (var j = 0; j < milestoneItems.length; j++) {
            var otherButton = milestoneItems[j].querySelector('.toggleContent');
            if (otherButton !== this) {
                milestoneItems[j].classList.remove('active');
                var contentWrapper = milestoneItems[j].querySelector('.content');
                contentWrapper.style.maxHeight = '';
                otherButton.textContent = 'See more';
            }
        }
        var milestoneItem = this.closest('.milestone-item');
        milestoneItem.classList.toggle('active');
        var contentWrapper = milestoneItem.querySelector('.content');

        if (milestoneItem.classList.contains('active')) {
            contentWrapper.style.maxHeight = contentWrapper.scrollHeight + 'px';
            this.textContent = 'Hide less';
        } else {
            contentWrapper.style.maxHeight = '';
            this.textContent = 'See more';
        }
    });
}
var isMenuOpen = false;
var menuBtn = document.querySelector(".icon-hambuger");
var menu = document.querySelector(".list-nav");
menuBtn.addEventListener("click",function(event){
    event.preventDefault();
    if (!isMenuOpen){
        menu.classList.add("active");
        isMenuOpen = true;
    }
    else if(isMenuOpen){
        menu.classList.remove("active");
        isMenuOpen = false;
    }
});
document.addEventListener("DOMContentLoaded", function() {
    // Nut tim kiem
    var popupSearch = document.querySelector("#popupSearch");
    var openSearch = document.querySelector(".open-popup");
    var closePopup = document.querySelector(".close-popup");
    openSearch.addEventListener("click", function(event) {
        event.preventDefault(); 
        popupSearch.classList.add("active");
        openSearch.style.display = "none";
        closePopup.style.display = "block"
    });
    closePopup.addEventListener("click", function(event) {
        event.preventDefault(); 
        popupSearch.classList.remove("active");
        openSearch.style.display = "block";
        closePopup.style.display = "none"
    });

    // Nut cuon
    var scrollDownButton = document.querySelector(".btn-scroll-down");
    var scrollUpButton = document.querySelector(".btn-scroll-up");
    scrollDownButton.addEventListener("click", function(event) {
        event.preventDefault();
        var nextSection = scrollDownButton.parentElement.parentElement.nextElementSibling;
        var nextSectionOffsetTop = nextSection.offsetTop;
        window.scrollTo({
            top: nextSectionOffsetTop,
            behavior: "smooth"
        });
    });
    scrollUpButton.addEventListener("click", function(event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});