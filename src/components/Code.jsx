import React from 'react';

export default function Code() {
  const code = `curl --location --request POST 'https://api.homespotter.app/api/get_appraisal' \\
  --header 'Content-Type: application/json' \\
  --header 'X-API-Key: {{YOUR_API_KEY}}' \\
  --data '{
      "rol": "2147-2",
      "comuna": "Las Condes",
      "propertyType": "departamento",
      "operation": "venta",
      "usefulSquareMeters": 100,
      "totalSquareMeters": 120,
      "bedrooms": 2,
      "bathrooms": 2,
      "parkings": 1,
      "furnished": 0,
  }'`;

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg font-mono pb-8" style={{ fontFamily: '"Fira Code", monospace' }}>
      <div className="flex justify-between bg-gray-800 px-4 py-2 rounded-t-lg">
        <div className="flex items-center space-x-2 mr-2 mt-2">
          <span className="block w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="block w-3 h-3 bg-yellow-500 rounded-full"></span>
          <span className="block w-3 h-3 bg-green-500 rounded-full"></span>
        </div>
      </div>
      <pre className="p-4 bg-gray-800 overflow-x-auto text-xs">
        <code className="text-gray-300 whitespace-pre">
          {code}
        </code>
      </pre>
    </div>
  );
}
