"use client";

import { useState, FormEvent } from "react";
import type { Request } from "../page";

interface RequestFormProps {
  onSubmit: (request: Omit<Request, "id" | "createdAt">) => void;
}

export default function RequestForm({ onSubmit }: RequestFormProps) {
  const today = new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState({
    account: "",
    type: "Technical question" as Request["type"],
    assignee: "Matt" as Request["assignee"],
    source: "Email" as Request["source"],
    date: today,
    requestorName: "",
    contact: "",
    notes: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    // Reset form
    setFormData({
      account: "",
      type: "Technical question",
      assignee: "Matt",
      source: "Email",
      date: today,
      requestorName: "",
      contact: "",
      notes: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white dark:bg-[#251e35] rounded-2xl shadow-xl p-8 border border-purple-100 dark:border-purple-900/50">
      <h2 className="text-2xl font-bold text-purple-900 dark:text-purple-100 mb-6">
        New Customer Request
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Account */}
          <div>
            <label htmlFor="account" className="block text-sm font-medium text-purple-900 dark:text-purple-200 mb-2">
              Account
            </label>
            <input
              type="text"
              id="account"
              name="account"
              required
              value={formData.account}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-purple-200 dark:border-purple-800 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-[#1a1625] dark:text-purple-100 bg-purple-50/50"
              placeholder="Enter account name"
            />
          </div>

          {/* Type */}
          <div>
            <label htmlFor="type" className="block text-sm font-medium text-purple-900 dark:text-purple-200 mb-2">
              Type
            </label>
            <select
              id="type"
              name="type"
              required
              value={formData.type}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-purple-200 dark:border-purple-800 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-[#1a1625] dark:text-purple-100 bg-purple-50/50"
            >
              <option value="Technical question">Technical question</option>
              <option value="Request for questionnaire">Request for questionnaire</option>
            </select>
          </div>

          {/* Assignee */}
          <div>
            <label htmlFor="assignee" className="block text-sm font-medium text-purple-900 dark:text-purple-200 mb-2">
              Assignee
            </label>
            <select
              id="assignee"
              name="assignee"
              required
              value={formData.assignee}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-purple-200 dark:border-purple-800 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-[#1a1625] dark:text-purple-100 bg-purple-50/50"
            >
              <option value="Matt">Matt</option>
              <option value="Gene">Gene</option>
              <option value="Said">Said</option>
              <option value="Chris S.">Chris S.</option>
            </select>
          </div>

          {/* Source */}
          <div>
            <label htmlFor="source" className="block text-sm font-medium text-purple-900 dark:text-purple-200 mb-2">
              Source
            </label>
            <select
              id="source"
              name="source"
              required
              value={formData.source}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-purple-200 dark:border-purple-800 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-[#1a1625] dark:text-purple-100 bg-purple-50/50"
            >
              <option value="Email">Email</option>
              <option value="Slack">Slack</option>
            </select>
          </div>

          {/* Date */}
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-purple-900 dark:text-purple-200 mb-2">
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              required
              value={formData.date}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-purple-200 dark:border-purple-800 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-[#1a1625] dark:text-purple-100 bg-purple-50/50"
            />
          </div>

          {/* Requestor's Name */}
          <div>
            <label htmlFor="requestorName" className="block text-sm font-medium text-purple-900 dark:text-purple-200 mb-2">
              Requestor&apos;s Name
            </label>
            <input
              type="text"
              id="requestorName"
              name="requestorName"
              required
              value={formData.requestorName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-purple-200 dark:border-purple-800 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-[#1a1625] dark:text-purple-100 bg-purple-50/50"
              placeholder="Enter requestor's name"
            />
          </div>

          {/* Slack link or Email subject */}
          <div>
            <label htmlFor="contact" className="block text-sm font-medium text-purple-900 dark:text-purple-200 mb-2">
              Slack link or Email subject
            </label>
            <input
              type="text"
              id="contact"
              name="contact"
              required
              value={formData.contact}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-purple-200 dark:border-purple-800 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-[#1a1625] dark:text-purple-100 bg-purple-50/50"
              placeholder="Slack thread link or email subject line"
            />
          </div>
        </div>

        {/* Notes */}
        <div>
          <label htmlFor="notes" className="block text-sm font-medium text-purple-900 dark:text-purple-200 mb-2">
            Notes
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={4}
            value={formData.notes}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-purple-200 dark:border-purple-800 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-[#1a1625] dark:text-purple-100 bg-purple-50/50"
            placeholder="Additional details or context..."
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium rounded-lg transition-all focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Submit Request
          </button>
        </div>
      </form>
    </div>
  );
}
