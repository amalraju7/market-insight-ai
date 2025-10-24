'use client'

import React, { useEffect, useRef, memo } from 'react'

export function MarketSidebar() {
  const container = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!container.current) return

    // Clear any previous widget DOM
    container.current.innerHTML = ''

    const script = document.createElement('script')
    script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js'
    script.type = 'text/javascript'
    script.async = true
    script.innerHTML = JSON.stringify({
      width: '100%',
      height: '100%',
      symbolsGroups: [
        {
          name: 'Indices',
          originalName: 'Indices',
          symbols: [
            {
              name: 'FOREXCOM:SPXUSD',
              displayName: 'S&P 500'
            },
            {
              name: 'FOREXCOM:NSXUSD',
              displayName: 'Nasdaq 100'
            },
            {
              name: 'FOREXCOM:DJI',
              displayName: 'Dow Jones'
            },
            {
              name: 'INDEX:RUT',
              displayName: 'Russell 2000'
            }
          ]
        },
        {
          name: 'Magnificent 7',
          originalName: 'Magnificent 7',
          symbols: [
            {
              name: 'NASDAQ:AAPL',
              displayName: 'Apple'
            },
            {
              name: 'NASDAQ:MSFT',
              displayName: 'Microsoft'
            },
            {
              name: 'NASDAQ:GOOGL',
              displayName: 'Alphabet'
            },
            {
              name: 'NASDAQ:AMZN',
              displayName: 'Amazon'
            },
            {
              name: 'NASDAQ:NVDA',
              displayName: 'NVIDIA'
            },
            {
              name: 'NASDAQ:TSLA',
              displayName: 'Tesla'
            },
            {
              name: 'NASDAQ:META',
              displayName: 'Meta'
            }
          ]
        },
        {
          name: 'AI & Tech',
          originalName: 'AI & Tech',
          symbols: [
            {
              name: 'NASDAQ:AMD',
              displayName: 'AMD'
            },
            {
              name: 'NASDAQ:INTC',
              displayName: 'Intel'
            },
            {
              name: 'NYSE:CRM',
              displayName: 'Salesforce'
            },
            {
              name: 'NASDAQ:ADBE',
              displayName: 'Adobe'
            },
            {
              name: 'NASDAQ:ORCL',
              displayName: 'Oracle'
            },
            {
              name: 'NYSE:IBM',
              displayName: 'IBM'
            }
          ]
        },
        {
          name: 'Finance',
          originalName: 'Finance',
          symbols: [
            {
              name: 'NYSE:JPM',
              displayName: 'JPMorgan'
            },
            {
              name: 'NYSE:BAC',
              displayName: 'Bank of America'
            },
            {
              name: 'NYSE:GS',
              displayName: 'Goldman Sachs'
            },
            {
              name: 'NYSE:MS',
              displayName: 'Morgan Stanley'
            },
            {
              name: 'NYSE:V',
              displayName: 'Visa'
            },
            {
              name: 'NYSE:MA',
              displayName: 'Mastercard'
            }
          ]
        },
        {
          name: 'Energy',
          originalName: 'Energy',
          symbols: [
            {
              name: 'NYSE:XOM',
              displayName: 'Exxon'
            },
            {
              name: 'NYSE:CVX',
              displayName: 'Chevron'
            },
            {
              name: 'NYSE:COP',
              displayName: 'ConocoPhillips'
            },
            {
              name: 'NYSE:SLB',
              displayName: 'Schlumberger'
            }
          ]
        },
        {
          name: 'Healthcare',
          originalName: 'Healthcare',
          symbols: [
            {
              name: 'NYSE:JNJ',
              displayName: 'Johnson & Johnson'
            },
            {
              name: 'NYSE:UNH',
              displayName: 'UnitedHealth'
            },
            {
              name: 'NYSE:PFE',
              displayName: 'Pfizer'
            },
            {
              name: 'NASDAQ:MRNA',
              displayName: 'Moderna'
            },
            {
              name: 'NYSE:ABBV',
              displayName: 'AbbVie'
            }
          ]
        },
        {
          name: 'Consumer',
          originalName: 'Consumer',
          symbols: [
            {
              name: 'NYSE:WMT',
              displayName: 'Walmart'
            },
            {
              name: 'NYSE:KO',
              displayName: 'Coca-Cola'
            },
            {
              name: 'NYSE:PEP',
              displayName: 'PepsiCo'
            },
            {
              name: 'NYSE:NKE',
              displayName: 'Nike'
            },
            {
              name: 'NYSE:DIS',
              displayName: 'Disney'
            },
            {
              name: 'NASDAQ:SBUX',
              displayName: 'Starbucks'
            }
          ]
        },
        {
          name: 'Crypto',
          originalName: 'Crypto',
          symbols: [
            {
              name: 'BITSTAMP:BTCUSD',
              displayName: 'Bitcoin'
            },
            {
              name: 'BITSTAMP:ETHUSD',
              displayName: 'Ethereum'
            },
            {
              name: 'BINANCE:SOLUSD',
              displayName: 'Solana'
            },
            {
              name: 'BINANCE:XRPUSD',
              displayName: 'XRP'
            }
          ]
        }
      ],
      showSymbolLogo: true,
      isTransparent: false,
      colorTheme: 'light',
      locale: 'en',
      backgroundColor: '#ffffff'
    })

    container.current.appendChild(script)

    return () => {
      if (container.current) {
        container.current.innerHTML = ''
      }
    }
  }, [])

  return (
    <div className="h-full overflow-hidden bg-white rounded-lg border border-gray-200 shadow-sm">
      <div className="px-3 py-2 border-b border-gray-200 bg-gray-50">
        <h2 className="text-sm font-semibold text-gray-900">Live Market Data</h2>
        <p className="text-xs text-gray-500">Real-time prices & changes</p>
      </div>
      <div
        className="tradingview-widget-container"
        ref={container}
        style={{ height: 'calc(100% - 60px)', width: '100%' }}
      >
        <div
          className="tradingview-widget-container__widget"
          style={{ height: '100%', width: '100%' }}
        ></div>
      </div>
    </div>
  )
}

export default memo(MarketSidebar)
