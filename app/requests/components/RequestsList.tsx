"use client";

import type { Request } from "../page";

interface RequestsListProps {
  requests: Request[];
  onDelete: (id: string) => void;
}

export default function RequestsList({ requests, onDelete }: RequestsListProps) {
  if (requests.length === 0) {
    return (
      <div className="bg-white dark:bg-[#251e35] rounded-2xl shadow-xl p-12 text-center border border-purple-100 dark:border-purple-900/50">
        <div className="text-purple-400 dark:text-purple-500 mb-4">
          <svg
            className="w-16 h-16 mx-auto mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-200 mb-2">
            No requests yet
          </h3>
          <p className="text-purple-700 dark:text-purple-300">
            Create your first request to get started
          </p>
        </div>
      </div>
    );
  }

  const getTypeColor = (type: Request["type"]) => {
    return type === "Technical question"
      ? "bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300 border border-purple-200 dark:border-purple-800"
      : "bg-pink-100 text-pink-700 dark:bg-pink-900/50 dark:text-pink-300 border border-pink-200 dark:border-pink-800";
  };

  const getSourceColor = (source: Request["source"]) => {
    return source === "Email"
      ? "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
      : "bg-orange-100 text-orange-700 dark:bg-orange-900/50 dark:text-orange-300 border border-orange-200 dark:border-orange-800";
  };

  return (
    <div className="space-y-4">
      {requests.map((request) => (
        <div
          key={request.id}
          className="bg-white dark:bg-[#251e35] rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all border border-purple-100 dark:border-purple-900/50"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-xl font-bold text-purple-900 dark:text-purple-100">
                  {request.account}
                </h3>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(request.type)}`}>
                  {request.type}
                </span>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getSourceColor(request.source)}`}>
                  {request.source}
                </span>
              </div>
              <p className="text-sm text-purple-600 dark:text-purple-300">
                {request.date}
              </p>
            </div>
            <button
              onClick={() => onDelete(request.id)}
              className="text-pink-600 hover:text-pink-700 dark:text-pink-400 dark:hover:text-pink-300 p-2 hover:bg-pink-50 dark:hover:bg-pink-900/20 rounded-lg transition-colors"
              title="Delete request"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <div>
              <p className="text-xs font-medium text-purple-500 dark:text-purple-400 uppercase tracking-wider mb-1">
                Assignee
              </p>
              <p className="text-sm font-semibold text-purple-900 dark:text-purple-100">
                {request.assignee}
              </p>
            </div>
            <div>
              <p className="text-xs font-medium text-purple-500 dark:text-purple-400 uppercase tracking-wider mb-1">
                Requestor
              </p>
              <p className="text-sm font-semibold text-purple-900 dark:text-purple-100">
                {request.requestorName}
              </p>
            </div>
            <div className="md:col-span-2">
              <p className="text-xs font-medium text-purple-500 dark:text-purple-400 uppercase tracking-wider mb-1">
                Slack link or Email subject
              </p>
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 break-all">
                {request.contact}
              </p>
            </div>
          </div>

          {request.notes && (
            <div className="mt-4 pt-4 border-t border-purple-200 dark:border-purple-800">
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                Notes
              </p>
              <p className="text-sm text-purple-700 dark:text-purple-300 whitespace-pre-wrap">
                {request.notes}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
