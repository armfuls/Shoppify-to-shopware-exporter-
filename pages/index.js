import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function Home() {
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [apiCredentials, setApiCredentials] = useState({
    SHOPIFY_SHOP_NAME: '',
    SHOPIFY_API_KEY: '',
    SHOPIFY_API_PASSWORD: '',
    SHOPWARE_API_URL: '',
    SHOPWARE_ACCESS_KEY: '',
  });

  useEffect(() => {
    // Load saved credentials from localStorage
    const savedCredentials = localStorage.getItem('apiCredentials');
    if (savedCredentials) {
      setApiCredentials(JSON.parse(savedCredentials));
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setApiCredentials(prev => ({ ...prev, [name]: value }));
  };

  const saveCredentials = () => {
    localStorage.setItem('apiCredentials', JSON.stringify(apiCredentials));
    setStatus('API credentials saved successfully.');
  };

  const handleExportImport = async () => {
    setIsLoading(true);
    setStatus('Starting export and import process...');
    try {
      const response = await fetch('/api/exportImport', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(apiCredentials),
      });
      const data = await response.json();
      setStatus(data.message);
    } catch (error) {
      setStatus('Error occurred during the process.');
      console.error(error);
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <Head>
        <title>Shopify to Shopware Exporter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <h2 className="text-3xl font-extrabold text-gray-900">Shopify to Shopware Exporter</h2>
                <p className="text-gray-500">Enter your API credentials below:</p>
                <form className="space-y-4">
                  {Object.keys(apiCredentials).map((key) => (
                    <div key={key}>
                      <label htmlFor={key} className="block text-sm font-medium text-gray-700">{key}</label>
                      <input
                        type="text"
                        name={key}
                        id={key}
                        value={apiCredentials[key]}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={saveCredentials}
                    className="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-indigo-700"
                  >
                    Save Credentials
                  </button>
                </form>
                <div className="pt-6">
                  <button
                    onClick={handleExportImport}
                    disabled={isLoading}
                    className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    {isLoading ? 'Processing...' : 'Start Export and Import'}
                  </button>
                </div>
                {status && (
                  <div className="mt-4 p-4 bg-gray-100 rounded-md">
                    <p className="text-sm text-gray-700">{status}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}