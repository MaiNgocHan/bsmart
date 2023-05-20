


const countdownElement = document.getElementById("countdown");
let countdown = parseInt(countdownElement.textContent);
  
const countdownInterval = setInterval(() => {
    countdown--;
    countdownElement.textContent = countdown + "s";
    
    if (countdown === 0) {
      clearInterval(countdownInterval);
    }
  }, 1000);



  const countdownElementt = document.getElementById("countdownn");
let countdownn = parseInt(countdownElementt.textContent);
  
const countdownIntervall = setInterval(() => {
    countdownn--;
    countdownElementt.textContent = countdownn + "s";
    
    if (countdownn === 0) {
      clearInterval(countdownIntervall);
    }
  }, 1000);




    //xử lý khi thêm khóa học bên register-course tự hiển thị
const contentRights = document.querySelectorAll('.content-right');
const courseRegisterContainer = document.querySelector('.col-md-3.col-xs-12.col-sm-12');
const courseRegisterTemplate = document.querySelector('.cr');

let counter = 1;

if (contentRights.length > 0 && courseRegisterContainer && courseRegisterTemplate) {
  contentRights.forEach(contentRight => {
    const name = contentRight.getAttribute('data-name');
    const info = contentRight.getAttribute('data-info');

    if (name && info) {
      // Clone node của course-register template và thêm class tương ứng
      const courseRegister = courseRegisterTemplate.cloneNode(true);
      courseRegister.classList.add(`course-register${counter}`);
      counter++;

      const nameCourse = courseRegister.querySelector('#name-course');
      const infoCourse = courseRegister.querySelector('#info-course');
      nameCourse.textContent = `Tên khóa học: ${name}`;
      infoCourse.textContent = `Thông tin lịch học: ${info}`;
      
      // Thêm course-register vào courseRegisterContainer
      courseRegisterContainer.appendChild(courseRegister);

      // Đặt giá trị display cho courseRegister dựa trên nội dung có hay không
      courseRegister.style.display = 'block';
    }
  });
}

    






//end



//hàm delete
const deleteBtns = document.querySelectorAll('#delete-btn');
const number = document.getElementById("number");
const ctm = document.getElementById("customer");
const courseRegisters = document.querySelectorAll('#course-register');

deleteBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    const confirmDelete = confirm('Bạn có chắc chắn muốn xóa khóa học này?');
    if (confirmDelete) {
      const course = btn.closest('.content-course');
      const courseRegister = courseRegisters[index + 1]; // Lấy course-register tại vị trí tương ứng
      
      course.remove();
      if (courseRegister) {
        courseRegister.style.display = 'none'; // Ẩn course-register tương ứng
      }
      
      number.innerHTML = courses.length;
      ctm.style.top = "-470px";
      updatePaymentForms();
    }
  });
});










//hàm cập nhật số lượng
const courses = document.getElementsByClassName("content-course");
// const number = document.getElementById("number");

number.innerHTML = courses.length;

// Xóa phần tử "content-course" bất kỳ ở đây

// Cập nhật lại số lượng sau khi xóa
number.innerHTML = courses.length;



// const modal = document.getElementById("modal-dis");
// const modalCloseBtn = document.querySelector("#modal-dis .fa-times");
// const questionIcon = document.querySelector("#referral-code .fa-question");

// questionIcon.addEventListener("click", function() {
//   modal.style.display = "block";
//   ctm.style.top="-1020px";
  
// });

// modalCloseBtn.addEventListener("click", function() {
//   modal.style.display = "none";
//   ctm.style.top="-800px";

// });

const body = document.body;
//modal ma gioi thieu
const modal = document.getElementById("modal-dis");
const modalCloseBtn = document.querySelector("#modal-dis .fa-times");
const questionIcon = document.querySelector("#referral-code .fa-question");
// const modalOverlay = document.createElement('div');
const modalOverlay = document.getElementById("modal-overlay");
modalOverlay.classList.add('modal-overlay');
questionIcon.addEventListener("click", function() {
  modal.classList.add("show");
  // ctm.style.top="-880px";
  // modal.style.display = 'block';
  modalOverlay.style.display = "block";
  body.classList.add('no-scroll');
});

modalCloseBtn.addEventListener("click", function() {
  modal.classList.remove("show");
  // ctm.style.top="-680px";
  // modal.style.display = 'none';
  modalOverlay.style.display = "none";
  body.classList.remove('no-scroll');
});


modalOverlay.addEventListener('click', () => {
  // modal.style.display = 'none';
  modal.classList.remove("show");
  modalOverlay.style.display = "none";
  modal1.style.display="none";
  viettelForm.style.display = 'none';
  momoForm1.style.display = 'none';
  body.classList.remove('no-scroll');
});


//modal ma giam gia
var click = document.getElementById("fa-question1");
var modal1 = document.getElementById("modal");
var close = document.getElementById("close-iconn")
click.addEventListener("click",function(){
    modal1.style.display="block"
    // ctm.style.top="-880px";
    modalOverlay.style.display = "block";
    body.classList.add('no-scroll');
    
})
close.addEventListener("click",function(){
    modal1.style.display="none"
    // ctm.style.top="-680px";
    modalOverlay.style.display = "none";
    body.classList.remove('no-scroll');
})




// Lấy giá trị của phần tử "provisional" và "price-dis"
// Tạo function tính tổng tiền
function calculateTotalPrice() {
  // Lấy giá trị của phần tử "provisional" và "price-dis"
  const provisionalValue = document.getElementById("provisional").innerText;
  const discountValue = document.getElementById("price-dis").innerText;

  // Tách giá trị số ra khỏi đơn vị tiền tệ
  const provisionalAmount = parseFloat(provisionalValue.replace(/\./g, '').replace('đ', ''));
  const discountAmount = parseFloat(discountValue.replace(/\./g, '').replace('đ', ''));

  // Tính toán tổng tiền
  const totalPrice = provisionalAmount - discountAmount;

  // Hiển thị kết quả
  document.getElementById("price-total").innerHTML = totalPrice.toLocaleString() + '<u>đ</u>';
}

// Gọi hàm tính tổng tiền khi load trang
calculateTotalPrice();


// Thêm sự kiện update khi tạm tính hoặc khuyến mãi được thay đổi
document.getElementById("provisional").addEventListener("input", calculateTotalPrice);
document.getElementById("price-dis").addEventListener("input", calculateTotalPrice);


 // Lấy ra các phần tử cần sử dụng
// Lấy các phần tử cần sử dụng
const momoImg = document.querySelector('#momo');
const viettelImg = document.querySelector('#viettel');
const btnPayment = document.querySelector('#btn-payment');
const momoForm = document.querySelector('#payment-momopay');
const viettelForm = document.querySelector('#payment-viettelpay');
const totalBillSpan = document.querySelector('#total-bill');
const totalBillSpann = document.querySelector('#total-billl');
const momoForm1  = document.getElementById('payment-momopayy')




// Hàm cập nhật giá trị của "total-bill" trong form
function updateTotalBillValue() {
  const priceTotal = document.querySelector('#price-total');
const totalBillSpan = document.querySelector('#total-bill');
  totalBillSpan.textContent = priceTotal.textContent.trim();
}


function updateTotalBillValuee() {
  const priceTotal = document.querySelector('#price-total');
  const totalBillSpann = document.querySelector('#total-billl');
  totalBillSpann.textContent = priceTotal.textContent.trim();
}

// Xử lý sự kiện click cho các hình ảnh
momoImg.addEventListener('click', () => {
    updateTotalBillValuee();
    momoImg.classList.add('selected');
  viettelImg.classList.remove('selected');
 
});

viettelImg.addEventListener('click', () => {
    updateTotalBillValue();
    viettelImg.classList.add('selected');
    momoImg.classList.remove('selected');
});

// Xử lý sự kiện click cho nút thanh toán
btnPayment.addEventListener('click', () => {
  if (momoImg.classList.contains('selected')) {
    momoForm1.style.display = 'block';
    viettelForm.style.display = 'none';
    modalOverlay.style.display = "block";
    body.classList.add('no-scroll');
  } else if (viettelImg.classList.contains('selected')) {
    momoForm1.style.display = 'none';
    viettelForm.style.display = 'block';
    modalOverlay.style.display = "block";
    body.classList.add('no-scroll');
  } else {
    alert('Vui lòng chọn phương thức thanh toán');
  }
});

//lấy dữ liệu đổ vào momo và viettel
function updatePaymentForms() {
  const courseElements = document.querySelectorAll('.content-course .content-right');
  let allFullNames = [];
  courseElements.forEach((courseElement) => {
    const fullName = courseElement.querySelector('#fullname-course').textContent;
    allFullNames.push(fullName);
  });
  const joinedNames = allFullNames.join('<br>');
  const momoForms = document.querySelectorAll('#payment-momopayy');
  momoForms.forEach((momoForm) => {
    const momoCourseInfo = momoForm.querySelector('#course-infoo');
    momoCourseInfo.innerHTML = joinedNames;
  });
  const viettelForms = document.querySelectorAll('#payment-viettelpay');
  viettelForms.forEach((viettelForm) => {
    const viettelCourseInfo = viettelForm.querySelector('#course-infoo');
    viettelCourseInfo.innerHTML = joinedNames;
  });
}
const back = document.getElementById("back");
// const modalOverlay = document.createElement('div');

back.addEventListener("click", function() {
  viettelForm.style.display = 'none';
  modalOverlay.style.display = "none";
  body.classList.remove('no-scroll');
});
const back2 = document.getElementById("back2");
// const modalOverlay = document.createElement('div');

back2.addEventListener("click", function() {
  momoForm1.style.display = 'none';
  modalOverlay.style.display = "none";
  body.classList.remove('no-scroll');

});

window.addEventListener('DOMContentLoaded', () => {
  updatePaymentForms();
});

const formElements = document.querySelectorAll('.payment-form');
formElements.forEach((formElement) => {
  formElement.addEventListener('click', () => {
    updatePaymentForms();
  });
});






