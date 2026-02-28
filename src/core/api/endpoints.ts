/**
 * Public API endpoints for QuickHire Job Board (matches OpenAPI spec).
 * Base URL is configured in api-client (e.g. http://localhost:9001).
 */

export const API_ENDPOINTS = {
  JOBS: {
    LIST: "/api/jobs",
    GET_BY_ID: (id: string) => `/api/jobs/${id}`,
  },
  APPLICATIONS: {
    CREATE: "/api/applications",
  },
} as const;
