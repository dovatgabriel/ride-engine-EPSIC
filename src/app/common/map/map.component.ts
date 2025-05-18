import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  standalone: true,
  imports: [CommonModule, GoogleMapsModule],
})
export class MapComponent implements AfterViewInit {
  @ViewChild(GoogleMap) map!: GoogleMap;

  public path = [
    { lat: 46.5301, lng: 6.7741 },
    { lat: 46.5309, lng: 6.7765 },
    { lat: 46.5321, lng: 6.7769 },
    { lat: 46.533, lng: 6.7752 },
    { lat: 46.5324, lng: 6.7733 },
    { lat: 46.5313, lng: 6.7722 },
    { lat: 46.5303, lng: 6.7729 },
    { lat: 46.5301, lng: 6.7741 },
  ];

  options: google.maps.MapOptions = {
    mapTypeId: 'terrain',
    zoomControl: true,
    streetViewControl: false,
    fullscreenControl: false,
  };

  ngAfterViewInit(): void {
    const bounds = new google.maps.LatLngBounds();
    this.path.forEach((point) => bounds.extend(point));
    this.map.googleMap?.fitBounds(bounds);
  }
}
