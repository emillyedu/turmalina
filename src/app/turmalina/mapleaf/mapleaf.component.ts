import { Component, OnInit } from '@angular/core';
import { MapleafService } from './mapleaf.service';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
import * as L from 'leaflet';
import { analyzeAndValidateNgModules } from '@angular/compiler';
@Component({
  selector: 'app-mapleaf',
  templateUrl: './mapleaf.component.html',
  styleUrls: ['./mapleaf.component.css']
})
export class MapleafComponent implements OnInit {
  private map:any;
  paraibaGeoJson: any;
  erro : any;

  async getGeoJsonData (){
    return await this.mapService.getParaibaGeoJson().toPromise();
  }

  private initMap(): void {

    this.map = L.map('map', {
      center: [ -7.1311923, -36.8275259 ],
      zoom: 5,
      maxZoom: 20,
      minZoom: 8,
      maxBounds: [
        //south west
        [-8.06, -39.13],
        //north east
        [-6, -34]
        ], 
    });

    this.map.createPane('labels');

    // This pane is above markers but below popups
    this.map.getPane('labels').style.zIndex = 650;
  
    // Layers in this pane are non-interactive and do not obscure mouse/touch events
    this.map.getPane('labels').style.pointerEvents = 'none';
    
    const tiles = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {

    });

    tiles.addTo(this.map);

    const tilesPane =  L.tileLayer('http://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png', {
      pane: 'labels'
    });
    tilesPane.addTo(this.map);
  }

  public mapReady(map: L.Map, paraibaGeoJson: any) {
    console.log(paraibaGeoJson)


    function getColor(d : any) {
      return d >= 100 ? '#00F9FF' :
      d > 80 ? '#1CD0D4' :
      d > 60  ? '#2DB6B9' :
      d > 40   ? '#3D9192' :
      d > 20   ? '#945113' :
      d > 0   ? '#62370F' :
                 '#62370F';
    }

    function style(feature : any) {
      return {
        weight: 2,
        opacity: 1,
        color: "white",
        dashArray: "3",
        fillOpacity: 0.7,
        fillColor: getColor(feature.properties.pontuation)
      };
    }

    function highlightFeature(e : any) {
      var layer = e.target;

      layer.setStyle({
        weight: 5,
        color: "#666",
        dashArray: "",
        fillOpacity: 0.7
      });

      if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
      }
    }

    function resetHighlight(e : any) {
      geojson.resetStyle(e.target);
    }
    
    function zoomToFeature(e: any) {
      map.fitBounds(e.target.getBounds());
    }

    const onEachFeature = (feature : any, layer : any) => {
      layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
      });
    };

    let geojson = L.geoJSON(paraibaGeoJson, {
      style: style,
      onEachFeature: onEachFeature
    }).addTo(map);


  }

  constructor(private mapService: MapleafService) {
  }

  ngOnInit(): void{
    this.initMap();
    this.getGeoJsonData().then((data: any) =>{
        this.mapReady(this.map, data);
    });
  }

}
