"use client";
import { useState, useEffect, useRef } from "react";
import { lists } from "../../utils/mockData";
import { GetItems, sendItems } from "../../utils/service";

export default function StoreItems() {
  const [list, setList] = useState([]);
  useEffect(() => {
    async function getInit() {
      let data = await GetItems();
      setList(data);
    }
    getInit();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const item = formData.get("itemName");
    const type = formData.get("itemType");
    const request = { name: item, type: type };
    await sendItems(request);
    setList((prev) => [...prev, request]);
  };
  const groupByType = (list) => {
    return list.reduce((acc, obj) => {
      if (!acc[obj.type]) {
        acc[obj.type] = [];
      }
      acc[obj.type].push(obj);
      return acc;
    }, {});
  };

  const groupedByType = groupByType(list);

  return (
    <div className="p-10">
      <h2>Let`s start sorting and storing items</h2>
      <form onSubmit={handleSubmit}>
        <select name="itemType" id="itemType" defaultValue="">
          <option value="" disabled>
            Type
          </option>
          {lists.map((list) => (
            <option key={list} value={list}>
              {list}
            </option>
          ))}
        </select>
        <input
          className="border border-black rounded-md p-1"
          type="text"
          name="itemName"
          id="itemName"
        />
        <button className="border p-1 rounded hover:border-yellow-600">
          Enter
        </button>
      </form>
      <div className="flex flex-col gap-5">
        <div className="flex gap-20">
          <span>Label</span>
          <span>Stored Item</span>
        </div>
        {Object.keys(groupedByType).map((type) => (
          <div key={type} className="flex justify-around">
            <h2 className="text-xl font-bold mb-4 capitalize w-32">{type}</h2>
            <ul className="space-y-2">
              {groupedByType[type].map((item, index) => (
                <li key={index} className="text-gray-700 font-medium">
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
// import React from 'react';
// import { GetItems, sendItems } from "../../utils/service";

// // Sample data
// const objects = [
//   { type: 'fruit', name: 'apple' },
//   { type: 'vegetable', name: 'carrot' },
//   { type: 'fruit', name: 'banana' },
//   { type: 'vegetable', name: 'lettuce' },
//   { type: 'meat', name: 'chicken' },
// ];

// // Function to group objects by their type
// const groupByType = (objects) => {
//   return objects.reduce((acc, obj) => {
//     if (!acc[obj.type]) {
//       acc[obj.type] = [];
//     }
//     acc[obj.type].push(obj);
//     return acc;
//   }, {});
// };

// Next.js page/component
// export default function HomePage() {
//   const groupedByType = groupByType(objects);

//   return (
//     <div className="bg-gray-100 min-h-screen p-8">
//       <h1 className="text-2xl font-bold mb-6">Grouped Items</h1>
//       <div className="space-y-8">
//         {/* Iterate over groupedByType */}
//         {Object.keys(groupedByType).map((type) => (
//           <div key={type} className="bg-white p-4 rounded-lg shadow-md">
//             {/* Display the type as the title */}
//             <h2 className="text-xl font-bold mb-4 capitalize">{type}</h2>
//             <ul className="space-y-2">
//               {/* Display items of this type */}
//               {groupedByType[type].map((item, index) => (
//                 <li key={index} className="text-gray-700 font-medium">
//                   {item.name}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
