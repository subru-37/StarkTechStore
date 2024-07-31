export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      address_details: {
        Row: {
          address_id: string
          city_village: string | null
          district: string | null
          h_a_name: string | null
          h_a_number: string
          state: string | null
          street_name: string | null
        }
        Insert: {
          address_id: string
          city_village?: string | null
          district?: string | null
          h_a_name?: string | null
          h_a_number: string
          state?: string | null
          street_name?: string | null
        }
        Update: {
          address_id?: string
          city_village?: string | null
          district?: string | null
          h_a_name?: string | null
          h_a_number?: string
          state?: string | null
          street_name?: string | null
        }
        Relationships: []
      }
      cart_items: {
        Row: {
          cart_id: string | null
          cart_items_id: string
          product_id: number | null
          quantity: number | null
        }
        Insert: {
          cart_id?: string | null
          cart_items_id: string
          product_id?: number | null
          quantity?: number | null
        }
        Update: {
          cart_id?: string | null
          cart_items_id?: string
          product_id?: number | null
          quantity?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "cart_items_cart_id_fkey"
            columns: ["cart_id"]
            isOneToOne: false
            referencedRelation: "carts"
            referencedColumns: ["cart_id"]
          },
          {
            foreignKeyName: "cart_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "product_details"
            referencedColumns: ["id"]
          },
        ]
      }
      carts: {
        Row: {
          cart_id: string
          created_at: string | null
          user_id: string
        }
        Insert: {
          cart_id: string
          created_at?: string | null
          user_id: string
        }
        Update: {
          cart_id?: string
          created_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "carts_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      categories: {
        Row: {
          category_title: string
          description: string | null
          id: number
        }
        Insert: {
          category_title: string
          description?: string | null
          id: number
        }
        Update: {
          category_title?: string
          description?: string | null
          id?: number
        }
        Relationships: []
      }
      contact_details: {
        Row: {
          address_id: string
          alt_phone_no: string | null
          detail_id: string
          phone_no: string
        }
        Insert: {
          address_id: string
          alt_phone_no?: string | null
          detail_id: string
          phone_no: string
        }
        Update: {
          address_id?: string
          alt_phone_no?: string | null
          detail_id?: string
          phone_no?: string
        }
        Relationships: [
          {
            foreignKeyName: "contact_details_address_id_fkey"
            columns: ["address_id"]
            isOneToOne: false
            referencedRelation: "address_details"
            referencedColumns: ["address_id"]
          },
        ]
      }
      product_details: {
        Row: {
          body: string | null
          category_id: number
          details: string | null
          id: number
          image: string | null
          price: number
          title: string
        }
        Insert: {
          body?: string | null
          category_id: number
          details?: string | null
          id: number
          image?: string | null
          price: number
          title: string
        }
        Update: {
          body?: string | null
          category_id?: number
          details?: string | null
          id?: number
          image?: string | null
          price?: number
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "product_details_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          contact_id: string | null
          email: string
          first_name: string
          id: string
          last_name: string
          profile_pic: string | null
          username: string
        }
        Insert: {
          contact_id?: string | null
          email: string
          first_name: string
          id: string
          last_name: string
          profile_pic?: string | null
          username: string
        }
        Update: {
          contact_id?: string | null
          email?: string
          first_name?: string
          id?: string
          last_name?: string
          profile_pic?: string | null
          username?: string
        }
        Relationships: [
          {
            foreignKeyName: "profiles_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contact_details"
            referencedColumns: ["detail_id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
