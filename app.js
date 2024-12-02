// app.js

// ฟังก์ชั่นที่ทำงานเมื่อฟอร์ม Login ถูกส่ง
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // หยุดการส่งฟอร์มปกติ
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // ข้อมูลอีเมลและรหัสผ่านที่ถูกต้อง
    const validEmail = '1@student.triamudom.ac.th'; // อีเมลของคุณ
    const validPassword = '1234'; // รหัสผ่านที่ตั้งไว้
  
    // ตรวจสอบว่าอีเมลและรหัสผ่านที่กรอกถูกต้องหรือไม่
    if (email === validEmail && password === validPassword) {
      // ถ้าถูกต้องให้เปลี่ยนไปที่หน้า Dashboard
      alert("เข้าสู่ระบบสำเร็จ!");
      window.location.href = 'dashboard.html'; // ไปยังหน้า dashboard
    } else {
      // ถ้าไม่ถูกต้องแสดงข้อความผิดพลาด
      alert('อีเมลหรือรหัสผ่านไม่ถูกต้อง');
    }
  });
