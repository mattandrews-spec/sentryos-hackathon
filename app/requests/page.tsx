"use client";

import { useState, useEffect } from "react";
import RequestForm from "./components/RequestForm";
import RequestsList from "./components/RequestsList";

export interface Request {
  id: string;
  account: string;
  type: "Technical question" | "Request for questionnaire";
  assignee: "Matt" | "Gene" | "Said" | "Chris S.";
  source: "Email" | "Slack";
  date: string;
  requestorName: string;
  contact: string;
  notes: string;
  createdAt: number;
}

const STORAGE_KEY = "sales-pod-requests";

export default function RequestsPage() {
  const [requests, setRequests] = useState<Request[]>([]);
  const [view, setView] = useState<"form" | "list">("form");

  // Load requests from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setRequests(parsed);
      } catch (error) {
        console.error("Failed to load requests from localStorage:", error);
      }
    }
  }, []);

  // Save requests to localStorage whenever they change
  useEffect(() => {
    if (requests.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(requests));
    }
  }, [requests]);

  const addRequest = (request: Omit<Request, "id" | "createdAt">) => {
    const newRequest: Request = {
      ...request,
      id: crypto.randomUUID(),
      createdAt: Date.now(),
    };
    setRequests((prev) => [newRequest, ...prev]);
    setView("list");
  };

  const deleteRequest = (id: string) => {
    setRequests((prev) => prev.filter((req) => req.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 dark:from-[#1a1625] dark:via-[#1d1328] dark:to-[#1a1625]">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
            Sales Pod Request Manager
          </h1>
          <p className="text-purple-900 dark:text-purple-200">
            Manage customer requests and assign them to team members
          </p>
        </div>

        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setView("form")}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              view === "form"
                ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                : "bg-white dark:bg-[#251e35] text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-[#2d2440] border border-purple-200 dark:border-purple-800"
            }`}
          >
            New Request
          </button>
          <button
            onClick={() => setView("list")}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              view === "list"
                ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                : "bg-white dark:bg-[#251e35] text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-[#2d2440] border border-purple-200 dark:border-purple-800"
            }`}
          >
            All Requests ({requests.length})
          </button>
        </div>

        {view === "form" ? (
          <RequestForm onSubmit={addRequest} />
        ) : (
          <RequestsList requests={requests} onDelete={deleteRequest} />
        )}
      </div>
    </div>
  );
}
