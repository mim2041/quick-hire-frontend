import { api } from "./api-client";
import { API_ENDPOINTS } from "./endpoints";
import type {
  ApiJob,
  JobByIdApiResponse,
  PaginatedJobsResponse,
} from "./types";

export interface ListJobsParams {
  searchTerm?: string;
  category?: string;
  location?: string;
  page?: number;
  limit?: number;
}

export const jobsApi = {
  /**
   * List jobs with optional search and filters (public).
   */
  async list(params: ListJobsParams = {}): Promise<PaginatedJobsResponse> {
    const searchParams = new URLSearchParams();
    if (params.searchTerm) searchParams.set("searchTerm", params.searchTerm);
    if (params.category) searchParams.set("category", params.category);
    if (params.location) searchParams.set("location", params.location);
    if (params.page != null) searchParams.set("page", String(params.page));
    if (params.limit != null) searchParams.set("limit", String(params.limit));

    const query = searchParams.toString();
    const url = query ? `${API_ENDPOINTS.JOBS.LIST}?${query}` : API_ENDPOINTS.JOBS.LIST;
    return api.get<PaginatedJobsResponse>(url);
  },

  /**
   * Get a single job by ID (public).
   * Unwraps the backend envelope { status, success, data } and returns data.
   */
  async getById(id: string): Promise<ApiJob> {
    const response = await api.get<JobByIdApiResponse>(
      API_ENDPOINTS.JOBS.GET_BY_ID(id),
    );
    return response.data;
  },
};
