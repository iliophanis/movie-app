import { useQuery as useQueryBase } from "react-query";
import { toast } from "react-toastify";

const baseUrl = process.env.REACT_APP_API_URL;
const token = process.env.REACT_APP_API_KEY;

export const useQuery = (key: any[], url: string) => {
 const { data } = useQueryBase(key, async () => {
  try {
   const response = await fetch(baseUrl + url, {
    method: "GET",
    headers: {
     "Content-Type": "application/json",
     Authorization: `Bearer ${token}`,
    },
   });
   const data = response.json();
   return data;
  } catch (error) {
   toast.error((error as Error).message);
  }
 });

 return { data: data };
};
