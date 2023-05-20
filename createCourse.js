//<!-- ngày hiện tại -->

// function checkDate(){
//     var date = new Date();
//     var day = date.getDate() + 1;
//     var month = date.getMonth() + 1;
//     var year = date.getFullYear();

//     if (month < 10) month = "0" + month;
//     if (day < 10) day = "0" + day;

//     var today = year + "-" + month + "-" + day;       
//     document.getElementById("expected-date").value = today;

//     // Thiết lập ngày tối thiểu cho input date
//     document.getElementById("expected-date").setAttribute("min", today);

//     let endDateInput = document.getElementById("expected-date");

//     // Lắng nghe sự kiện khi người dùng chọn ngày
//     endDateInput.addEventListener("change", function() {
//         let endDate = new Date(endDateInput.value);
        
//         if (endDate < new Date()) {
//         // small_date.innerText = "Ngày dự kiến mở lớp phải từ ngày hiện tại trở đi!";
//         // small_date.style.color = "rgb(255, 25, 0)";
//             alert("Ngày dự kiến mở lớp phải từ ngày mai trở đi!");
//         endDateInput.value = "";
//         document.getElementById("expected-date").value = today;
//         return;
//         }
//         // else{
//         //   small_date.innerText="";
//         // }
//     });

// }

// const startTimeInput = document.getElementById("startTime");
// const endTimeInput = document.getElementById("endTime");
// const small1 = document.getElementById('small_Time');
// const small2 = document.getElementById('small_Time2');

// startTimeInput.addEventListener("change", () => {
//     // Nhận thời gian bắt đầu
//     const startTime = new Date(`2000-01-01T${startTimeInput.value}`);

//     // Đặt thời gian kết thúc tối thiểu thành thời gian bắt đầu + 2 giờ
//     const minEndTime = new Date(startTime.getTime() + 2 * 60 * 60 * 1000);

//     // Đặt thời gian bắt đầu tối thiểu là 7 giờ sáng
//     const minStartTime = new Date(`2000-01-01T07:00`);

//     // Đặt thời gian kết thúc tối đa là 7 giờ tối
//     const maxEndTime = new Date(`2000-01-01T19:00`);

//     // Kiểm tra xem thời gian bắt đầu có nằm trong phạm vi hợp lệ không
//     if (startTime < minStartTime || startTime > maxEndTime) {
//     small1.innerText = "Lớp học chỉ được bắt đầu từ 7 giờ sáng đến 7 giờ tối";
//     small1.style.color = "rgb(255, 25, 0)";
//     // alert("Lớp học chỉ được bắt đầu từ 7 giờ sáng đến 7 giờ tối");
//     startTimeInput.value = "";
//     // endTimeInput.value = "";
//     return;
//     }else{
//     small1.innerText = "";
//     }

//     // Đặt giá trị thời gian kết thúc tối thiểu
//     const minEndTimeValue = `${minEndTime.getHours().toString().padStart(2, '0')}:${minEndTime.getMinutes().toString().padStart(2, '0')}`;
//     endTimeInput.min = minEndTimeValue;

//     // Kiểm tra xem thời gian kết thúc có nằm trong phạm vi hợp lệ không
//     const endTime = new Date(`2000-01-01T${endTimeInput.value}`);
//     if (endTime < minStartTime ||  endTime > maxEndTime  ) {
    
//     small2.innerText = "Lớp học chỉ được kết thúc từ 7 giờ sáng đến 7 giờ tối và phải kéo dài ít nhất 2 giờ so với giờ bắt đầu";
//     small2.style.color = "rgb(255, 25, 0)";
//     // alert("Lớp học chỉ được kết thúc từ 7 giờ sáng đến 7 giờ tối và phải kéo dài ít nhất 2 giờ so với giờ bắt đầu");
//     endTimeInput.value = "";
//     return;
//     }else{
//     small2.innerText = "";
//     }
// });
// // tự động tặng thêm 2h cho and time


// endTimeInput.addEventListener("change", () => {
//     // Nhận thời gian bắt đầu
//     const startTime = new Date(`2000-01-01T${startTimeInput.value}`);

//     // Đặt thời gian kết thúc tối thiểu thành thời gian bắt đầu + 2 giờ
//     const minEndTime = new Date(startTime.getTime() + 2 * 60 * 60 * 1000);

//     // Đặt thời gian bắt đầu tối đa là 7 giờ tối
//     const minStartTime = new Date(`2000-01-01T07:00`);

//     // Đặt thời gian kết thúc tối đa là 7 giờ tối
//     const maxEndTime = new Date(`2000-01-01T19:00`);


//     // Đặt giá trị thời gian kết thúc tối thiểu
//     if (minEndTime) {
//     const minEndTimeValue = `${minEndTime.getHours().toString().padStart(2, '0')}:${minEndTime.getMinutes().toString().padStart(2, '0')}`;
//     endTimeInput.min = minEndTimeValue;
//     }

//     // Kiểm tra xem thời gian kết thúc có nằm trong phạm vi hợp lệ không
//     const endTime = new Date(`2000-01-01T${endTimeInput.value}`);
//     if (endTime < minStartTime ||  endTime > maxEndTime ) {
    
//     small2.innerText = "Lớp học chỉ được kết thúc từ 7 giờ sáng đến 7 giờ tối";
//     small2.style.color = "rgb(255, 25, 0)";
//     // alert("Lớp học chỉ được kết thúc từ 7 giờ sáng đến 7 giờ tối và phải kéo dài ít nhất 2 giờ so với giờ bắt đầu");
//     endTimeInput.value = "";
//     return;
//     }if(endTime > minStartTime &&  endTime < maxEndTime  && endTime < minEndTime ){
//     // small2.innerText = "Lớp học phải kéo dài ít nhất 2 giờ so với giờ bắt đầu";
//     // small2.style.color = "rgb(255, 25, 0)";
//         alert("Lớp học phải kéo dài ít nhất 2 giờ so với giờ bắt đầu");
//     // endTimeInput.value = "";
//     updateEndTime();
//     return;
//     }else{
//     small2.innerText = "";
//     }
// });

// function updateEndTime() {
//     const startTimeInput = document.getElementById("startTime");
//     const endTimeInput = document.getElementById("endTime");

//     const startTime = new Date(`2000-01-01T${startTimeInput.value}:00`);

//     // Thêm 2 giờ vào thời gian start-time để tính giá trị cho ô nhập thời gian end-time
    
//     const endTime = new Date(startTime.getTime() + (2 * 60 * 60 * 1000));

//     const endTimeString = `${endTime.getHours().toString().padStart(2, "0")}:${endTime.getMinutes().toString().padStart(2, "0")}`;
//     endTimeInput.value = endTimeString;
    
// }


// Count words

function checkValidStartTime() {
    let startTime = document.getElementById("startTime");
    if (!startTime.checkValidity()) {
        alert("Thời gian bắt đầu khóa học chỉ được trong khoảng từ 07:00 đến 19:00");
        // document.getElementById("startTime").style.borderColor = "red";
    }
    else {
        let [hours, minutes] = startTime.value.split(":");

        if (parseInt(hours) + 2 < 10)
            hours = "0" + (parseInt(hours) + 2);
        else hours = (parseInt(hours) + 2) + "";
        if (parseInt(minutes) < 10) minutes = "0" + parseInt(minutes); else minutes = parseInt(minutes) + "";
        let endTime = hours + ":" + minutes;
        document.getElementById("endTime").value = endTime;
        // document.getElementById("startTime").style.borderColor = "green";
        // document.getElementById("endTime").style.borderColor = "green";
    }
}

function checkValidEndTime() {
    let startTime = document.getElementById("startTime");
    let endTime = document.getElementById("endTime");
    let [hoursStart, minutesStart] = startTime.value.split(":");
    let [hoursEnd, minutesEnd] = endTime.value.split(":");
    if (parseInt(hoursEnd) < parseInt(hoursStart) + 2) {
        alert("Giờ kết thúc phải cách giờ bắt đầu tối thiểu 2 tiếng");
        // document.getElementById("startTime").style.borderColor = "red";
        // document.getElementById("endTime").style.borderColor = "red";
    }
    else if (parseInt(hoursEnd) == parseInt(hoursStart) + 2) {
        if (parseInt(minutesEnd) < parseInt(minutesStart)) {
            alert("Giờ kết thúc phải cách giờ bắt đầu tối thiểu 2 tiếng");
            // document.getElementById("startTime").style.borderColor = "red";
            // document.getElementById("endTime").style.borderColor = "red";
        }
        // else {
        //     document.getElementById("startTime").style.borderColor = "green";
        //     document.getElementById("endTime").style.borderColor = "green";
        // }
    }
    // else {
    //     document.getElementById("startTime").style.borderColor = "green";
    //     document.getElementById("endTime").style.borderColor = "green";
    // }
}

function setMinDate() {
    // console.log(new Date());
    let minDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);

    // console.log(minYear.toString() + "-" + minMonth.toString() + "-" + minDate.toString());
    document.getElementById("expected-date").setAttribute("min", minDate.toISOString().split("T")[0]);
}

document.getElementById("expected-date").value = new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toISOString().split("T")[0];

let selectedRow = null;

function onFormSubmit() {
    var checkBoxes = document.getElementsByClassName('checkbox-date');
    var isChecked = false;
    for (var i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].checked) {
            isChecked = true;
        };
    };
    if (isChecked) {
        let formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
    } else {
        alert('Chọn ít nhất một thứ trong tuần');
    }

    
    // let formData = readFormData();
    // if (selectedRow == null)
    //     insertNewRecord(formData);
    // else
    //     updateRecord(formData);


}

function readFormData() {
    let listCheck = [];
    var checkboxes = document.querySelectorAll('.checkbox-date');
    for (var checkbox of checkboxes) {
        if (checkbox.checked == true) {
            listCheck.push(checkbox.value);
        }
        else {
            listCheck = listCheck.filter(e => e !== this.value);
        }
    }

    let formData = {};
    formData["startTime"] = document.getElementById("startTime").value;
    formData["endTime"] = document.getElementById("endTime").value;
    formData["slot"] = document.getElementById("course-slot").value;
    formData["expectedDate"] = document.getElementById("expected-date").value;
    formData["listCheck"] = listCheck;
    return formData;

}

function insertNewRecord(data) {
    // console.log(document.getElementById("data-table").getElementsByTagName('tbody')[0].rows.length);
    let table = document.getElementById("data-table").getElementsByTagName('tbody')[0];
    if (table.rows.length === 0) {
        let newRow = table.insertRow(table.length);
        cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.startTime;
        cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.endTime;
        cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.listCheck;
        cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.slot;
        cell5 = newRow.insertCell(4);
        cell5.innerHTML = data.expectedDate;
        cell6 = newRow.insertCell(5);
        cell6.innerHTML = `<button class="btn btn-primary" onClick="onEdit(this)">Sửat</button>
                           <button class="btn btn-danger" onClick="onDelete(this)">Xoá</button>`;
        resetForm();

    }
    else {
        if (checkDateExists(data) == 1) {
            alert("Thời gian đã trùng với lịch học khác, vui lòng chọn thời gian khác");
        }
        else {
            let newRow = table.insertRow(table.length);
            cell1 = newRow.insertCell(0);
            cell1.innerHTML = data.startTime;
            cell2 = newRow.insertCell(1);
            cell2.innerHTML = data.endTime;
            cell3 = newRow.insertCell(2);
            cell3.innerHTML = data.listCheck;
            cell4 = newRow.insertCell(3);
            cell4.innerHTML = data.slot;
            cell5 = newRow.insertCell(4);
            cell5.innerHTML = data.expectedDate;
            cell6 = newRow.insertCell(5);
            cell6.innerHTML = `<button class="btn btn-primary" onClick="onEdit(this)">Sửa</button>
                           <button class="btn btn-danger" onClick="onDelete(this)">Xoá</button>`;
            resetForm();

        }
    }
}

function checkDateExists(data) {
    let table = document.getElementById("data-table").getElementsByTagName('tbody')[0];
    let startTime = data.startTime.toString();
    let [hoursStart, minutesStart] = startTime.split(":");

    let currentDate = new Date(data.expectedDate).getTime();

    for (let i = 0; i < table.rows.length; i++) {
        let dataDate = new Date((table.rows[i].cells[4].textContent)).getTime();

        if (currentDate == dataDate) {
            let [currentHoursEnd, currentMinutesEnd] = table.rows[i].cells[1].textContent.split(":");

            if (parseInt(hoursStart) < parseInt(currentHoursEnd)) {
                return 1;
            }
            else if (parseInt(hoursStart) == parseInt(currentHoursEnd)) {
                if (parseInt(minutesStart) < parseInt(currentMinutesEnd)) {
                    return 1;
                }
            }
        }
    }
    return 0;
}
function resetForm() {
    document.getElementById("startTime").value = "";
    document.getElementById("endTime").value = "";
    document.getElementById("course-slot").value = 1;
    document.getElementById("expected-date").value = new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toISOString().split("T")[0];;
    var checkboxes = document.querySelectorAll('.checkbox-date');
    for (var checkbox of checkboxes) {
        checkbox.checked = false;
    }
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    // console.log(selectedRow); 
    document.getElementById("startTime").value = selectedRow.cells[0].innerHTML;
    document.getElementById("endTime").value = selectedRow.cells[1].innerHTML;
    document.getElementById("course-slot").value = selectedRow.cells[3].innerHTML;
    document.getElementById("expected-date").value = selectedRow.cells[4].innerHTML;
    let dateArr = selectedRow.cells[2].innerHTML.split(",");
    var checkboxes = document.querySelectorAll('.checkbox-date');
    for (let i = 0; i < dateArr.length; i++) {
        for (var checkbox of checkboxes) {
            if (checkbox.value === dateArr[i]) {
                checkbox.checked = true;
            }
        }
    }
    document.getElementById("create-class").textContent = "Lưu thay đổi";
}

    // const selectedRow = td.parentElement.parentElement;
    // document.getElementById("startTime").value = selectedRow.cells[0].innerHTML;
    // console.log(document.getElementById("startTime").value);
    // document.getElementById("endTime").value = selectedRow.cells[1].innerHTML;
    // document.getElementById("course-slot").value = selectedRow.cells[3].innerHTML;
    // document.getElementById("expected-date").value = selectedRow.cells[4].innerHTML;
    
    // const dateArr = selectedRow.cells[2].innerHTML.split(",");
    // const checkboxes = document.querySelectorAll('.checkbox-date');
    
    // for (const checkbox of checkboxes) {
    //   if (dateArr.includes(checkbox.value)) {
    //     checkbox.checked = true;
    //   } else {
    //     checkbox.checked = false;
    //   }
    // }
    
    // document.getElementById("create-class").textContent = "Lưu thay đổi";

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.startTime;
    selectedRow.cells[1].innerHTML = formData.endTime;
    selectedRow.cells[2].innerHTML = formData.listCheck;
    selectedRow.cells[3].innerHTML = formData.slot;
    selectedRow.cells[4].innerHTML = formData.expectedDate;
    document.getElementById("create-class").textContent = "Tạo lớp học";
    resetForm();
}

function onDelete(td) {
    const row = td.closest('tr');
    row.remove();
}



//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////


const input_gr = document.getElementById('inputGroupFile');
const image = document.getElementById('imgPreview');

input_gr.addEventListener('change', (e) => {
    if (e.target.files.length) {
        const src = URL.createObjectURL(e.target.files[0]);
        image.src = src;
    }
});

// ////////textarea giới hạn ký tự
// Lấy phần tử textarea và phần tử div hiển thị số ký tự
var inputTextarae = document.getElementById("input");
var counter = document.getElementById("counter");

// Giới hạn số ký tự nhập vào là 200
var maxLength = 200;

// Thêm sự kiện nhập vào textarea
inputTextarae.addEventListener("input", function() {
// Lấy số ký tự đang có trong textarea
var currentLength = inputTextarae.value.length;
// Tính số ký tự còn lại có thể nhập
var remainingLength = maxLength - currentLength;
// Cập nhật số ký tự đang có trên trang web
counter.innerHTML = currentLength + "/" + maxLength;
// Nếu số ký tự nhập vào vượt quá giới hạn thì cắt bớt đi
if (currentLength > maxLength) {
  inputTextarae.value = inputTextarae.value.slice(0, maxLength);
}
// Nếu số ký tự còn lại bằng 0 thì không cho phép nhập thêm
if (remainingLength === 0) {
  inputTextarae.setAttribute("readonly", true);
} else {
  inputTextarae.removeAttribute("readonly");
}

});


  //3 ky tu 
  function validateName() {
  const courseName = document.getElementById('name');//trỏ tới thẻ input
  const small = courseName.parentElement.querySelector('small');
  if (courseName.value.length < 3) {
      document.getElementById('name').style.borderColor = "rgb(255, 25, 0)";
      courseName.parentElement.classList.add('error')
      small.innerText = "Vui lòng nhập từ 3 kí tự trở lên";
      small.style.color = "rgb(255, 25, 0)";
  }
  else {
      document.getElementById('name').style.borderColor = "green";
      courseName.parentElement.classList.remove('error')
      small.innerText = "";
  }
}


 /////giá giền vnd 1.111.111 

  $("input[data-type='currency']").on({
      keyup: function () {
          formatCurrency($(this));
      },
      blur: function () {
          formatCurrency($(this), "blur");
      }
  });


  function formatNumber(n) {
      // format number 1000000 to 1,234,567
      return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }


  function formatCurrency(input, blur) {
      // appends $ to value, validates decimal side
      // and puts cursor back in right position.

      // get input value
      var input_val = input.val();

      // don't validate empty input
      if (input_val === "") { return; }

      // original length
      var original_len = input_val.length;

      // initial caret position 
      var caret_pos = input.prop("selectionStart");

      // check for decimal
      if (input_val.indexOf(",") >= 0) {

          // get position of first decimal
          // this prevents multiple decimals from
          // being entered
          var decimal_pos = input_val.indexOf(",");

          // split number by decimal point
          var left_side = input_val.substring(0, decimal_pos);
          var right_side = input_val.substring(decimal_pos);

          // add commas to left side of number
          left_side = formatNumber(left_side);

          // validate right side
          right_side = formatNumber(right_side);

          // On blur make sure 2 numbers after decimal
          if (blur === "blur") {
              right_side += "00";
          }

          // Limit decimal to only 2 digits
          right_side = right_side.substring(0, 2);

          // join number by .
          input_val = left_side + "," + right_side + " VND";

      } else {
          // no decimal entered
          // add commas to number
          // remove all non-digits
          input_val = formatNumber(input_val);
          input_val = input_val + " VND";

          // final formatting
          if (blur === "blur") {
              input_val += "";
          }
      }

      // send updated string to input
      input.val(input_val);

      // put caret back in the right position
      var updated_len = input_val.length;
      caret_pos = updated_len - original_len + caret_pos;
      input[0].setSelectionRange(caret_pos, caret_pos);
  }

 ////uploas-delete ảnh 

  var i = document.getElementById("inputGroupFile")
  var a = document.getElementById("imgPreview");
  function readUrl(input){
    if(input.files){
        var reader = new FileReader();
        reader.readAsDataURL(input.files[0]);
        reader.onload=(e)=>{
            a.src = e.target.result;
        }
    }
    }

    var inputFile = document.getElementById("inputFile");
  removeImg=()=>{
    a.src="img/upload-img.jpg"; 
    inputFile.value="";
  }

  $(document).ready(function() {
    $('#btn_reset_file').on('click', function() {     
        $('#inputGroupFile').val('');
    });
  });


 ////min max số 
  function validNumber() {
    const min = document.getElementById("quantity-min");
    const max = document.getElementById("quantity-max");
    const quantity = document.getElementById("quantity");
    const smallMM = document.getElementById('small_MinMax');
    if (parseInt(min.value, 10) < 0) {
        min.value = 0;
        document.getElementById("quantity-min").style.borderColor = "rgb(255, 25, 0)";
        smallMM.innerText = "Giá trị min không được nhỏ hơn 0";
    }
    else if (parseInt(max.value, 10) < 0) {
        max.value=0;
        document.getElementById("quantity-max").style.borderColor = "rgb(255, 25, 0)";
        smallMM.innerText = "Giá trị max không được nhỏ hơn 0";

    }
    else if (parseInt(min.value, 10) >= parseInt(max.value, 10)) {
        min.value=max.value;
        document.getElementById("quantity-min").style.borderColor = "rgb(255, 25, 0)";
        document.getElementById("quantity-max").style.borderColor = "rgb(255, 25, 0)";
        smallMM.innerText = "Giá trị min không được lớn hơn hoặc bằng giá trị max";
    }
    else {
        smallMM.innerText = "";
        document.getElementById("quantity-min").style.borderColor = "";
        document.getElementById("quantity-max").style.borderColor = "";
    }

}

 //taggggg 
  let input_tag, hashtagArray, container, t;

  input_tag = document.querySelector('#hashtags');
  container = document.querySelector('.tag-container');
  hashtagArray = [];

  input_tag.addEventListener('keyup', () => {
      if (event.which == 13 && input_tag.value.length > 0) {
        var text = document.createTextNode(input_tag.value);
        var p = document.createElement('p');
        container.appendChild(p);
        p.appendChild(text);
        p.classList.add('tag');
        input_tag.value = '';
        
        let deleteTags = document.querySelectorAll('.tag');
        
        for(let i = 0; i < deleteTags.length; i++) {
          deleteTags[i].addEventListener('click', () => {
            container.removeChild(deleteTags[i]);
          });
        }
      }
  });

 //gg meet 
const courseWeb = document.getElementById('website');
const small = document.getElementById('website-error');

courseWeb.addEventListener('input', function(event) {
    if (courseWeb.validity.valid) {
    small.innerText = '';
    small.className = 'text-danger';
    } else {
    small.innerText = 'Đường dẫn không đúng định dạng của Google Meet, vui lòng kiểm tra lại!';
    small.className = 'text-danger active';
    }
});



