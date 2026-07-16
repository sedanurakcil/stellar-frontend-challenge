/**
 * Bonus Features Components
 *
 * These are placeholder/starter components for bonus features.
 * Feel free to expand and customize them!
 *
 * Available Bonus Features:
 * - Dark/Light Mode (10 points)
 * - QR code for address (10 points)
 * - Balance chart/graph (15 points)
 * - Search/filter transactions (10 points)
 * - Animations and transitions (10 points)
 * - Mobile responsive design (10 points)
 * - Transaction confirmations (10 points)
 * - Address book (15 points)
 */

"use client";

import { useEffect, useState } from "react";
import {
  FaMoon,
  FaSun,
  FaQrcode,
  FaChartLine,
  FaSearch,
  FaBook,
} from "react-icons/fa";
import { Card } from "./example-components";

// ============================================
// 1. Dark/Light Mode Toggle (10 points)
// ============================================
export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check for saved preference or system preference
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const shouldBeDark = saved ? saved === "dark" : prefersDark;

    setIsDark(shouldBeDark);
    updateTheme(shouldBeDark);
  }, []);

  const updateTheme = (dark: boolean) => {
    const html = document.documentElement;
    if (dark) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const toggleDarkMode = () => {
    const newState = !isDark;
    setIsDark(newState);
    updateTheme(newState);
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggleDarkMode}
      className="fixed top-4 right-4 p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle dark mode"
    >
      {isDark ? (
        <svg
          className="w-5 h-5 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zm5.657-9.193a1 1 0 00-1.414 0l-.707.707A1 1 0 005.05 6.464l.707-.707a1 1 0 011.414 0zm0 18.386a1 1 0 001.414 0l.707-.707a1 1 0 00-1.414-1.414l-.707.707a1 1 0 000 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            clipRule="evenodd"
          />
        </svg>
      ) : (
        <svg
          className="w-5 h-5 text-gray-600"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      )}
    </button>
  );
}

// ============================================
// 2. QR Code for Address (10 points)
// ============================================
export function AddressQRCode({ address }: { address: string }) {
  const [showQR, setShowQR] = useState(false);

  return (
    <div>
      <button
        onClick={() => setShowQR(!showQR)}
        className="text-blue-400 hover:text-blue-300 flex items-center gap-2 text-sm"
      >
        <FaQrcode /> {showQR ? "Hide QR" : "Show QR Code"}
      </button>

      {showQR && (
        <div className="mt-4 p-4 bg-white rounded-lg">
          <div className="text-center">
            <p className="text-gray-800 text-xs mb-2">Scan to get address</p>
            {/* TODO: Implement QR Code generation */}
            {/* Hint: Use qrcode.react or similar library */}
            <div className="w-48 h-48 bg-gray-200 flex items-center justify-center mx-auto">
              <p className="text-gray-500 text-sm">QR Code Here</p>
            </div>
            <p className="text-gray-600 text-xs mt-2 font-mono break-all">
              {address}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================
// 3. Balance Chart/Graph (15 points)
// ============================================
export function BalanceChart() {
  return (
    <Card title="📊 Balance History">
      <div className="h-64 bg-white/5 rounded-lg flex items-center justify-center">
        <div className="text-center">
          <FaChartLine className="text-4xl text-white/40 mx-auto mb-4" />
          <p className="text-white/60">Balance chart will appear here</p>
          <p className="text-white/40 text-sm mt-2">
            TODO: Implement with Chart.js or Recharts
          </p>
        </div>
      </div>
    </Card>
  );
}

// ============================================
// 4. Search/Filter Transactions (10 points)
// ============================================
export function TransactionFilter({
  onFilter,
}: {
  onFilter: (query: string) => void;
}) {
  const [query, setQuery] = useState("");

  const handleSearch = (value: string) => {
    setQuery(value);
    onFilter(value);
  };

  return (
    <div className="relative">
      <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
      <input
        type="text"
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search transactions..."
        className="w-full bg-white/5 border border-white/20 rounded-lg pl-10 pr-4 py-2 text-white placeholder-white/40 focus:outline-none focus:border-white/40"
      />
    </div>
  );
}

// ============================================
// 5. Transaction Confirmation Modal (10 points)
// ============================================
export function TransactionConfirmation({
  isOpen,
  onConfirm,
  onCancel,
  recipient,
  amount,
}: {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  recipient: string;
  amount: string;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-2xl shadow-2xl max-w-md w-full border border-white/10">
        <div className="p-6">
          <h3 className="text-2xl font-bold text-white mb-4">
            Confirm Transaction
          </h3>

          <div className="space-y-3 mb-6">
            <div className="bg-white/5 rounded-lg p-3">
              <p className="text-white/60 text-sm">Recipient</p>
              <p className="text-white font-mono text-sm break-all">
                {recipient}
              </p>
            </div>
            <div className="bg-white/5 rounded-lg p-3">
              <p className="text-white/60 text-sm">Amount</p>
              <p className="text-white text-2xl font-bold">{amount} XLM</p>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={onCancel}
              className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// 6. Address Book (15 points)
// ============================================
export function AddressBook() {
  const [addresses, setAddresses] = useState<
    Array<{ name: string; address: string }>
  >([]);
  const [showAdd, setShowAdd] = useState(false);

  return (
    <Card title="📖 Address Book">
      <div className="mb-4">
        <button
          onClick={() => setShowAdd(!showAdd)}
          className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-2"
        >
          <FaBook /> {showAdd ? "Close" : "Add Address"}
        </button>
      </div>

      {showAdd && (
        <div className="mb-4 p-4 bg-white/5 rounded-lg">
          <p className="text-white/60 text-sm mb-2">Add new contact</p>
          {/* TODO: Implement add address form */}
          <input
            type="text"
            placeholder="Name"
            className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/40 mb-2"
          />
          <input
            type="text"
            placeholder="Stellar Address"
            className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/40 mb-3"
          />
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg">
            Save Contact
          </button>
        </div>
      )}

      {addresses.length === 0 ? (
        <div className="text-center py-8 text-white/40">
          <p>No saved addresses yet</p>
          <p className="text-sm mt-2">Click "Add Address" to get started</p>
        </div>
      ) : (
        <div className="space-y-2">
          {addresses.map((contact, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-lg p-3 flex justify-between items-center"
            >
              <div>
                <p className="text-white font-semibold">{contact.name}</p>
                <p className="text-white/60 text-xs font-mono">
                  {contact.address.slice(0, 20)}...
                </p>
              </div>
              <button className="text-blue-400 hover:text-blue-300 text-sm">
                Use
              </button>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}

// ============================================
// 7. Loading Animations (Example)
// ============================================
export function AnimatedCard({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <div className="animate-fadeIn" style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

// Add this to your globals.css for animations:
/*
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.5s ease-out forwards;
}
*/
