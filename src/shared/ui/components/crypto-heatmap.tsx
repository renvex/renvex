'use client';

import { memo, useEffect, useRef } from 'react';
import { useLocale } from 'next-intl';

const TradingViewWidget = () => {
  const container = useRef<HTMLDivElement>(null);

  const locale = useLocale();

  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-crypto-coins-heatmap.js';
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = `
        {
          "dataSource": "Crypto",
          "blockSize": "market_cap_calc",
          "blockColor": "24h_close_change|5",
          "locale": "${locale}",
          "symbolUrl": "",
          "colorTheme": "light",
          "hasTopBar": false,
          "isDataSetEnabled": false,
          "isZoomEnabled": true,
          "hasSymbolTooltip": true,
          "isMonoSize": false,
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
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget" />
    </div>
  );
};

export const CryptoHeatmap = memo(TradingViewWidget);
