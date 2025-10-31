'use client';

import { memo, useEffect, useRef } from 'react';
import { useLocale } from 'next-intl';

const TradingViewWidget = () => {
  const container = useRef<HTMLDivElement>(null);

  const locale = useLocale();

  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js';
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = `
        {
          "colorTheme": "light",
          "locale": "${locale}",
          "largeChartUrl": "",
          "isTransparent": false,
          "showSymbolLogo": true,
          "backgroundColor": "rgba(255, 255, 255, 1)",
          "support_host": "https://www.tradingview.com",
          "width": "100%",
          "height": "100%",
          "symbolsGroups": [
            {
              "name": "Indices",
              "symbols": [
                {
                  "name": "FOREXCOM:SPXUSD",
                  "displayName": "S&P 500 Index"
                },
                {
                  "name": "FOREXCOM:NSXUSD",
                  "displayName": "US 100 Cash CFD"
                },
                {
                  "name": "FOREXCOM:DJI",
                  "displayName": "Dow Jones Industrial Average Index"
                },
                {
                  "name": "INDEX:NKY",
                  "displayName": "Japan 225"
                },
                {
                  "name": "INDEX:DEU40",
                  "displayName": "DAX Index"
                },
                {
                  "name": "FOREXCOM:UKXGBP",
                  "displayName": "FTSE 100 Index"
                }
              ]
            },
            {
              "name": "Futures",
              "symbols": [
                {
                  "name": "BMFBOVESPA:ISP1!",
                  "displayName": "S&P 500"
                },
                {
                  "name": "BMFBOVESPA:EUR1!",
                  "displayName": "Euro"
                },
                {
                  "name": "CMCMARKETS:GOLD",
                  "displayName": "Gold"
                },
                {
                  "name": "PYTH:WTI3!",
                  "displayName": "WTI Crude Oil"
                },
                {
                  "name": "BMFBOVESPA:CCM1!",
                  "displayName": "Corn"
                }
              ]
            },
            {
              "name": "Bonds",
              "symbols": [
                {
                  "name": "EUREX:FGBL1!",
                  "displayName": "Euro Bund"
                },
                {
                  "name": "EUREX:FBTP1!",
                  "displayName": "Euro BTP"
                },
                {
                  "name": "EUREX:FGBM1!",
                  "displayName": "Euro BOBL"
                }
              ]
            },
            {
              "name": "Forex",
              "symbols": [
                {
                  "name": "FX:EURUSD",
                  "displayName": "EUR to USD"
                },
                {
                  "name": "FX:GBPUSD",
                  "displayName": "GBP to USD"
                },
                {
                  "name": "FX:USDJPY",
                  "displayName": "USD to JPY"
                },
                {
                  "name": "FX:USDCHF",
                  "displayName": "USD to CHF"
                },
                {
                  "name": "FX:AUDUSD",
                  "displayName": "AUD to USD"
                },
                {
                  "name": "FX:USDCAD",
                  "displayName": "USD to CAD"
                }
              ]
            }
          ]
        }`;
    container.current?.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget" />
    </div>
  );
};

export const MarketHeatmap = memo(TradingViewWidget);
