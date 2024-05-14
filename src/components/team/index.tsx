"use client";

import { useState } from "react";
import { DataTable } from "../data-table";

import New from "./new";

export default function Team() {
  const [members, setMembers] = useState<any>([]);

  return (
    <div className="grid gap-6 border rounded-lg shadow px-5 py-4 w-full max-w-[800px]">
      <header className="flex items-start justify-between">
        <div className="grid gap-1">
          <h1 className="text-2xl">Team</h1>
          <p>Invite new members in your team.</p>
        </div>
        <New />
      </header>
      <main>
        <DataTable columns={[]} data={members} />
      </main>
    </div>
  );
}
