export interface BookResponse {
  id: number;
  testamentId: number;
  name: string;
  abbreviation: string;
  position: number;
}

export interface VerseTextResponse{
    id: number;
    translationId: number;
    bookId: number;
    chapter: number;
    verse: string;
    text: string;
}