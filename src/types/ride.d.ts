export interface Ride {
  id: number;
  title: string;
  difficulty: number;
  description: string;
  location: {
    city: string;
    npa: number;
    addressName: string;
    addressNumber: number;
  };
  images: string[];
}
