"use client"

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(isDarkMode ? 'light' : 'dark');
  };

  // Animation variants
  const variants = {
    initial: { scale: 0 },
    animate: { scale: 1 },
    exit: { scale: 0 }
  };

  return (
    <button onClick={toggleTheme} className="flex items-center justify-center p-2">
      {isDarkMode ? (
        <motion.div initial="initial" animate="animate" exit="exit" variants={variants}>
          <SunIcon className="w-6 h-6 text-yellow-500" />
        </motion.div>
      ) : (
        <motion.div initial="initial" animate="animate" exit="exit" variants={variants}>
          <MoonIcon className="w-6 h-6 text-gray-700" />
        </motion.div>
      )}
    </button>
  );
};

export default ThemeSwitch;
