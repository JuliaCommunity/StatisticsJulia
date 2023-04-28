import type { NextPage } from 'next';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Layout from './layout';
import React, { useEffect, useRef } from 'react';
import styles from './map.module.scss';
import Head from 'next/head';
import { markers, markers1 } from './api/markers';

const Map: NextPage = () => {
    // used any for now because setting <string | HTMLElement>(null) throws error
    // solution found here with setting state: https://stackoverflow.com/questions/66271302/reactjs-mapbox-gl-invalid-type-container-must-be-a-string-or-htmlelement
    const mapContainer = useRef<any>(null);
    const map = useRef<mapboxgl.Map | any>(null);

    useEffect(() => {
        const mobileMediaQuery = window.matchMedia('(max-width: 450px)');
        const tabletMediaQuery = window.matchMedia('(max-width: 1025px)');

        mapboxgl.accessToken = "pk.eyJ1IjoiYXNod2FuaXVzZXIiLCJhIjoiY2xkMnp4MmU2MGR2eTN2bDBtYmpoaDNhcSJ9.Gcu1_7U9lIx6J_W_ILlSdg";

        if (map.current) return; // initialize map only once

        if (mobileMediaQuery.matches) {
            map.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/mapbox/light-v10',
                center: [90.0000, -1.0000], // center on southeast Asia
                zoom: 1
            });
        } else if (tabletMediaQuery.matches) {
            map.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/mapbox/light-v10',
                center: [14.4974, 14.4524], // center map on Senegal
                zoom: 1.1
            });
        } else {
            map.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/mapbox/light-v10',
                center: [15.4542, 18.7322], // center map on Chad
                zoom: 1.8
            });
        }

        const geojson = {
            type: 'Feature',
            features: markers1.map((marker) => ({
                properties: {
                    maintainer: marker.maintainer,
                    size: 5,
                    maintains: marker.maintains,
                    iconSize: [30, 42],
                },
                geometry: {
                    type: 'Point',
                    coordinates: {
                        lat: marker.latCoord,
                        lng: marker.longCoord
                    }
                }
            }))
        };

        map.current.on('load', () => {
            console.log('map loaded');
            geojson.features.forEach((marker) => {
                // create a DOM element for the marker
                const markerIcon = document.createElement('div');
                markerIcon.className = 'location-marker';
                markerIcon.style.backgroundImage = 'url(/location-marker.png)';
                markerIcon.style.width = marker.properties.iconSize[0] + 'px';
                markerIcon.style.height = marker.properties.iconSize[1] + 'px';

                new mapboxgl.Marker(markerIcon)
                    .setLngLat(marker.geometry.coordinates) // add marker to map
                    .setPopup( // add pop out to map
                        new mapboxgl.Popup({ offset: 25 }).setHTML(
                            `<h3>${marker.properties.maintainer}</h3> <p>Maintains: ${marker.properties.maintains}</p>`
                        )
                    )
                    .addTo(map.current);
            });
        });

        // disable map zoom when scrolling
        map.current.scrollZoom.disable();

        // Add zoom and rotation controls to the map
        map.current.addControl(new mapboxgl.NavigationControl());

    }, []);

    return (
        <Layout>
            <main>
                <p>Click on the marker please!</p>
                <div className={styles['map__container']} ref={mapContainer} />
            </main>
        </Layout>
    );
};

export default Map;