"use client";
import { useState } from "react";
import Form from "./components/form";
import cotizaciones from "./cotizaciones.json";

const COTIZACIONES = cotizaciones as Record<
  string,
  { compra: number; venta: number }
>;

export default function Home() {
  const [amount, setAmount] = useState(0);
  return (
    <main className="grid gap-4">
      <section className="flex-1">
        <Form
          value={amount}
          onChange={(_amount: number) => setAmount(_amount)}
        ></Form>
      </section>
      <section className="flex-1 p-8 text-white bg-emerald-800 rounded-3xl">
        <ul className="flex flex-col gap-4">
          {Object.entries(COTIZACIONES).map(
            ([name, value]: [string, { compra: number; venta: number }]) => {
              const total = amount ? Number(amount / value.venta) : value.venta;
              return (
                <li
                  key={name}
                  className="flex items-center justify-between gap-4"
                >
                  <div className="text-emerald-100">{name}</div>
                  <div className="flex items-center gap-4">
                    {amount ? (<div className="text-xl font-bold text-emerald-500">
                      {Number(value.venta).toLocaleString("es-AR", {
                        style: "currency",
                        currency: "ARS",
                      })}
                    </div>): null}
                    <div className="text-3xl font-bold text-emerald-300">
                      {Number(total).toLocaleString("es-AR", {
                        style: "currency",
                        currency: "ARS",
                      })}
                    </div>
                  </div>
                </li>
              );
            }
          )}
        </ul>
      </section>
    </main>
  );
}
