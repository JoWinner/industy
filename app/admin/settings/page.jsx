"use client";
import { Reveal } from "@/lib/Reveal";
import CreateAdmin from "../components/create-admin";

const SettingsPage = () => {
  return (
    <div className="space-y-6 pt-8">
      <Reveal>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        </div>
      </Reveal>

      <Reveal>
        <div className="grid md:grid-cols-2 gap-6">
          <CreateAdmin />
        </div>
      </Reveal>
    </div>
  );
};

export default SettingsPage;