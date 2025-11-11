import React from 'react';

interface ArcadeCabinetProps {
  children: React.ReactNode;
}

const ArcadeCabinet: React.FC<ArcadeCabinetProps> = ({ children }) => {
  return (
    <div className="arcade-cabinet">
      <div className="screen">
        <div className="screen-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ArcadeCabinet;