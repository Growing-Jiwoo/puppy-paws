import { API_URL } from "@/app/_const/url";
import { CommunityDetailPostType } from "@/app/_types/community";
import { noAuthfetchExtended } from "../commonsApi";

export const getCommunityDetailPost = async (
  id: number
): Promise<CommunityDetailPostType> => {
  try {
    const response = await noAuthfetchExtended(
      `${API_URL.GET.COMMUNITY}/${id}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching Community post list:", error);
    throw error;
  }
};
