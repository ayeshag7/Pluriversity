"use client"

import { useState } from "react";
import { useRouter } from 'next/navigation'; // Use the new import for router

const Page = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const correctUsername = "admin-pluriversity-lahore";
  const correctPassword = "pl456lh12_6%";

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username === correctUsername && password === correctPassword) {
      // Redirect to adminSettings page
      router.push('/adminSettings');
    } else {
      // Show error message
      setErrorMessage("Incorrect username or password.");
    }
  };

  return (
    <main className="p-24 min-h-screen bg-[#0A0708]">
      <div className="w-full flex justify-center items-center">
        <div className="bg-[#1A1A1A] w-96 h-80 rounded-lg shadow-custom border border-[#89BE63] p-6 flex flex-col justify-center items-center space-y-4">
          <form id="login-form" className="w-full" onSubmit={handleSubmit}>
            <div className="w-full mb-4">
              <label htmlFor="username" className="block text-white text-sm mb-2">Username</label>
              <input
                id="username"
                type="text"
                className="w-full p-2 rounded bg-[#0A0708] text-white border border-[#89BE63]"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="w-full mb-4">
              <label htmlFor="password" className="block text-white text-sm mb-2">Password</label>
              <input
                id="password"
                type="password"
                className="w-full p-2 rounded bg-[#0A0708] text-white border border-[#89BE63]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {errorMessage && <p className="text-red-500 my-4">{errorMessage}</p>}
            <button type="submit" className="w-full p-2 rounded bg-[#89BE63] text-white font-bold">Enter</button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Page;
