import { useEffect, useRef } from 'react';

import { useCurrentView } from '../components/ArcView/ViewContext';

export const useArcUI = (position: __esri.UIAddPosition['position']) => {
  const widgetRef = useRef<HTMLDivElement>(null);
  const view = useCurrentView();

  useEffect(() => {
    const ref = widgetRef.current;

    if (!ref || !view) return () => undefined;

    const viewUi = view.ui;
    viewUi.add(ref, position);

    return () => {
      if (!view.destroyed) viewUi.remove(ref);
    };
  }, [position, view]);

  return widgetRef;
};
