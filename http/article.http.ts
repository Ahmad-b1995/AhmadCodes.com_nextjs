import { AxiosRequestConfig } from "axios";
import { fetchData } from "./axios.config";

export async function getAllArticles(
  options?: AxiosRequestConfig
): Promise<Article[]> {
  return fetchData<Article[]>(
    `${process.env.BASE_URL}/articles`,
    options
  );
}

// Function to find article by ID
export async function findArticleById(
  id: number | string
): Promise<{ data: any }> {
  return fetchData<{ data: any }>(
    `${process.env.BASE_URL}/articles/${id}`,
    { method: "GET" }
  );
}
