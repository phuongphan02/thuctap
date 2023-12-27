$('.responsive').slick({
    dots: true,
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,

    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
//Thay đổi ngôn ngữ
document.addEventListener('DOMContentLoaded', function () {
    // Xác định ngôn ngữ mặc định (ví dụ: tiếng Việt)
    var defaultLanguage = 'vi';

    // Kiểm tra localStorage để xem có ngôn ngữ đã lưu không
    var savedLanguage = localStorage.getItem('selectedLanguage');

    // Nếu đã lưu, sử dụng ngôn ngữ đã lưu
    if (savedLanguage) {
        var languageImage = savedLanguage === 'vi' ? 'images/language/vi.jpg' : 'images/language/en.jpg';
        updateLanguageImage(languageImage);
    } else {
        // Ngược lại, sử dụng ngôn ngữ mặc định
        updateLanguageImage('images/language/vi.jpg');
    }
});

function changeLanguage(lang, imagePath) {
    // Lưu ngôn ngữ đã chọn vào localStorage
    localStorage.setItem('selectedLanguage', lang);

    // Đổi ngôn ngữ theo ngôn ngữ đã chọn
    // Ở đây bạn có thể thực hiện logic để cập nhật giao diện người dùng với ngôn ngữ mới
    console.log('Ngôn ngữ đã chọn:', lang);

    // Cập nhật hình ảnh ngôn ngữ
    updateLanguageImage(imagePath);
}

function updateLanguageImage(imagePath) {
    var languageImagetoggle = document.getElementById('languageImagetoggle');
    if (languageImagetoggle) {
        languageImagetoggle.src = imagePath; 
    }
    var languageImagenavbar = document.getElementById('languageImagenavbar');
    if (languageImagenavbar) {
        languageImagenavbar.src = imagePath;
    }
}
//slick slider
$(document).ready(function () {
    $('.slick-slider').slick({
        infinite: true,
        arrows: true,
        autoplay: true,
        autoSpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: '<button type="button" class="slick-prev">&#8592;</button>',
        nextArrow: '<button type="button" class="slick-next">&#8594;</button>',
        dots: false,  // Tắt hiển thị dots mặc định
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true  // Bật hiển thị dots khi ở chế độ mobile
                }
            }
        ]
    });
});
// Lắng nghe sự kiện cuộn trang
window.addEventListener('scroll', function() {
  var menu = document.getElementById('menu');

  // Nếu vị trí cuộn lớn hơn 50px, thêm class và hiển thị background
  if (window.scrollY > 50) {
      $('body').addClass("fixedmenu");
  } else {
      // Ngược lại, xóa class và ẩn background
      $('body').removeClass("fixedmenu");
      menu.style.boxShadow = 'none';
  }
});