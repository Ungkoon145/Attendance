// ข้อมูลผู้ใช้ที่กำหนดไว้ล่วงหน้า
const validEmail = "1@student.triamudom.ac.th";
const validPassword = "1234";

// ฟังก์ชันตรวจสอบการเข้าสู่ระบบ
document.getElementById("loginForm")?.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === validEmail && password === validPassword) {
    alert("เข้าสู่ระบบสำเร็จ!");
    window.location.href = "dashboard.html"; // ไปยังหน้า Dashboard
  } else {
    alert("อีเมลหรือรหัสผ่านไม่ถูกต้อง!");
  }
});

// ข้อมูลรายชื่อนักเรียน
const students = [
  "นักเรียนที่ 1", "นักเรียนที่ 2", "นักเรียนที่ 3", "นักเรียนที่ 4", "นักเรียนที่ 5",
  "นักเรียนที่ 6", "นักเรียนที่ 7", "นักเรียนที่ 8", "นักเรียนที่ 9", "นักเรียนที่ 10"
];

// ข้อมูลตารางสอน
const schedule = {
  monday: [
    { time: "08:00 - 09:30", subject: "คณิตศาสตร์", room: "101" },
    { time: "10:00 - 11:30", subject: "ภาษาอังกฤษ", room: "102" },
    { time: "13:00 - 14:30", subject: "วิทยาศาสตร์", room: "103" }
  ],
  // เพิ่มข้อมูลวันอื่นๆ เช่น tuesday, wednesday ...
};

// ฟังก์ชันสร้างตารางรายชื่อนักเรียน
function populateStudentTable() {
  const tableBody = document.querySelector("#studentTable tbody");
  if (!tableBody) return;
  tableBody.innerHTML = "";
  students.forEach((student, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${student}</td>
      <td><button class="checkButton" onclick="markAttendance(${index})">เช็คชื่อ</button></td>
    `;
    tableBody.appendChild(row);
  });
}

// ฟังก์ชันเช็คชื่อ
function markAttendance(index) {
  const row = document.querySelector(`#studentTable tbody tr:nth-child(${index + 1}) td:last-child`);
  row.innerHTML = `<span style="color: green;">เช็คชื่อแล้ว</span>`;
}

// ฟังก์ชันสร้างตารางสอนตามวันที่เลือก
function populateSchedule(day) {
  const tableBody = document.querySelector("#scheduleTable tbody");
  if (!tableBody) return;
  tableBody.innerHTML = "";
  schedule[day]?.forEach((entry) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${entry.time}</td>
      <td>${entry.subject}</td>
      <td>${entry.room}</td>
    `;
    tableBody.appendChild(row);
  });
}

// การจัดการเปลี่ยนวันในตารางสอน
document.getElementById("daySelect")?.addEventListener("change", (event) => {
  populateSchedule(event.target.value);
});

// ปุ่ม Logout
document.getElementById("logoutButton")?.addEventListener("click", function () {
  window.location.href = "index.html";
});

// โหลดข้อมูลเมื่อ Dashboard ถูกเปิด
document.addEventListener("DOMContentLoaded", () => {
  populateStudentTable();
  populateSchedule("monday");
});
