export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      favicons: {
        Row: {
          created_at: string | null;
          favicons: string;
          id: number;
          project_id: number | null;
        };
        Insert: {
          created_at?: string | null;
          favicons?: string;
          id?: number;
          project_id?: number | null;
        };
        Update: {
          created_at?: string | null;
          favicons?: string;
          id?: number;
          project_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "favicons_project_id_fkey";
            columns: ["project_id"];
            referencedRelation: "project_names";
            referencedColumns: ["id"];
          }
        ];
      };
      project_names: {
        Row: {
          created_at: string | null;
          id: number;
          name: string;
        };
        Insert: {
          created_at?: string | null;
          id?: number;
          name?: string;
        };
        Update: {
          created_at?: string | null;
          id?: number;
          name?: string;
        };
        Relationships: [];
      };
      urls: {
        Row: {
          created_at: string | null;
          id: number;
          project_id: number | null;
          url: string;
        };
        Insert: {
          created_at?: string | null;
          id?: number;
          project_id?: number | null;
          url?: string | null;
        };
        Update: {
          created_at?: string | null;
          id?: number;
          project_id?: number | null;
          url?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "urls_project_id_fkey";
            columns: ["project_id"];
            referencedRelation: "project_names";
            referencedColumns: ["id"];
          }
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
