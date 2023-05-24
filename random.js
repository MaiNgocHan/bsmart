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


var giftContainers = document.getElementsByClassName("ramdom-gift");
var prizeForm = document.getElementById("Prize-announcement");
var isGiftFlipped = false;
var bntwin = document.getElementById("list-win");
var overlay3 = document.createElement("div");
overlay3.id = "overlay3";
overlay3.className = "overlay3";
document.body.appendChild(overlay3);

function showOverlay() {
  overlay3.style.display = "block";
}

function hideOverlay() {
  overlay3.style.display = "none";
  prizeForm.style.display = "none"; // Ẩn form khi đóng overlay
}

overlay3.addEventListener("click", function(event) {
  if (event.target === overlay3) {
    hideOverlay();
  }
});

for (var i = 0; i < giftContainers.length; i++) {
  giftContainers[i].addEventListener("click", function() {
    if (isGiftFlipped) {
      setTimeout(function() {
        showMessage("Chúc mừng bạn đã trúng thưởng");
        prizeForm.style.display = "block";
        showOverlay();
        this.style.opacity = "0.5";
        this.style.pointerEvents = "none";
      }, 500);
    } else {
      if (!this.classList.contains("flipped")) {
        var giftImages = ["/img/200.jpg", "/img/300.jpg", "/img/500.jpg", "/img/800.jpg", "/img/cafe.jpg"];
        var discountOptions = [200, 300, 500, 800, 150];

        var randomIndex = Math.floor(Math.random() * giftImages.length);
        var randomGiftImage = giftImages[randomIndex];
        var randomDiscount = discountOptions[randomIndex];

        var giftImage = this.querySelector(".gift-img");
        var discountInfo = this.querySelector(".discount-info");

        if (randomDiscount > 0) {
          bntwin.style.display = "block";
          giftImage.setAttribute("src", randomGiftImage);
          discountInfo.textContent = "Giảm giá " + randomDiscount + "k";
          this.classList.add("flipped");
          isGiftFlipped = true;

          setTimeout(function() {
            prizeForm.style.display = "block";
            showOverlay();
            giftContainers.forEach(function(container) {
              container.style.opacity = "0.5";
              container.style.pointerEvents = "none";
            });
          }, 500);
        } else {
          discountInfo.textContent = "Không có mã giảm giá";
          showMessage("Hộp quà này không có mã giảm giá");
        }
      }
    }
  });
}

var confirmButton = prizeForm.querySelector(".btn-comfirm");
confirmButton.addEventListener("click", function(event) {
  event.preventDefault();
  prizeForm.style.display = "none";
  hideOverlay();
  giftContainers.forEach(function(container) {
    container.style.opacity = "1";
    container.style.pointerEvents = "auto";
  });
});

function showMessage(message) {
  prizeForm.querySelector(".text-info1").textContent = message;
  prizeForm.style.display = "block";
}

bntwin.onclick = function() {
  var winnerForm = document.getElementById("list-winn");
  winnerForm.style.display = "block";
  showOverlay();
};

var closemodal = document.querySelector("#list-winn .fa-xmark");
closemodal.onclick = function() {
  var winnerForm = document.getElementById("list-winn");
  winnerForm.style.display = 'none';
  hideOverlay();
};

var overlay = document.getElementById("overlay3");
overlay.addEventListener("click", function(event) {
  var target = event.target;
  if (target.id === "overlay3") {
    var winnerForm = document.getElementById("list-winn");
    winnerForm.style.display = 'none';
    hideOverlay();
  }
});

// var confirmButton = prizeForm.querySelector(".btn-comfirm");
// confirmButton.addEventListener("click", function(event) {
//   event.preventDefault();
//   prizeForm.style.display = "none";
//   hideOverlay();
//   giftContainers.forEach(function(container) {
//     container.style.opacity = "1";
//     container.style.pointerEvents = "auto";
//   });
// });

// function showMessage(message) {
//   prizeForm.querySelector(".text-info1").textContent = message;
//   prizeForm.style.display = "block";
// }

// bntwin.onclick = function() {
//   var winnerForm = document.getElementById("list-winn");
//   winnerForm.style.display = "block";
//   showOverlay();
// };

// var closemodal = document.querySelector("#list-winn .fa-xmark");
// closemodal.onclick = function() {
//   var winnerForm = document.getElementById("list-winn");
//   winnerForm.style.display = 'none';
//   hideOverlay();
// };




// ///////////////////////

// ////////////////

// var giftContainers = document.getElementsByClassName("ramdom-gift");
// var prizeForm = document.getElementById("Prize-announcement");
// var isGiftFlipped = false;
// var bntwin = document.getElementById("list-win");
// var overlay3 = document.createElement("div");
// overlay3.className = "overlay3";
// document.body.appendChild(overlay3);

// function showOverlay() {
//   overlay3.style.display = "block";
// }
// function hideOverlay() {
//   overlay3.style.display = "none";
// }
// for (var i = 0; i < giftContainers.length; i++) {
//   giftContainers[i].addEventListener("click", function() {
//     if (isGiftFlipped) {
//       setTimeout(function() {
//         showMessage("Chúc mừng bạn đã trúng thưởng");
//         prizeForm.style.display = "block";
//         overlay3.style.display = "block";
//         giftDiv.style.opacity = "0.5";
//         giftDiv.style.pointerEvents = 'none';
//       },);
//     } else {
//       if (!this.classList.contains("flipped")) {
//         var giftImages = ["/img/200.jpg", "/img/300.jpg", "/img/500.jpg", "/img/800.jpg", "/img/cafe.jpg"];
//         var discountOptions = [200, 300, 500, 800, 150];

//         var randomIndex = Math.floor(Math.random() * giftImages.length);
//         var randomGiftImage = giftImages[randomIndex];
//         var randomDiscount = discountOptions[randomIndex];

//         var giftImage = this.querySelector("img");
//         var discountInfo = this.querySelector(".discount-info");

//         if (randomDiscount > 0) {
//           bntwin.style.display = "block";
//           giftImage.setAttribute("src", randomGiftImage);
//           var voucherTitle = prizeForm.querySelector(".text-center.text-xl.text-white");
//           if (randomDiscount === 150) {
//             voucherTitle.textContent = "Voucher Coffee Laha";
//             voucherTitle.style.marginleft="56px"
//             // Thêm các xử lý đặc biệt cho voucher "coffee laha" tại đây
//           } else {
//             voucherTitle.textContent = "Voucher giảm giá " + randomDiscount + "k";
//           }
//           this.classList.add("flipped");
//           isGiftFlipped = true;

//           setTimeout(function() {
//             prizeForm.style.display = "block";
//             showOverlay();
//             // overlay3.style.display = "block";
//             giftDiv.style.opacity = "0.5";
//             giftDiv.style.pointerEvents = 'none';
//           }, 500);
//         } else {
//           discountInfo.textContent = "Không có mã giảm giá";
//           showMessage("Hộp quà này không có mã giảm giá");
//         }
//       }
//     }
//   });
// }

// var confirmButton = prizeForm.querySelector(".btn-comfirm");
// confirmButton.addEventListener("click", function(event) {
//   event.preventDefault();
//   prizeForm.style.display = "none";
//   // overlay3.style.display = "none";
//   hideOverlay();
//   giftDiv.style.opacity = "1";
//   giftDiv.style.pointerEvents = 'auto';
// });



// // Hàm hiển thị thông báo
// function showMessage(message) {
//   prizeForm.querySelector(".text-info1").textContent = message;
//   prizeForm.style.display = "block";
// }


// bntwin.onclick= function(){
//   var winner = document.getElementById("list-winn");
//   winner.style.display="block";
// }

// // end 


// var closemodal= document.querySelector('.fa-xmark');
// var formwon = document.getElementById("list-winn")

// closemodal.onclick = function(){
//   formwon.style.display='none';
// }



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

