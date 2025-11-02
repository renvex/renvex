'use client';

import { memo, useEffect, useRef } from 'react';
import { useLocale } from 'next-intl';

const TradingViewWidget = () => {
  const container = useRef<HTMLDivElement>(null);

  const locale = useLocale();

  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-forex-heat-map.js';
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = `
        {
          "colorTheme": "light",
          "isTransparent": false,
          "locale": "${locale}",
          "currencies": [
            "EUR",
            "USD",
            "JPY",
            "GBP",
            "CHF",
            "AUD",
            "CAD",
            "NZD",
            "CNY"
          ],
          "backgroundColor": "rgba(255, 255, 255, 1)",
          "width": "100%",
          "height": "100%"
        }`;
    container.current?.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [locale]);

  return (
    <div ref={container} className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget" />
    </div>
  );
};

export const ForexHeatmap = memo(TradingViewWidget);
