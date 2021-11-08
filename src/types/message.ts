export interface Message {
  id?: number
  conversationId?: number
  authorId: number
  timestamp?: string
  body: string
}