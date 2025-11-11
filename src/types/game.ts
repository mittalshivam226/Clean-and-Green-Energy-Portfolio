export interface Game {
  id: string;
  name: string;
  description: string;
}

export interface GameProps {
  onBack: () => void;
}