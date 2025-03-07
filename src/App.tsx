import React, { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { MetricCard } from './components/MetricCard';
import { PredictiveChart } from './components/PredictiveChart';
import { RiskAnalysis } from './components/RiskAnalysis';
import { ProfitabilityHeatmap } from './components/ProfitabilityHeatmap';
import { Navigation } from './components/Navigation';
import { FileUpload } from './components/FileUpload';
import { PredictionOptions } from './components/PredictionOptions';
import { FlipCard } from './components/FlipCard';
import { NavSection, PredictionType, PredictiveData, RiskMetric, CostCategory, CostRecommendation } from './types';

// Keep all existing data constants (metrics, risks, costCategories, recommendations, generatePredictiveData)...

function App() {
  const [activeSection, setActiveSection] = useState<NavSection>('dashboard');
  const [selectedPrediction, setSelectedPrediction] = useState<PredictionType | null>(null);

  const flipCards = [
    {
      title: 'Risk Assessment',
      frontContent: 'Comprehensive analysis of potential risks and mitigation strategies.',
      backContent: 'AI-powered risk scoring and automated alert system for proactive risk management.',
      icon: 'AlertTriangle',
      riskPercentage: 75,
      tip: 'Implement automated risk monitoring systems to reduce exposure by 30%'
    },
    {
      title: 'Demand Forecasting',
      frontContent: 'Advanced predictive modeling for future market demand.',
      backContent: 'Machine learning algorithms analyzing historical data and market trends.',
      icon: 'LineChart',
      riskPercentage: 45,
      tip: 'Utilize historical data patterns to improve forecast accuracy by 25%'
    },
    {
      title: 'Market Analysis',
      frontContent: 'Deep insights into market trends and competitive landscape.',
      backContent: 'Real-time competitor tracking and market opportunity identification.',
      icon: 'BarChart2',
      riskPercentage: 60,
      tip: 'Diversify market presence to reduce dependency on primary segments'
    }
  ];

  const handleFileSelect = (file: File) => {
    console.log('Selected file:', file.name);
    toast.success('File uploaded successfully! Analyzing data...', {
      duration: 3000,
      position: 'top-right',
      icon: '📊'
    });
    // Handle file processing here
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {metrics.map((metric, index) => (
                <MetricCard key={index} {...metric} />
              ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <div className="lg:col-span-2">
                <PredictiveChart data={generatePredictiveData()} />
              </div>
              <div>
                <RiskAnalysis risks={risks} />
              </div>
            </div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Profitability Optimization</h2>
              <ProfitabilityHeatmap 
                costCategories={costCategories}
                recommendations={recommendations}
              />
            </div>
          </>
        );

      case 'predictions':
        return (
          <>
            <FileUpload onFileSelect={handleFileSelect} />
            <PredictionOptions
              selectedOption={selectedPrediction}
              onOptionSelect={setSelectedPrediction}
            />
            {selectedPrediction && (
              <>
                <div className="mb-8">
                  <PredictiveChart data={generatePredictiveData()} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {flipCards.map((card, index) => (
                    <FlipCard key={index} {...card} />
                  ))}
                </div>
              </>
            )}
          </>
        );

      case 'analytics':
        return (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <FileUpload onFileSelect={handleFileSelect} />
            {/* Add analytics content */}
          </div>
        );

      case 'settings':
        return (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <FileUpload onFileSelect={handleFileSelect} />
            {/* Add settings content */}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster />
      <Navigation activeSection={activeSection} onNavigate={setActiveSection} />
      <div className="max-w-7xl mx-auto px-4 py-8">
        {renderContent()}
      </div>
    </div>
  );
}

export default App;