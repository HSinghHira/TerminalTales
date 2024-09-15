import React from "react";

const TestLinks = () => {
  return (
    <aside className="bg-gray-100 p-6 rounded-lg">
      <ul className="space-y-2">
        <li>
          <a href="#" className="text-blue-600 hover:underline">
            Link
          </a>
        </li>
        <li>
          <a href="#" className="text-blue-600 hover:underline">
            Link 2
          </a>
        </li>
        <li>
          <a href="#" className="text-blue-600 hover:underline">
            Link 3
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default TestLinks;
