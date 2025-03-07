import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { format } from 'date-fns';
import { PredictiveData } from '../types';

interface Props {
  data: PredictiveData[];
}

export const PredictiveChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h3 className="text-xl font-semibold text-gray-800 mb-6">Revenue Forecast</h3>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              tickFormatter={(date) => format(new Date(date), 'MMM d')}
            />
            <YAxis />
            <Tooltip
              labelFormatter={(date) => format(new Date(date), 'MMM d, yyyy')}
              formatter={(value) => [`$${value}`, '']}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="actual"
              stroke="#2563eb"
              strokeWidth={2}
              dot={false}
              name="Actual Revenue"
            />
            <Line
              type="monotone"
              dataKey="predicted"
              stroke="#16a34a"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={false}
              name="Predicted Revenue"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};