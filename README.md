### **Abroad Scholarship Management System**  
A **MERN Stack** Web Application

The **Abroad Scholarship Management System** is a full-stack web application designed to streamline the process of applying for international IT scholarships. Built using the **MERN stack** (MongoDB, Express.js, React, and Node.js), this system allows students to submit their applications and academic records for evaluation.


### **Key Features**

1. **Student Application Form:**
   - Collects basic student information and academic records.
   - Validates eligibility criteria:
     - Students must have a minimum of **85%** in their last academic year.
     - Age requirement: **19 years or older**.
   - Offers two selection options:
     - **University-first Preference:** Based on the student's academic record, the IT faculty is assigned according to the chosen university.
     - **Faculty-first Preference:** The system checks available seats for the chosen faculty across the three participating universities.

2. **Admin Dashboard:**
   - Secure login for administrators.
   - View, filter, and search student applications.
   - Approve or reject applications manually.
   - Real-time update of available seats upon approval of applications.
   - Dashboard insights on application statistics.

3. **Database Integration:**
   - All student applications and university data are stored and managed in **MongoDB**.
   - Dynamic updates of available seats based on application status.

4. **Authentication & Authorization:**
   - Secure admin access using **JWT (JSON Web Tokens)**.
   - Protected routes to ensure only authorized users can manage applications.

5. **Responsive UI:**
   - Clean, modern interface for both students and administrators.
   - Mobile-friendly design for accessibility across devices.

---

### **Technology Stack**

- **Frontend:** React.js, Tailwind CSS (for responsive UI)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (with Mongoose for schema modeling)
- **Authentication:** JWT (JSON Web Tokens)

---
