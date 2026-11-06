import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Loading: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#f5f5f5] backdrop-blur-xs">
      <div className="loading"></div>
    </div>
  );
};

export default Loading