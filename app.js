const users = [
  { id: 1, name: "คุณัญญา ประวิตรวงศ์", email: "8765820@student.triamudom.ac.th", password: "65820" },
  { id: 2, name: "ชนนิกานต์ ชัยชนะกุลธรรม", email: "8765871@student.triamudom.ac.th", password: "65871" },
  { id: 3, name: "ชนมน ไชยบุบผา", email: "8765874@student.triamudom.ac.th", password: "65874" },
  { id: 4, name: "ณฎาษาฒ์ อินทจาร", email: "8765933@student.triamudom.ac.th", password: "65933" },
  { id: 5, name: "ณัฐณิชา ลีวรรณเจริญ", email: "8765984@student.triamudom.ac.th", password: "65984" },
  { id: 6, name: "ณิชาดา ลอยสา", email: "8766017@student.triamudom.ac.th", password: "66017" },
  { id: 7, name: "ธนปรียา เชี่ยวชาญรุ่งโรจน์", email: "8766050@student.triamudom.ac.th", password: "66050" },
  { id: 8, name: "ธนัญญา ลักษณะสิทธิพันธ์", email: "8766058@student.triamudom.ac.th", password: "66058" },
  { id: 9, name: "ธนิญชิดา สนิทม่วง", email: "8766059@student.triamudom.ac.th", password: "66059" },
  { id: 10, name: "เเธนชนก ตัณฑวิรุฬห์", email: "8766095@student.triamudom.ac.th", password: "66095" },
  { id: 11, name: "นภัสนันท์ คันศร", email: "8766103@student.triamudom.ac.th", password: "66103" },
  { id: 12, name: "ปุณณรีย์ บุญเเก้ว", email: "8766204@student.triamudom.ac.th", password: "66204" },
  { id: 13, name: "พัชรณัฐ ไหมดี", email: "8766242@student.triamudom.ac.th", password: "66242" },
  { id: 14, name: "เมชญา เเสงเพชร์", email: "8766385@student.triamudom.ac.th", password: "66385" },
  { id: 15, name: "รวิสรา ตั้งภักดี", email: "8766404@student.triamudom.ac.th", password: "66404" },
  { id: 16, name: "ลานนาเทวี ศรีตระกูล", email: "8766431@student.triamudom.ac.th", password: "66431" },
  { id: 17, name: "วรัญธนิญา สูงส่งเกียรติ", email: "8766447@student.triamudom.ac.th", password: "66447" },
  { id: 18, name: "วิชญ์ณัฐ ตันพัฒนรัตน์", email: "8766466@student.triamudom.ac.th", password: "66466" },
  { id: 19, name: "อชิรญา บุตรวงศ์", email: "8766536@student.triamudom.ac.th", password: "66536" },
  { id: 20, name: "อัญชิสา ปณิธานศิริกุล", email: "8766572@student.triamudom.ac.th", password: "66572" },
  { id: 21, name: "กันตภณ สำเนียงดี", email: "8766632@student.triamudom.ac.th", password: "66632" },
  { id: 22, name: "คงสักก์ โกศัลวิตร", email: "8766662@student.triamudom.ac.th", password: "66662" }, 
  { id: 23, name: "คิดชอบ ช่างพินิจ", email: "8766669@student.triamudom.ac.th", password: "66669" },
  { id: 24, name: "จิรเมธ รุ่งวีรกุลอนันต์", email: "8766691@student.triamudom.ac.th", password: "66691" },
  { id: 25, name: "ชวัลวิทย์ ปานโปร่ง", email: "8766720@student.triamudom.ac.th", password: "66720" },
  { id: 26, name: "ณัฏฐกิตติ์ วิบูลย์สิน", email: "8766771@student.triamudom.ac.th", password: "66771" },
  { id: 27, name: "ณัฐชนน กรีธาธร", email: "8766784@student.triamudom.ac.th", password: "66784" },
  { id: 28, name: "ณัฐพนธ์ นนท์ศิลา", email: "8766795@student.triamudom.ac.th", password: "66795" },
  { id: 29, name: "ตุลย์ธัญะภณ รุจยะอรัญญ์", email: "8766818@student.triamudom.ac.th", password: "66818" },
  { id: 30, name: "ธนนท์ ธัญญกสิกล", email: "8766855@student.triamudom.ac.th", password: "66855" },
  { id: 31, name: "ธนวิน ศุภเวศมานนท์", email: "8766862@student.triamudom.ac.th", password: "66862" },
  { id: 32, name: "นันท์พัทธ์ สุโพธิ์ใหม่", email: "8766916@student.triamudom.ac.th", password: "66916" },
  { id: 33, name: "บุณย์ บุณยวีย์", email: "8766932@student.triamudom.ac.th", password: "66932" },
  { id: 34, name: "ปัณณ์ สินธุเชาวน์", email: "8766958@student.triamudom.ac.th", password: "66958" },
  { id: 35, name: "ปัณณ์ อินทรหะ", email: "8766959@student.triamudom.ac.th", password: "66959" },
  { id: 36, name: "ปุณณวิชช์ เวชกรณ์", email: "8766977@student.triamudom.ac.th", password: "66977" },
  { id: 37, name: "พรภวิษย์ แปงเครือ", email: "8767006@student.triamudom.ac.th", password: "67006" },
  { id: 38, name: "พิชชากร นาคินทร์", email: "8767024@student.triamudom.ac.th", password: "67024" },
  { id: 39, name: "ภณปณัช เบ็ญจวิลาส", email: "8767061@student.triamudom.ac.th", password: "67061" },
  { id: 40, name: "ราเมศ จงฤกษ์งาม", email: "8767130@student.triamudom.ac.th", password: "67130" },
  { id: 41, name: "สัจจพร รินทรวิฑูรย์", email: "8767206@student.triamudom.ac.th", password: "67206" }
  
];

// ฟังก์ชันตรวจสอบการเข้าสู่ระบบ
document.getElementById("loginForm")?.addEventListener("submit", function (event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const user = users.find((u) => u.email === email && u.password === password);
  if (user) {
    alert(`เข้าสู่ระบบสำเร็จ! ยินดีต้อนรับ ${user.name}`);
    localStorage.setItem("currentUser", JSON.stringify(user));
    window.location.href = "dashboard.html";
  } else {
    alert("อีเมลหรือรหัสผ่านไม่ถูกต้อง!");
  }
});

// ข้อมูลรายชื่อนักเรียน
const students = [
  "คุณัญญา ประวิตรวงศ์", "ชนนิกานต์ ชัยชนะกุลธรรม", "ชนมน ไชยบุบผา", "ณฎาษาฒ์ อินทจาร", "ณัฐณิชา ลีวรรณเจริญ",
  "ณิชาดา ลอยสา", "ธนปรียา เชี่ยวชาญรุ่งโรจน์", "ธนัญญา ลักษณะสิทธิพันธ์", "ธนิญชิดา สนิทม่วง", "เเธนชนก ตัณฑวิรุฬห์",
  "นภัสนันท์ คันศร", "ปุณณรีย์ บุญเเก้ว", "พัชรณัฐ ไหมดี", "เมชญา เเสงเพชร์", "รวิสรา ตั้งภักดี",
  "ลานนาเทวี ศรีตระกูล", "วรัญธนิญา สูงส่งเกียรติ", " วิชญ์ณัฐ ตันพัฒนรัตน์", "อชิรญา บุตรวงศ์", "อัญชิสา ปณิธานศิริกุล",
  "กันตภณ สำเนียงดี", "คงสักก์ โกศัลวิตร", "คิดชอบ ช่างพินิจ", "จิรเมธ รุ่งวีรกุลอนันต์", "ชวัลวิทย์ ปานโปร่ง",
  "ณัฏฐกิตติ์ วิบูลย์สิน", "ณัฐชนน กรีธาธร", "ณัฐพนธ์ นนท์ศิลา", "ตุลย์ธัญะภณ รุจยะอรัญญ์", "ธนนท์ ธัญญกสิกล",
  "ธนวิน ศุภเวศมานนท์", "นันท์พัทธ์ สุโพธิ์ใหม่", "บุณย์ บุณยวีย์", "ปัณณ์ สินธุเชาวน์", "ปัณณ์ อินทรหะ",
  "ปุณณวิชช์ เวชกรณ์", "พรภวิษย์ แปงเครือ", "พิชชากร นาคินทร์", "ภณปณัช เบ็ญจวิลาส", "ราเมศ จงฤกษ์งาม", "สัจจพร รินทรวิฑูรย์"
];

// ข้อมูลตารางสอน
const schedule = {
  monday: [
    { time: "07:50 - 08:40", subject: "คณิตศาสตร์ [ครูชลธิชา]", room: "667" },
    { time: "08:40 - 09:30", subject: "ชีววิทยา [ครูกชกร]", room: "667" },
    { time: "09:30 - 09:40", subject: "พัก 10 นาที", room: "667" },
    { time: "09:40 - 10:30", subject: "ชีววิทยา [ครูกชกร]", room: "667" },
    { time: "10:30 - 11:20", subject: "การอ่าน [ครูภาวิณี]", room: "667" },
    { time: "11:20 - 12:20", subject: "พักกลางวัน", room: "667" },
    { time: "12:20 - 13:10", subject: "ฟิสิกส์ [ครูณัฐวัชร์]", room: "667" },
    { time: "13:10 - 14:00", subject: "ฟิสิกส์ [ครูณัฐวัชร์]", room: "667" },
    { time: "14:00 - 14:10", subject: "พัก 10 นาที", room: "667" },
    { time: "14:10 - 15:00", subject: "ภาษาอังกฤษ [ครูภาวิณี]", room: "667" },
    { time: "15:00 - 15:50", subject: "กิจกรรม", room: "667" },
  ],
  tuesday: [
    { time: "07:50 - 08:40", subject: "การออกเเบบฯ [ครูนรากรณ์]", room: "667" },
    { time: "08:40 - 09:30", subject: "การออกเเบบฯ [ครูนรากรณ์]", room: "667" },
    { time: "09:30 - 09:40", subject: "พัก 10 นาที", room: "667" },
    { time: "09:40 - 10:30", subject: "คณิตศาสตร์ [ครูอะมีนะ]", room: "667" },
    { time: "10:30 - 11:20", subject: "ประวัติฯการเมืองไทย [ครูศิริโชค]", room: "667" },
    { time: "11:20 - 12:20", subject: "พักกลางวัน", room: "667" },
    { time: "12:20 - 13:10", subject: "เคมี [ครูณัฐพล]", room: "667" },
    { time: "13:10 - 14:00", subject: "เคมี [ครูณัฐพล]", room: "667" },
    { time: "14:00 - 14:10", subject: "พัก 10 นาที", room: "667" },
    { time: "14:10 - 15:00", subject: "สุขศึกษา [ครูสิรากร]", room: "667" },
    { time: "15:00 - 15:50", subject: "-", room: "667" },
  ],
  wednesday: [
    { time: "07:50 - 08:40", subject: "วิทยาศาตร์ [ครูณัฐพล]", room: "667" },
    { time: "08:40 - 09:30", subject: "หน้าที่พลเมืองฯ [ครูศิริโชค]", room: "667" },
    { time: "09:30 - 09:40", subject: "พัก 10 นาที", room: "667" },
    { time: "09:40 - 10:30", subject: "คณิตศาสตร์ [ครูชลธิชา]", room: "667" },
    { time: "10:30 - 11:20", subject: "พลศึกษา [ครูพงศ์ระพี]", room: "667" },
    { time: "11:20 - 12:20", subject: "พักกลางวัน", room: "667" },
    { time: "12:20 - 13:10", subject: "คณิตศาสตร์(HR) [ครูอะมีนะ]", room: "667" },
    { time: "13:10 - 14:00", subject: "ดนตรีสากล [ครูชาญวิทย์]", room: "667" },
    { time: "14:00 - 14:10", subject: "พัก 10 นาที", room: "667" },
    { time: "14:10 - 15:00", subject: "วิทยาศาตร์ [ครูกชกร]", room: "667" },
    { time: "15:00 - 15:50", subject: "ภาษาอังกฤษ [ครูภาวิณี]", room: "667" },
  ],
  thursday: [
    { time: "07:50 - 08:40", subject: "คณิตศาสตร์ [ครูชลธิชา]", room: "667" },
    { time: "08:40 - 09:30", subject: "ภาษาไทย [ครูสิทธิศักดิ์]", room: "667" },
    { time: "09:30 - 09:40", subject: "พัก 10 นาที", room: "667" },
    { time: "09:40 - 10:30", subject: "เเนะเเนว [ครูหทัย]", room: "667" },
    { time: "10:30 - 11:20", subject: "ฟิสิกส์ [ครูณัฐวัชร์]", room: "667" },
    { time: "11:20 - 12:20", subject: "พักกลางวัน", room: "667" },
    { time: "12:20 - 13:10", subject: "ดนตรีไทย [ครูโกเมศ]", room: "667" },
    { time: "13:10 - 14:00", subject: "หน้าที่พลเมืองฯ [ครูศิริโชค]", room: "667" },
    { time: "14:00 - 14:10", subject: "พัก 10 นาที", room: "667" },
    { time: "14:10 - 15:00", subject: "การอ่าน [ครูภาวิณี]", room: "667" },
    { time: "15:00 - 15:50", subject: "-", room: "667" },
  ],
  friday: [
    { time: "07:50 - 08:40", subject: "ภาษาไทย [ครูสิทธิศักดิ์]", room: "667" },
    { time: "08:40 - 09:30", subject: "การอ่าน [ครู James]", room: "667" },
    { time: "09:30 - 09:40", subject: "พัก 10 นาที", room: "667" },
    { time: "09:40 - 10:30", subject: "คณิตศาสตร์ [ครูอะมีนะ]", room: "667" },
  ]
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
