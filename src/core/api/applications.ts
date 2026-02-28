import { api } from "./api-client";
import { API_ENDPOINTS } from "./endpoints";
import type { ApiApplication } from "./types";

export interface SubmitApplicationParams {
  jobId: string;
  name: string;
  email: string;
  coverNote: string;
  resume: File;
}

/**
 * Submit a job application (multipart/form-data).
 * Backend uploads resume to Cloudinary and saves the URL as resumeLink.
 */
export async function submitApplication(
  params: SubmitApplicationParams,
): Promise<ApiApplication> {
  const formData = new FormData();
  formData.append("jobId", params.jobId);
  formData.append("name", params.name);
  formData.append("email", params.email);
  formData.append("coverNote", params.coverNote);
  formData.append("resume", params.resume);

  return api.post<ApiApplication>(API_ENDPOINTS.APPLICATIONS.CREATE, formData);
}
