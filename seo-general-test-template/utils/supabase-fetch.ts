import { Database } from "@/types/supabase";
import { createClient } from "@supabase/supabase-js";

export const revalidate = 0;

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const supabase = createClient<Database>(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: false,
  },
});

async function getAllData(tableName: string, query: string) {
  try {
    const { data, error } = await supabase.from(tableName).select(query);
    if (error) {
      console.log("Error fetching data: ", error.message);
      return error;
    }
    return data;
  } catch (error: any) {
    console.log("Error fetching data: ", error.message);
    return error;
  }
}

async function getFilteredData(
  tableName: string,
  query: string,
  filteredField: string,
  filteredValue: any
) {
  try {
    const { data, error } = await supabase
      .from(tableName)
      .select(query)
      .eq(filteredField, filteredValue);
    if (error) {
      console.log("Error fetching data: ", error.message);
      return error;
    }
    return data;
  } catch (error: any) {
    console.log("Error fetching data: ", error.message);
    return error;
  }
}

export { getAllData, getFilteredData };
