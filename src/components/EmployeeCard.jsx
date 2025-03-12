import React from "react";
import "./EmployeeCard.css"; // Import CSS file

const employees = [
  {
    name: "Surabhi S Shetty",
    role: "Software Engineer",
    image: "https://th.bing.com/th/id/OIP.M-3XHSb3q92Vv_TSBYG-BAHaLY?w=1041&h=1600&rs=1&pid=ImgDetMain",
    email: "shettysurabhi22@gmail.com"
  },
  {
    name: "Smitha H G",
    role: "Product Manager",
    image: "https://th.bing.com/th/id/OIP.M-3XHSb3q92Vv_TSBYG-BAHaLY?w=1041&h=1600&rs=1&pid=ImgDetMain",
    email: "hgsmitha@example.com"
  },
  {
    name: "Rakshitha",
    role: "UX Designer",
    image: "https://th.bing.com/th/id/OIP.M-3XHSb3q92Vv_TSBYG-BAHaLY?w=1041&h=1600&rs=1&pid=ImgDetMain",
    email: "rakshithapaim@example.com"
  }
];

const EmployeeCard = () => {
  return (
    <div className="employee-container">
      {employees.map((employee, index) => (
        <div key={index} className="employee-card">
          <img src={employee.image} alt={employee.name} className="employee-image" />
          <h2 className="employee-name">{employee.name}</h2>
          <p className="employee-role">{employee.role}</p>
          <p className="employee-email">{employee.email}</p>
          <button className="employee-button">View Profile</button>
        </div>
      ))}
    </div>
  );
};

export default EmployeeCard;
