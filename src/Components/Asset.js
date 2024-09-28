import React, { useState, useEffect } from 'react';
import Papa from 'papaparse'; 
import { useNavigate } from 'react-router-dom';
import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa'; // Sorting icons

const Asset = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchBy, setSearchBy] = useState('Ticker');
  const [sortBy, setSortBy] = useState('Ticker');
  const [sortOrder, setSortOrder] = useState('asc'); 
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 50;
  const navigate = useNavigate();

  const userName = "test@example.com"; 

  // Fetch CSV Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/all_stocks.csv');
        const reader = response.body.getReader();
        const result = await reader.read();
        const decoder = new TextDecoder('utf-8');
        const csv = decoder.decode(result.value);
        Papa.parse(csv, {
          header: true,
          complete: (results) => setData(results.data),
        });
      } catch (error) {
        console.error('Error fetching CSV data:', error);
      }
    };
    fetchData();
  }, []);

  // Filter and sort data
  const filteredData = data
    .filter((item) => item[searchBy]?.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => (sortOrder === 'asc' ? a[sortBy] > b[sortBy] : a[sortBy] < b[sortBy]) ? 1 : -1);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentData = filteredData.slice(indexOfFirstRow, indexOfLastRow);

  // Handle pagination
  const handleNext = () => {
    if (indexOfLastRow < filteredData.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Render sort icons
  const renderSortIcon = (key) => {
    if (sortBy !== key) return <FaSort />;
    return sortOrder === 'asc' ? <FaSortUp /> : <FaSortDown />;
  };

  // Handle sorting
  const handleSort = (key) => {
    if (sortBy === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(key);
      setSortOrder('asc');
    }
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem('authenticated');
    navigate('/');
  };

  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-200 p-6">
      {/* Header */}
      <header className="bg-blue-600 text-white py-8 px-4 mb-8 shadow-lg rounded-lg text-center">
        <h1 className="text-4xl font-extrabold" aria-label="Asset Manager: Manage your assets">
          Asset Manager
        </h1>
        <p className="mt-2 text-lg" aria-label="Manage stocks using data from Kaggle">
          Demo with Stocks Data from Kaggle
        </p>
      </header>

      {/* Welcome and Logout */}
      <h2 className="text-xl font-semibold mb-6 text-gray-800" aria-label={`Welcome ${userName}`}>
        Welcome, {userName}!
      </h2>

      <button
        onClick={handleLogout}
        className="absolute top-10 right-0 p-10 text-red-600 hover:text-red-800 font-semibold underline"
        aria-label="Logout from the app"
      >
        Logout
      </button>

      {/* Search and Filter */}
      <section className="mb-6 flex items-center gap-4 justify-center">
        <label className="text-lg font-semibold">Search by:</label>
        <select
          value={searchBy}
          onChange={(e) => setSearchBy(e.target.value)}
          className="border p-3 rounded-lg shadow-md bg-white hover:bg-gray-50"
          aria-label="Search by attribute"
        >
          <option value="Ticker">Ticker</option>
          <option value="date">Date</option>
          <option value="open">Open</option>
          <option value="high">High</option>
          <option value="low">Low</option>
          <option value="close">Close</option>
          <option value="volume">Volume</option>
        </select>

        <input
          type="text"
          placeholder={`Search by ${searchBy}...`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-3 rounded-lg shadow-md w-full focus:ring-2 focus:ring-blue-400"
          aria-label={`Enter search term for ${searchBy}`}
        />
      </section>

      {/* Pagination Controls */}
      <nav className="flex justify-end mt-4 mb-4">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="bg-blue-500 text-white px-4 py-2 mr-2 rounded disabled:bg-gray-400"
          aria-label="Previous page"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={indexOfLastRow >= filteredData.length}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
          aria-label="Next page"
        >
          Next
        </button>
      </nav>

      {/* Data Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-lg rounded-lg">
          <thead>
            <tr>
              {['Ticker', 'Date', 'Open', 'High', 'Low', 'Close', 'Volume'].map((header) => (
                <th
                  key={header}
                  onClick={() => handleSort(header.toLowerCase())}
                  className="py-2 px-4 bg-blue-500 text-left font-bold text-gray-700 cursor-pointer"
                  aria-sort={sortBy === header.toLowerCase() ? (sortOrder === 'asc' ? 'ascending' : 'descending') : 'none'}
                  scope="col"
                  aria-label={`Sort by ${header}`}
                >
                  <div className="flex items-center">
                    {header} {renderSortIcon(header.toLowerCase())}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="border px-4 py-2" aria-label="Ticker">{item.Ticker}</td>
                <td className="border px-4 py-2" aria-label="Date">{item.date}</td>
                <td className="border px-4 py-2" aria-label="Open">${item.open}</td>
                <td className="border px-4 py-2" aria-label="High">${item.high}</td>
                <td className="border px-4 py-2" aria-label="Low">${item.low}</td>
                <td className="border px-4 py-2" aria-label="Close">${item.close}</td>
                <td className="border px-4 py-2" aria-label="Volume">{item.volume}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Asset;
