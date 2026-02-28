"use client";

import { useState, useCallback, useEffect } from "react";
import { Link } from "@/i18n/navigation";
import type { ApiJob } from "@/core/api";
import { submitApplication } from "@/core/api";
import { Button } from "@/components/ui";
import { toast } from "sonner";

interface JobDetailClientProps {
  job: ApiJob;
}

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return iso;
  }
}

export function JobDetailClient({ job }: JobDetailClientProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [coverNote, setCoverNote] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const resetForm = useCallback(() => {
    setName("");
    setEmail("");
    setCoverNote("");
    setResumeFile(null);
  }, []);

  const closeModal = useCallback(() => {
    setModalOpen(false);
    resetForm();
  }, [resetForm]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    if (modalOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [modalOpen, closeModal]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      toast.error("Please fill in Name and Email.");
      return;
    }
    if (!resumeFile) {
      toast.error("Please select a resume file to upload.");
      return;
    }
    setSubmitting(true);
    try {
      await submitApplication({
        jobId: job._id,
        name: name.trim(),
        email: email.trim(),
        coverNote: coverNote.trim(),
        resume: resumeFile,
      });
      toast.success("Application submitted successfully!");
      closeModal();
    } catch (err: unknown) {
      const message =
        err && typeof err === "object" && "message" in err
          ? String((err as { message: unknown }).message)
          : "Failed to submit application";
      toast.error(message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
      {/* Job Description */}
      <div className="flex-1 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-[#2e3a59]">
              {job.title}
            </h1>
            <p className="text-[#515B6F] mt-1">
              {job.company} · {job.location}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <span className="px-3 py-1.5 text-sm font-medium bg-[#f0f4ff] text-[#5a56e9] rounded">
              {job.category}
            </span>
            <Button
              type="button"
              size="lg"
              onClick={() => setModalOpen(true)}
              className="shrink-0"
            >
              Apply Now
            </Button>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#2e3a59] mb-2">
            Job Description
          </h2>
          <div
            className="text-[#515B6F] leading-relaxed prose prose-sm max-w-none prose-headings:text-[#2e3a59] prose-strong:text-[#2e3a59]"
            dangerouslySetInnerHTML={{ __html: job.description }}
          />
        </div>

        <p className="text-sm text-[#6b7280]">
          Posted on {formatDate(job.createdAt)}
        </p>
      </div>

      {/* Apply CTA + Back link (no form here) */}
      <div className="lg:w-[280px] shrink-0 flex flex-col gap-4">
        <Button
          type="button"
          fullWidth
          size="lg"
          onClick={() => setModalOpen(true)}
          className="lg:hidden"
        >
          Apply Now
        </Button>
        {/* <Link
          href="/jobs"
          className="block text-center text-sm text-[#4640DE] hover:underline font-medium"
        >
          ← Back to all jobs
        </Link> */}
      </div>

      {/* Apply modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="apply-modal-title"
        >
          <div
            className="absolute inset-0 bg-black/50"
            onClick={closeModal}
            aria-hidden
          />
          <div className="relative w-full max-w-md max-h-[90vh] overflow-y-auto bg-white rounded-xl shadow-xl border border-[#D6DDEB] p-6">
            <div className="flex items-center justify-between mb-4">
              <h2
                id="apply-modal-title"
                className="text-xl font-semibold text-[#2e3a59]"
              >
                Apply Now
              </h2>
              <button
                type="button"
                onClick={closeModal}
                className="p-2 rounded-lg text-[#6b7280] hover:bg-[#f3f4f6] hover:text-[#2e3a59] transition-colors"
                aria-label="Close"
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="modal-name"
                  className="block text-sm font-medium text-[#2e3a59] mb-1"
                >
                  Name
                </label>
                <input
                  id="modal-name"
                  name="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  className="w-full px-4 py-2.5 border border-[#D6DDEB] rounded-lg focus:ring-2 focus:ring-[#5a56e9] focus:border-transparent outline-none text-[#2e3a59] placeholder:text-[#9ca3af]"
                />
              </div>
              <div>
                <label
                  htmlFor="modal-email"
                  className="block text-sm font-medium text-[#2e3a59] mb-1"
                >
                  Email
                </label>
                <input
                  id="modal-email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-4 py-2.5 border border-[#D6DDEB] rounded-lg focus:ring-2 focus:ring-[#5a56e9] focus:border-transparent outline-none text-[#2e3a59] placeholder:text-[#9ca3af]"
                />
              </div>
              <div>
                <label
                  htmlFor="modal-resume"
                  className="block text-sm font-medium text-[#2e3a59] mb-1"
                >
                  Resume (file)
                </label>
                <input
                  id="modal-resume"
                  name="resume"
                  type="file"
                  required
                  accept=".pdf,.doc,.docx,image/*"
                  onChange={(e) => setResumeFile(e.target.files?.[0] ?? null)}
                  className="w-full px-4 py-2.5 border border-[#D6DDEB] rounded-lg focus:ring-2 focus:ring-[#5a56e9] focus:border-transparent outline-none text-[#2e3a59] file:mr-2 file:py-1 file:px-3 file:rounded file:border-0 file:text-sm file:bg-[#f0f4ff] file:text-[#4640DE]"
                />
                <p className="text-xs text-[#6b7280] mt-1">
                  PDF, DOC, DOCX or image
                </p>
              </div>
              <div>
                <label
                  htmlFor="modal-coverNote"
                  className="block text-sm font-medium text-[#2e3a59] mb-1"
                >
                  Cover note
                </label>
                <textarea
                  id="modal-coverNote"
                  name="coverNote"
                  rows={4}
                  value={coverNote}
                  onChange={(e) => setCoverNote(e.target.value)}
                  placeholder="Tell us why you're a great fit..."
                  className="w-full px-4 py-2.5 border border-[#D6DDEB] rounded-lg focus:ring-2 focus:ring-[#5a56e9] focus:border-transparent outline-none text-[#2e3a59] placeholder:text-[#9ca3af] resize-none"
                />
              </div>
              <div className="flex gap-2 pt-2">
                <Button
                  type="button"
                  variant="outline"
                  fullWidth
                  onClick={closeModal}
                  disabled={submitting}
                >
                  Cancel
                </Button>
                <Button type="submit" fullWidth size="lg" disabled={submitting}>
                  {submitting ? "Submitting…" : "Submit Application"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
