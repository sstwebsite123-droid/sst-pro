"use client";
import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const InteractiveGraph = () => {
  const [btcData, setBtcData] = useState([]);
  const [currentPrice, setCurrentPrice] = useState(0);
  const [priceChange, setPriceChange] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Fetch real Bitcoin price data
  useEffect(() => {
    const fetchBtcData = async () => {
      try {
        setLoading(true);

        // Fetch current Bitcoin price
        const priceResponse = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true');
        const priceData = await priceResponse.json();

        if (priceData.bitcoin) {
          setCurrentPrice(Math.round(priceData.bitcoin.usd));
          setPriceChange(Math.round(priceData.bitcoin.usd_24h_change * 100) / 100);
        }

        // Fetch historical data (last 30 days)
        const historicalResponse = await fetch('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30&interval=daily');
        const historicalData = await historicalResponse.json();

        if (historicalData.prices) {
          const formattedData = historicalData.prices.map((item, index) => ({
            x: new Date(item[0]),
            y: Math.round(item[1])
          }));
          setBtcData(formattedData);
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching Bitcoin data:', error);
        // Fallback to mock data if API fails
        const mockData = [];
        const basePrice = 45000;
        let currentPrice = basePrice;

        for (let i = 0; i < 30; i++) {
          const change = (Math.random() - 0.5) * 2000;
          currentPrice = Math.max(30000, currentPrice + change);

          mockData.push({
            x: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000),
            y: currentPrice
          });
        }

        setBtcData(mockData);
        setCurrentPrice(Math.round(currentPrice));
        setPriceChange(Math.round((Math.random() - 0.3) * 20 * 100) / 100);
        setLoading(false);
      }
    };

    fetchBtcData();
  }, []);

  const data = {
    labels: btcData.map((_, index) => `Day ${index + 1}`),
    datasets: [
      {
        label: 'BTC Price',
        data: btcData.map(item => item.y),
        borderColor: '#4aa1ff',
        backgroundColor: 'rgba(74, 161, 255, 0.1)',
        borderWidth: 2,
        fill: true,
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 8,
        pointHoverBackgroundColor: '#4aa1ff',
        pointHoverBorderColor: '#ffffff',
        pointHoverBorderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 2000,
      easing: 'easeInOutQuart',
      delay: (context) => {
        let delay = 0;
        if (context.type === 'data' && context.mode === 'default') {
          delay = context.dataIndex * 100;
        }
        return delay;
      },
    },
    interaction: {
      intersect: false,
      mode: 'index',
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        borderColor: '#4aa1ff',
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: false,
        callbacks: {
          title: function (context) {
            return `Day ${context[0].dataIndex + 1}`;
          },
          label: function (context) {
            return `BTC Price: $${context.parsed.y.toLocaleString()}`;
          },
        },
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: !isMobile, // Hide on mobile, show on desktop
        position: 'left',
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
          drawBorder: false,
        },
        ticks: {
          color: '#ffffff',
          font: {
            size: 12,
          },
          callback: function (value) {
            return value.toLocaleString();
          },
        },
      },
    },
    elements: {
      point: {
        hoverRadius: 8,
      },
    },
  };

  // if (loading) {
  //   return (
  //     <div className="relative w-full h-[200px] bg-gradient-to-t from-black/20 to-transparent rounded-lg p-4 animate-fade-in">
  //       <div className="absolute top-[-20px] left-4 z-10">
  //         <div className="flex items-center gap-2">
  //           <div className="h-8 w-24 bg-gray-600 animate-pulse rounded"></div>
  //           <div className="h-6 w-16 bg-gray-600 animate-pulse rounded"></div>
  //         </div>
  //       </div>
  //       <div className="w-full h-full flex items-center justify-center">
  //         <div className="text-white text-sm">Loading Bitcoin data...</div>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="relative w-full h-[200px] bg-gradient-to-t from-black/20 to-transparent rounded-lg p-4 animate-fade-in max-h-[100px] md:max-h-[unset]">
      <div className="absolute top-[-20px] left-4 z-[1] animate-slide-in-left">
        <div className="flex items-center gap-2">
          <span className="text-xl md:text-2xl font-bold text-[#4aa1ff] animate-count-up">
            ${currentPrice.toLocaleString()}
          </span>
          <span className={`text-xs md:text-sm flex items-center gap-1 animate-slide-in-right ${priceChange >= 0 ? 'text-green-400' : 'text-red-400'
            }`}>
            <span>{priceChange >= 0 ? '▲' : '▼'}</span>
            <span>{priceChange >= 0 ? '+' : ''}{priceChange}%</span>
          </span>
        </div>
      </div>

      <div className="w-full h-full animate-graph-draw">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default InteractiveGraph;
