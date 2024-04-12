import { ArcSceneView } from 're-arc';

export default function Example() {
  return (
    <ArcSceneView
      style={{ height: '100%' }}
      map={{ basemap: 'streets' }}
      zoom={3}
      center={[-100.4593, 36.9014]}
    />
  );
}
