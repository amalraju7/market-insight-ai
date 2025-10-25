<h2 align="center">
 <br>
 <img src="https://i.imgur.com/f1C7EdN.png" alt="MarketInsight AI - AI-Powered Stock Market Analysis" width="250">
 <br>
 <br>
 MarketInsight AI: Lightning Fast AI Chatbot with Live Interactive Stock Charts, Financials, News, Screeners, and Real-Time Market Data
 <br>
</h2>

<p align="center">
 <a href="#Overview">Overview</a> •
 <a href="#Features">Features</a> •
  <a href="#Interfaces">Interfaces</a> •
 <a href="#Quickstart">Quickstart</a>
</p>

<br>

<p align="center">
  <a href="https://market-insight-ai-ruddy.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/Live%20Demo-Visit%20Now-blue?style=for-the-badge" alt="Live Demo">
  </a>
</p>

## Demo

[![MarketInsight AI Demo](https://img.youtube.com/vi/tcW9yIaLluo/maxresdefault.jpg)](https://www.youtube.com/watch?v=tcW9yIaLluo)

> **Demo of MarketInsight AI** showing real-time AI chat with interactive stock charts, live market data sidebar, and TradingView widgets. [Watch on YouTube →](https://www.youtube.com/watch?v=tcW9yIaLluo)

## Overview

MarketInsight AI is an AI-powered stock market analysis platform that leverages Llama3 70b on Groq, Vercel's AI SDK, and TradingView's live widgets to provide intelligent market insights through natural conversation. With Groq's lightning-fast inference, you get near-instantaneous responses with live, interactive charts and real-time market data.

> [!IMPORTANT]
>  Note: MarketInsight AI may provide inaccurate information and does not provide investment advice. It is for entertainment and instructional use only.

## Features

- 🤖 **Real-time AI Chatbot**: Engage with AI powered by Llama3 70b to request stock news, information, and charts through natural language conversation
- 📊 **Interactive Stock Charts**: Receive near-instant, context-aware responses with interactive TradingView charts that host live data
- 📈 **Live Market Data Sidebar**: Collapsible sidebar displaying real-time prices for 60+ stocks across major indices, tech, finance, energy, healthcare, consumer, and crypto sectors
- 🔄 **Adaptive Interface**: Dynamically render TradingView UI components for financial interfaces tailored to your specific query
- ⚡ **Groq-Powered Performance**: Leverage Groq's cutting-edge inference technology for near-instantaneous responses and seamless user experience
- 🌐 **Multi-Asset Market Coverage**: Access comprehensive data and analysis across stocks, forex, bonds, and cryptocurrencies
- 🎨 **Collapsible Layout**: Toggle the market data sidebar to maximize chart viewing space

## Interfaces
| Description | Widget |
|-------------|--------|
| **Live Market Data Sidebar**<br>Real-time price tracking for 60+ stocks across 8 sectors with collapsible layout. Features major indices (S&P 500, Nasdaq, Dow), Magnificent 7 tech stocks, AI & Tech, Finance, Energy, Healthcare, Consumer brands, and Crypto. | *New Feature* |
| **Heatmap of Daily Market Performance**<br>Visualize market trends at a glance with an interactive heatmap. | ![Heatmap of Daily Market Performance](https://github.com/user-attachments/assets/2e3919a3-280b-4be4-adcd-a1ff636bff3e) |
| **Breakdown of Financial Data for Stocks**<br>Get detailed financial metrics and key performance indicators for any stock. | ![Breakdown of Financial Data for Stocks](https://github.com/user-attachments/assets/c1c32dac-8295-4efb-ac1e-2eea8a89e7db) |
| **Price History of Stock**<br>Track the historical price movement of stocks with customizable date ranges. | ![Price History of Stock](https://github.com/user-attachments/assets/f588068e-4d95-4188-96fd-866d355c993e) |
| **Candlestick Stock Charts for Specific Assets**<br>Analyze price patterns and trends with detailed candlestick charts. | ![Candlestick Stock Charts for Specific Assets](https://github.com/user-attachments/assets/ce9ea4a8-a1fe-4ce7-be60-3f5d64d50ced) |
| **Top Stories for Specific Stock**<br>Stay informed with the latest news and headlines affecting specific companies. | ![Top Stories for Specific Stock](https://github.com/user-attachments/assets/fa0693f4-8eca-4d5c-90e7-42afda0d8acc) |
| **Market Overview**<br>Shows an overview of today's stock, futures, bond, and forex market performance including change values, Open, High, Low, and Close values. | ![Market Overview](https://github.com/user-attachments/assets/79048f3b-9153-41f9-8de5-6b3d45f331dd) |
| **Stock Screener to Find New Stocks and ETFs**<br>Discover new companies with a stock screening tool. | ![Stock Screener to Find New Stocks and ETFs](https://github.com/user-attachments/assets/8ecadec9-69a1-4e18-a9fe-7b30df9f6ff5) |
| **Trending Stocks**<br>Shows the top five gaining, losing, and most active stocks for the day. | ![Trending Stocks](https://github.com/user-attachments/assets/848c1ebf-7828-4116-a041-6f0ba7156bd5) |
| **ETF Heatmap**<br>Shows a heatmap of today's ETF market performance across sectors and asset classes. | ![ETF Heatmap](https://github.com/user-attachments/assets/cb2b29d9-acb7-4c8f-90c7-0390e72907f6) |

## Quickstart

> [!TIP]
> Try the live hosted version at [market-insight-ai-ruddy.vercel.app](https://market-insight-ai-ruddy.vercel.app/)

You will need a Groq API Key to run the application. You can obtain one [here on the Groq console](https://console.groq.com/keys).

To get started locally, you can run the following:

```bash
cp .env.example .env.local
```

Add your Groq API key to .env.local, then run:

```bash
pnpm install
pnpm dev
```

Your app should now be running on [localhost:3000](http://localhost:3000/).

Your app should now be running on [localhost:3000](http://localhost:3000/).

## Tech Stack

- **AI/ML**: Groq (Llama3 70b), Vercel AI SDK
- **Frontend**: Next.js 16, React 19, TypeScript, Tailwind CSS
- **Data Visualization**: TradingView Widgets
- **Deployment**: Vercel

## License

MIT License - feel free to use this project for your own purposes.

## License

MIT License - feel free to use this project for your own purposes.

## Features

- 🤖 **Real-time AI Chatbot**: Engage with AI powered by Llama3 70b to request stock news, information, and charts through natural language conversation
- 📊 **Interactive Stock Charts**: Receive near-instant, context-aware responses with interactive TradingView charts that host live data
- 🔄 **Adaptive Interface**: Dynamically render TradingView UI components for financial interfaces tailored to your specific query
- ⚡ **Groq-Powered Performance**: Leverage Groq's cutting-edge inference technology for near-instantaneous responses and seamless user experience
- 🌐 **Multi-Asset Market Coverage**: Access comprehensive data and analysis across stocks, forex, bonds, and cryptocurrencies

## Interfaces
| Description | Widget |
|-------------|--------|
| **Heatmap of Daily Market Performance**<br>Visualize market trends at a glance with an interactive heatmap. | ![Heatmap of Daily Market Performance](https://github.com/user-attachments/assets/2e3919a3-280b-4be4-adcd-a1ff636bff3e) |
| **Breakdown of Financial Data for Stocks**<br>Get detailed financial metrics and key performance indicators for any stock. | ![Breakdown of Financial Data for Stocks](https://github.com/user-attachments/assets/c1c32dac-8295-4efb-ac1e-2eea8a89e7db) |
| **Price History of Stock**<br>Track the historical price movement of stocks with customizable date ranges. | ![Price History of Stock](https://github.com/user-attachments/assets/f588068e-4d95-4188-96fd-866d355c993e) |
| **Candlestick Stock Charts for Specific Assets**<br>Analyze price patterns and trends with detailed candlestick charts. | ![Candlestick Stock Charts for Specific Assets](https://github.com/user-attachments/assets/ce9ea4a8-a1fe-4ce7-be60-3f5d64d50ced) |
| **Top Stories for Specific Stock**<br>Stay informed with the latest news and headlines affecting specific companies. | ![Top Stories for Specific Stock](https://github.com/user-attachments/assets/fa0693f4-8eca-4d5c-90e7-42afda0d8acc) |
| **Market Overview**<br>Shows an overview of today's stock, futures, bond, and forex market performance including change values, Open, High, Low, and Close values. | ![Market Overview](https://github.com/user-attachments/assets/79048f3b-9153-41f9-8de5-6b3d45f331dd) |
| **Stock Screener to Find New Stocks and ETFs**<br>Discover new companies with a stock screening tool. | ![Stock Screener to Find New Stocks and ETFs](https://github.com/user-attachments/assets/8ecadec9-69a1-4e18-a9fe-7b30df9f6ff5) |
| **Trending Stocks**<br>Shows the top five gaining, losing, and most active stocks for the day. | ![Trending Stocks](https://github.com/user-attachments/assets/848c1ebf-7828-4116-a041-6f0ba7156bd5) |
| **ETF Heatmap**<br>Shows a heatmap of today's ETF market performance across sectors and asset classes. | ![ETF Heatmap](https://github.com/user-attachments/assets/cb2b29d9-acb7-4c8f-90c7-0390e72907f6) |

## Quickstart

> [!IMPORTANT]
> To use StockBot, you can use a hosted version at [groq-stockbot.vercel.app](https://groq-stockbot.vercel.app/).
> Alternatively, you can run StockBot locally using the quickstart instructions.


You will need a Groq API Key to run the application. You can obtain one [here on the Groq console](https://console.groq.com/keys).

To get started locally, you can run the following:

```bash
cp .env.example .env.local
```

Add your Groq API key to .env.local, then run:

```bash
pnpm install
pnpm dev
```

Your app should now be running on [localhost:3000](http://localhost:3000/).
