import type moment from "moment"

export interface TagInterface {
  id?: number | null
  name: string
  created_at?: string | moment.Moment
}
