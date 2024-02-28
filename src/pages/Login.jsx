import React from "react";

function Login() {
  return( 
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-100 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input className="mb-4 w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" type="text" placeholder="Enter your name"/>
        <input className="mb-4 w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" type="password" placeholder="Enter your password"/>
        <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600" type="button">Login</button>
      </div>
    </div>
  );
}

export default Login;
