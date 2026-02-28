# 🏥 Hospital Management System (HMS)

A robust and scalable software solution designed to digitize healthcare operations. This system streamlines patient intake, automates clinical workflows, and manages administrative tasks such as billing and inventory to improve overall hospital efficiency.

---

## 🚀 Key Features

* **Role-Based Access Control (RBAC):** Distinct dashboards and permissions for Admins, Doctors, Nurses, and Receptionists.
* **Patient Records Management:** Centralized Electronic Health Records (EHR) including medical history and prescriptions.
* **Appointment Lifecycle:** Real-time scheduling, status updates (Pending/Confirmed/Treated), and automated queuing.
* **Billing & Finance:** Dynamic invoice generation based on consultation fees, lab tests, and room stay.
* **Pharmacy & Inventory:** Track medical supplies and drug stocks with low-inventory alerts.
* **Lab Management:** Record and manage diagnostic test results and reports.

---

## 🏗 System Architecture

The system is built using a layered architecture to ensure separation of concerns and data security.



1.  **Presentation Layer:** Interactive UI for staff and patients.
2.  **Service Layer:** Business logic for appointment validation, billing calculations, and authentication.
3.  **Data Layer:** Relational database management for persistent storage of sensitive medical data.

---

## 🛠 Tech Stack

| Component      | Technology                                    |
| :------------- | :-------------------------------------------- |
| **Backend** | Java (Spring Boot) / Python / Node.js         |
| **Frontend** | React.js / Angular / HTML5 & CSS3             |
| **Database** | MySQL / PostgreSQL                            |
| **API Testing**| Postman                                       |
| **Version Control** | Git                                      |

---

## 🏁 Getting Started

### Prerequisites
* **Language Environment:** [e.g., JDK 17+ / Python 3.10+]
* **Database:** [e.g., MySQL 8.0]
* **Build Tool:** [e.g., Maven / Gradle / pip]

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone [https://github.com/your-username/hospital-management-system.git](https://github.com/your-username/hospital-management-system.git)
   cd hospital-management-system
   ```
2. **Configure Database**
* Create a new database: CREATE DATABASE globalcare_db;
* Update src/main/resources/application.properties with your database credentials.
* Run the Application

3. 📸 **Interface Preview**
* Admin Dashboard: Overview of hospital statistics and staff management.
* Patient Portal: Streamlined interface for medical history and appointment booking.

4. 📄 **License**
This project is licensed under the MIT License - see the  file for details.
