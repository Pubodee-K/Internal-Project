import { Database } from "@/types/supabase";

export type project_nameRow =
  Database["public"]["Tables"]["project_names"]["Row"];

export type faviconRow = Database["public"]["Tables"]["favicons"]["Row"];

export type urlRow = Database["public"]["Tables"]["urls"]["Row"];

export type project_name_join_all = project_nameRow & {
  favicons: faviconRow[];
  urls: urlRow[];
};
