export interface APICharacter {
  id: number;
  name: string;
  image: string;
  episode: string[];
}

export interface Character extends APICharacter {
  isChecked: boolean;
  description: string;
}
