"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Search() {
  const [search, setSearch] = useState("");

  const router = useRouter();

  const handleSubmit = async function (e: React.FormEvent) {
    e.preventDefault();

    setSearch("");
    router.push(`/${search}/`);
  };
  return (
    <form
      className="w-50 flex justify-center md:justify-between"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={search}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearch(e.target.value)
        }
        className="bg-white p-2 w-80 text-xl rounded-xl text-black"
        placeholder="Search..."
      />
      <button className="">🚀</button>
    </form>
  );
}
