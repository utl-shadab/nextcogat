import React, { useState } from 'react';

const DownloadForm: React.FC = () => {
  const [url, setUrl] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleDownload = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/download', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to download video');
      }

      const data = await response.json();
      console.log('Downloaded Video Info:', data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Download Video</h2>
      <input
        type="text"
        placeholder="Paste YouTube video link here"
        className="w-full p-2 border border-gray-300 rounded mb-4"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button
        onClick={handleDownload}
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        disabled={loading}
      >
        {loading ? 'Downloading...' : 'Download'}
      </button>
      {error && <p className=" text-[#E4434B] mt-4">{error}</p>}
    </div>
  );
};

export default DownloadForm;