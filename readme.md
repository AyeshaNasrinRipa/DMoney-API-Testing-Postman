# dmoney API Testing with Postman  

This repository provides the API testing suite for the **dmoney** application, developed and executed using **Postman**. It includes Postman collections, detailed test cases, and execution reports to verify that the application functions as expected.  

---

## 📖 Introduction  
The **dmoney API Testing** project is designed to validate the reliability, performance, and correctness of the dmoney REST API. It covers a wide range of scenarios, including:  

- User management (Admin, Agent, Merchant, Customer)  
- Financial transactions (Deposit, Withdrawal, Transfer, etc.)  
- Balance inquiries for different users  
- Negative testing for proper error handling  

---

## ✨ Features  
- Well-structured Postman collections covering both positive and negative scenarios.  
- Automated test execution powered by **Newman**.  
- Bug reports documenting issues identified during testing.  
- Exported API documentation for clear understanding of all endpoints.  

---

## ⚙️ Setup Instructions  

### Prerequisites  
- **Postman** installed locally.  
- **Node.js** installed (required for Newman).  

### Steps to Run Tests Locally  
1. Clone the repository:  
   ```bash  
   git clone https://github.com/AyeshaNasrinRipa/DMoney-API-Testing-Postman.git  
   cd dmoney-postman-tests  
   ```  

2. Install dependencies:  
   ```bash  
   npm install  
   ```  

3. Import your **PMAT Key** into a `.env` file.  

4. Use the key inside the `report.js` file.  

5. Start the Newman run with:  
   ```bash  
   npm start  
   ```  

---

## 🧪 Test Cases  
The test cases document both positive and negative flows for every API endpoint, ensuring end-to-end coverage of functionalities.  

### Test Case File  
You can access the complete test case file here:  
- [Test Cases for Dmoney API](https://docs.google.com/spreadsheets/d/1WIwucbHyEmSV2QxjHXz7_6q35zjUKM75aCGtpMB4FIQ/edit?usp=sharing)  

---

## 📊 Newman Report Overview  

**Newman** is used to run the Postman collection via the command line and generate detailed execution reports.  

### Summary  

<img width="871" height="883" alt="image" src="https://github.com/user-attachments/assets/f9e73e5a-43f4-4cb5-b18d-454df45021a6" />  

### Total Requests  

<img width="887" height="641" alt="image" src="https://github.com/user-attachments/assets/eee35c9a-9a6b-4cf9-933b-bfa3a33a5910" />  

---

## 📄 API Documentation  

The API documentation was generated in Postman and shared as a resource for developers to easily explore the available endpoints and their functionality.  

View the full documentation here:  
- [Dmoney API Documentation](https://documenter.getpostman.com/view/30074295/2sB3HhrhDy)  

---

## 🐞 Bug/Improvement Report  

During testing, issues were tracked and documented with details such as description, severity, and steps to reproduce.  

You can review the detailed bug/improvement report here:  
- [Bug/Improvement Report for dmoney API](https://docs.google.com/spreadsheets/d/1A1vetTaKRKiO3ZvXUUczFbtZ3g1D4lEw/edit?usp=sharing&ouid=116218051366331945716&rtpof=true&sd=true)  
