import { CalciteButton } from '@esri/calcite-components-react';
import { ArcMapView } from 're-arc';

import { ArcgisPlacement } from '@arcgis/map-components-react';

export default function Example() {
  return (
    <ArcMapView
      style={{ height: '100%' }}
      map={{ basemap: 'streets' }}
      zoom={3}
      center={[-100.4593, 36.9014]}
    >
      <ArcgisPlacement position="top-right">
        <div style={{ backgroundColor: 'white', padding: 8, color: 'black' }}>
          Hi, I am a UI element! I resize with the map container!
        </div>
      </ArcgisPlacement>

      <ArcgisPlacement position="bottom-left">
        <CalciteButton>Anything can be in a ArcUI element!</CalciteButton>
      </ArcgisPlacement>
    </ArcMapView>
  );
}
