/**
 * Interface representing a ride.
 */
export interface Ride {
  /**
   * Unique identifier for the ride.
   * @example 1
   */
  id: number;
  /**
   * Title of the ride.
   * @example "Tour du lac de Joux"
   */
  title: string;
  /**
   * Difficulty of the ride, on a scale of 1 to 10.
   * @example 5
   */
  difficulty: number;
  /**
   * Description of the ride.
   * @example "Magnifique tour du lac de Joux, avec une vue imprenable sur les montagnes environnantes."
   */
  description: string;
  /**
   * Location details of the ride.
   * @see RideLocation
   */
  location: RideLocation;
  /**
   * Array of image URLs related to the ride.
   * @example ["https://example.com/image1.jpg", "https://example.com/image2.jpg"]
   */
  images: string[];
}

export interface RideLocation {
  /**
   * City where the ride is located.
   * @example "Le Pont"
   */
  city: string;
  /**
   * Postal code of the ride location.
   * @example 1342
   */
  npa: number;
  /**
   * Name of the address where the ride starts.
   * @example "Place du Marché"
   */
  addressName: string;
  /**
   * Number of the address where the ride starts.
   * @example 5
   */
  addressNumber: number;
}
