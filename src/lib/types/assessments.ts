export type Question = {
  id: number
  question_id: string
  question: string
  options: string[]
  selected_option: string | number | null
  icons?: any
}