/**
 * API types matching QuickHire Job Board OpenAPI spec.
 */

export interface ApiJob {
  _id: string;
  title: string;
  company: string;
  location: string;
  category: string;
  description: string;
  status: "active" | "inactive";
  createdAt: string;
  updatedAt: string;
}

/** Response envelope for GET /api/jobs/:id */
export interface JobByIdApiResponse {
  status: number;
  success: boolean;
  message?: string;
  data: ApiJob;
  path?: string;
}

export interface PaginatedJobsMeta {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
}

export interface PaginatedJobsResponse {
  statusCode: number;
  success: boolean;
  message?: string;
  meta: PaginatedJobsMeta;
  data: ApiJob[];
}

export interface ApiApplication {
  _id: string;
  job: string;
  name: string;
  email: string;
  resumeLink: string;
  coverNote: string;
  createdAt: string;
}
