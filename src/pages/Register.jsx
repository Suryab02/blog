import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css"; // Import the CSS for PhoneInput

function Register() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "clicked\nEmail: " +
        email +
        "\nName: " +
        name +
        "\nPhone: " +
        phone +
        "\nPassword: " +
        password
    );

  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-100 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <input
            className="mb-4 appearance-none block w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="mb-4 appearance-none block w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <PhoneInput
            placeholder="Enter phone number"
            className="mb-4 appearance-none block w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            value={phone}
            onChange={setPhone}
            style={{ width: '100%', height: '2.5rem' }}
            dropdownStyle={{ width: 'calc(100% - 2rem)', margin: '0.5rem' }}
          />
          <input
            className="mb-4 appearance-none block w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="mb-4 appearance-none block w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            type="password"
            placeholder="Retype your password"
            value={retypePassword}
            onChange={(e) => setRetypePassword(e.target.value)}
          />
          <button
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            type="submit"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
