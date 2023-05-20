
// // Lấy đường dẫn tệp tin ten_truong.txt
// const fileUrl = 'ten_truong.txt';

// // Lấy thẻ input và dropdown
// const input = document.getElementById('schools_name');
// const dropdown = document.getElementById('schools_dropdown');

// // Sự kiện nhập vào input
// input.addEventListener('input', function() {
//   // Lấy từ khóa tìm kiếm từ input
//   const keyword = input.value.toLowerCase().trim();

//   // Nếu từ khóa rỗng, ẩn dropdown và trả về
//   if (keyword === '') {
//     dropdown.style.display = 'none';
//     return;
//   }
//   fetch(fileUrl)
//   .then(response => response.text())
//   .then(data => {
//   // Tách các trường thành mảng
//   const schools = data.split('\n');
//   // Lọc các trường phù hợp với từ khóa tìm kiếm
//   const filteredSchools = schools.filter(school => school.toLowerCase().includes(keyword));
//   // Xóa các phần tử cũ trong dropdown
//   dropdown.innerHTML = '';
//   // Nếu có kết quả tìm kiếm
//   if (filteredSchools.length > 0) {
//   // Thêm các phần tử mới vào dropdown
//   for (let i = 0; i < filteredSchools.length && i < 5; i++) {
//   const li = document.createElement('li');
//   li.textContent = filteredSchools[i];
//   dropdown.appendChild(li);
//   }
//   // Hiển thị dropdown
//   dropdown.style.display = 'block';
//   } else {
//   // Nếu không có kết quả tìm kiếm, ẩn dropdown
//   dropdown.style.display = 'none';
//   }
//   })
//   .catch(error => {
//   console.error('Error loading file:', error);
//   });
//   });
   // Lấy danh sách trường học từ file ten_truong.txt
   var schools = [];

   function loadSchools() {
     var xhr = new XMLHttpRequest();
     xhr.open('GET', 'ten_truong.txt');
     xhr.onreadystatechange = function() {
       if (xhr.readyState === 4) {
         if (xhr.status === 200) {
           schools = xhr.responseText.split('\n');
         } else {
           console.error('Không thể tải danh sách trường học');
         }
       }
     };
     xhr.send();
   }
 
   // Cập nhật dropdown với danh sách trường học phù hợp nhất
   function updateDropdown(query) {
     var dropdown = document.getElementById('schools_dropdown');
     dropdown.innerHTML = '';
     if (!query) {
      dropdown.style.display = 'none';
      return;
    }
     var matches = schools.filter(function(school) {
       return school.toLowerCase().indexOf(query.toLowerCase()) !== -1;
     }).slice(0, 5); // Chỉ hiển thị 5 phần tử đầu tiên
     matches.forEach(function(match) {
       var li = document.createElement('li');
       li.innerHTML = match;
       li.addEventListener('click', function() {
         document.getElementById('schools_name').value = match;
         dropdown.innerHTML = '';
       });
       dropdown.appendChild(li);
     });
     if (matches.length === 0) {
       dropdown.style.display = 'none';
     } else {
       dropdown.style.display = 'block';
     }
   }
   // Thực hiện tìm kiếm trường học khi người dùng nhập từ khóa
   document.getElementById('schools_name').addEventListener('input', function() {
     var query = this.value.trim();
     updateDropdown(query);
   });
 
   // Ẩn dropdown khi click ra ngoài
   document.addEventListener('click', function(event) {
     var dropdown = document.getElementById('schools_dropdown');
     if (!event.target.closest('.search-container')) {
       dropdown.style.display = 'none';
     }
   });
 
   // Tải danh sách trường học khi trang được load
  window.addEventListener('load', loadSchools);
//   dropdown.addEventListener('click', function(event) {
//   // Nếu click vào một phần tử trong dropdown
//   if (event.target.tagName === 'LI') {
//     // Lấy giá trị của phần tử được click
//     const value = event.target.textContent;
//     // Gán giá trị vào input
//     input.value = value;
//     // Ẩn dropdown
//     dropdown.style.display = 'none';
//   }
// });



// Lấy ngày hiện tại
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

// Đặt giá trị cho trường đầu vào ngày
var todayStr = yyyy + '-' + mm + '-' + dd;
document.getElementById('birth_date').setAttribute('max', todayStr);
document.getElementById('birth_date').setAttribute('value', todayStr);

function checkDate() {
    var inputDate = new Date(document.getElementById('birth_date').value);
    const small_date = document.getElementById('small_date');
    var ageDiffMs = Date.now() - inputDate.getTime();
    var ageDate = new Date(ageDiffMs);
    var age = Math.abs(ageDate.getUTCFullYear() - 1970);
  
    if (age < 18) {
        small_date.innerHTML = 'Bạn chưa đủ 18 tuổi';
        small_date.style.color = "rgb(255, 25, 0)";
    } else {
        small_date.innerHTML = '';
    }
  
    if (inputDate > new Date()) {
        small_date.style.color = "rgb(255, 25, 0)";
        small_date.innerHTML = 'Bạn không thể chọn ngày trong tương lai';
        document.getElementById('birth_date').value = todayStr; // Reset lại ngày hiện tại
    } else if (age < 18) {
        small_date.innerHTML = 'Bạn chưa đủ 18 tuổi';
    } else {
        small_date.innerHTML = '';
    }
}

// Có một số lưu ý về cách tính toán tuổi như trong ví dụ trên:

// - Để tính số tuổi, chúng ta trừ thời gian ngày tháng năm sinh từ thời gian hiện tại để tính ra độ chênh lệch thời gian giữa hai ngày. Sau đó, chúng ta chuyển đổi độ chênh lệch thời gian này sang ngày, tháng và năm để tính toán tuổi.
// - Hàm "Math.abs" được sử dụng để tính giá trị tuyệt đối của độ chênh lệch thời gian. Trong trường hợp người dùng nhập ngày tháng năm sinh trong tương lai, độ chênh lệch thời gian sẽ là số âm, và hàm này sẽ chuyển đổi giá trị này thành số dương.
// - Chúng ta có thể sử dụng các phương pháp khác nhau để tính toán tuổi, ví dụ như tính toán số ngày giữa hai ngày tháng năm và chia cho số ngày trong một năm để tính số tuổi. Tuy nhiên, cách tính toán trong ví dụ trên là phổ biến và đơn giản.

// Hy vọng rằng ví dụ này sẽ giúp bạn thiết lập trang web của mình cho phù hợp với yêu cầu về tuổi tác của người dùng.


// nghề nghiệp
function toggleInput() {
    var select = document.querySelector('select');
    var companyDiv = document.querySelector('#company_div');
    var schoolsDiv = document.querySelector('#schools_div');

    if (select.value == "1") {
      companyDiv.style.display = "block";
      schoolsDiv.style.display = "none";
    } else if (select.value == "2") {
      companyDiv.style.display = "none";
      schoolsDiv.style.display = "block";
    } else {
      companyDiv.style.display = "none";
      schoolsDiv.style.display = "none";
    }
  } 

//   phone
function validatePhone() {
    const phone = document.getElementById("phone").value;
    const phoneRegex = /((09|03|07|08|05)+([0-9]{8})\b)/g;; // Regular expression for Vietnamese phone numbers
    
    if (!phoneRegex.test(phone)) {
      document.getElementById("phone-error").innerHTML = "Số điện thoại chưa đúng định dạng! Số điện thoại phải là các đầu số 09, 03, 07, 08, 05";
    } else {
      document.getElementById("phone-error").innerHTML = "";
    }
  }

  //4 ky tu 
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
      small.style.color = "rgb(255, 25, 0)";
  }
  else {
      document.getElementById('name').style.borderColor = "green";
      fullName.parentElement.classList.remove('error')
      small.innerText = "";
  }
}

function validateCompanyName() {
  const companyName = document.getElementById('company_name');//trỏ tới thẻ input
  const companySmall = document.getElementById('company_small');

  if (companyName.value.length < 4) {
      document.getElementById('name').style.borderColor = "rgb(255, 25, 0)";
      companyName.parentElement.classList.add('error')
      companySmall.innerText = "Vui lòng nhập từ 4 kí tự trở lên";
      companySmall.style.color = "rgb(255, 25, 0)";
  }
  else {
      document.getElementById('name').style.borderColor = "green";
      companyName.parentElement.classList.remove('error')
      companySmall.innerText = "";
  }
}

// const emailInput = document.getElementById('email');
// const emailError = document.getElementById('email-error');

// emailInput.addEventListener('input', () => {
//     // const emailRegex = /^[\w-\.]+@(gmail|outlook|yahoo|mil|edu|org|net|com|gov)\.[a-z]{2,3}$/i;
//     // const emailRegex = /^[\w-\.]+@(gmail|outlook|yahoo|)\.(mil|edu|org|net|com|gov)$/i;
//     const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail|outlook|yahoo|[a-zA-Z])\.(mil|org|net|com|gov|vn|info){2,4}$/i;
//     if (!emailRegex.test(emailInput.value)) {
//         emailError.textContent = 'Vui lòng nhập email đúng định dạng';
//     } else {
//         emailError.textContent = '';
//     }
// });

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

