"use client";
import React from "react";


export default function Form({value, onChange}: {value: number; onChange: (value: number) => void}) {

  return (
    <form action="" className="w-full pb-2">
      <label htmlFor="amount" className="block space-y-2">
        <span>Monto en ARS:</span>
        <input
          type="number"
          className="block w-full p-2 text-right bg-gray-200 rounded-2xl"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
        />
      </label>
    </form>
  );
}
