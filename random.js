function validateName() {
    const fullName = document.getElementById('name');//trỏ tới thẻ input
    const small = fullName.parentElement.querySelector('small');
    var words = fullName.value.split(' ');
    for (var i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    fullName.value = words.join(' ');
  
    if (fullName.value.length < 4) {
        document.getElementById('name').style.borderColor = "rgb(255, 25, 0)";
        fullName.parentElement.classList.add('error')
        small.innerText = "Vui lòng nhập từ 4 kí tự trở lên";
    }
    else {
        document.getElementById('name').style.borderColor = "green";
        fullName.parentElement.classList.remove('error')
        small.innerText = "";
    }
  }

  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // const regex_vn = /^[^\s@]+@(gmail\.com|outlook\.com|yahoo\.com|mail\.vn|viettel\.com\.vn|fpt\.com\.vn|[a-zA-z]\.edu\.vn)$/;
    const regex_vn =/^[^\s@]+@[a-zA-Z0-9_]+\.(com|vn|com\.vn|edu\.vn)$/
  
    if (regex.test(email) && regex_vn.test(email) && email.length <= 64) {
      return true;
    } else {
      return false;
    }
  }
  
  const emailInput = document.getElementById('email');
  const errorLabel = document.getElementById('email-error');
  
  emailInput.addEventListener('input', function() {
    const email = emailInput.value.trim();
  
    if (validateEmail(email)) {
      errorLabel.textContent = '';
    } else {
      errorLabel.textContent = 'Email không đúng định dạng';
    }
  });

  var $select = $('select');

  $select
      .on('change', function () {
          var $this = $(this),
              // use replace to remove extra white (if desired)
              txt = $this.find('option:selected').text().replace(/\s+/g, ' ');
          // add title to select
          $this.attr('title', txt);
      })
      .change()
      .find('option').each(function () {
          var $this = $(this);
          // add title to each option, so it works on hover
          $this.attr('title', $this.text());
      });

function validatePhone() {
    const phone = document.getElementById("phone").value;
    const phoneRegex = /((09|03|07|08|05)+([0-9]{8})\b)/g;; // Regular expression for Vietnamese phone numbers

    if (!phoneRegex.test(phone)) {
        document.getElementById("phone-error").innerHTML = "Số điện thoại chưa đúng định dạng! Số điện thoại phải là các đầu số 09, 03, 07, 08, 05";
    } else {
        document.getElementById("phone-error").innerHTML = "";
    }
}
// Lấy tham chiếu đến form và các trường nhập liệu
const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const overlay_form = document.getElementById('overlay_form');

// Đăng ký sự kiện submit form
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Ngăn chặn form submit mặc định
  
  // Kiểm tra xem tất cả các trường nhập liệu có được nhập đầy đủ hay không
  if (nameInput.value.trim() !== '' && emailInput.value.trim() !== '') {
    // Nếu thông tin đã nhập đầy đủ, cho phép vào trang chính
    alert('Thông tin đã được gửi thành công!');
    
    // Hiển thị trang chính và ẩn form
    overlay_form.style.visibility = 'hidden';
    document.body.style.overflow = 'auto';
  } else {
    // Nếu thông tin chưa nhập đầy đủ, hiển thị thông báo lỗi
    alert('Vui lòng điền đầy đủ thông tin!');
  }
});

// Hiển thị form khi trang được tải
window.addEventListener('DOMContentLoaded', function() {
  overlay_form.style.visibility = 'visible';
  document.body.style.overflow = 'hidden';
});

// ///////////////////////

// ////////////////

// Lấy danh sách tất cả các ảnh "gift"
const giftImages = document.querySelectorAll('.grid img');

// Lấy phần tử overlay và message
const overlay_message = document.getElementById('overlay_message');
const message = document.querySelector('.message');

// Biến lưu trạng thái đã chọn
let isGiftSelected = false;

const imageMap = {
    'gift1.png': '1.png',
    'gift2.png': '2.png',
    'gift3.png': '3.png',
    'gift4.png': '4.png',
    'gift5.png': '5.png',
    'gift6.png': '6.png',
    'gift7.png': '7.png',
    'gift8.png': '8.png',
    'gift9.png': '9.png',
  };

// Đăng ký sự kiện khi chuột di chuyển qua ảnh "gift"
giftImages.forEach((giftImage, index) => {
  giftImage.addEventListener('mouseover', () => {
    if (!isGiftSelected) {
        giftImage.style.transform = 'scale(1.1)'; // Phóng to ảnh
      }
  });

  giftImage.addEventListener('mouseout', () => {
    if (!isGiftSelected) {
        giftImage.style.transform = 'scale(1)'; // Phục hồi kích thước ảnh
      }
  });

  giftImage.addEventListener('click', () => {
    if (!isGiftSelected) {
        // Ẩn ảnh "gift" đã chọn và hiển thị ảnh tương ứng
        giftImage.style.display = 'none';
        const innerImageSrc = `img/${index + 1}.png`;
        const innerImage = document.createElement('img');
        innerImage.setAttribute('src', innerImageSrc);
        innerImage.classList.add('inner-image');
  
        message.innerHTML = '';
        message.appendChild(innerImage);
        overlay_message.style.display = 'flex'; // Hiển thị overlay_message và thông báo
  
        isGiftSelected = true; // Đánh dấu đã chọn
      }
  });
});
// Đăng ký sự kiện click trên overlay_message để ẩn nó
overlay_message.addEventListener('click', () => {
    overlay_message.style.display = 'none'; // Ẩn overlay và thông báo khi click ra khỏi div
  });



// // Lấy phần tử "gift" và overlay
// const giftImage = document.querySelector('.grid img');
// const overlay = document.querySelector('.overlay');
// const message = document.querySelector('.message');

// // Biến lưu trạng thái đã chọn
// let isGiftSelected = false;

// // Mảng chứa tên các ảnh từ "1.png" đến "9.png"
// const imageList = [
//   '1.png',
//   '2.png',
//   '3.png',
//   '4.png',
//   '5.png',
//   '6.png',
//   '7.png',
//   '8.png',
//   '9.png'
// ];

// // Đăng ký sự kiện click trên ảnh "gift"
// giftImage.addEventListener('click', () => {
//   if (!isGiftSelected) {
//     // Ẩn ảnh "gift"
//     giftImage.style.display = 'none';

//     // Chọn ngẫu nhiên một ảnh từ danh sách
//     const randomImage = imageList[Math.floor(Math.random() * imageList.length)];

//     // Tạo và hiển thị ảnh tương ứng
//     const innerImageSrc = `img/${randomImage}`;
//     const innerImage = document.createElement('img');
//     innerImage.setAttribute('src', innerImageSrc);
//     innerImage.classList.add('inner-image');
//     giftImage.parentNode.appendChild(innerImage);

//     overlay.style.display = 'flex'; // Hiển thị overlay và thông báo

//     isGiftSelected = true; // Đánh dấu đã chọn
//   }
// });

// // Đăng ký sự kiện click trên overlay để ẩn nó
// overlay.addEventListener('click', () => {
//   if (isGiftSelected) {
//     overlay.style.display = 'none'; // Ẩn overlay và thông báo khi click ra khỏi div
//   }
// });

