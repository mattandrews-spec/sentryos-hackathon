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
  customer: string;
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-2">
            Sales Pod Request Manager
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Manage customer requests and assign them to team members
          </p>
        </div>

        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setView("form")}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              view === "form"
                ? "bg-blue-600 text-white"
                : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700"
            }`}
          >
            New Request
          </button>
          <button
            onClick={() => setView("list")}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              view === "list"
                ? "bg-blue-600 text-white"
                : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700"
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
