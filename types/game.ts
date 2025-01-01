export interface Game {
  id: string;
  title: string;
  description: string;
  image_url?: string;
  created_at: string;
}

export interface GameFormData {
  title: string
  description: string
  coverImage: string
  categoryId: string
  url: string
  featured: boolean
}