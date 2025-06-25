import React from 'react';

interface ArticleIconProps {
  category: string;
  className?: string;
}

export const ArticleIcon: React.FC<ArticleIconProps> = ({ category, className = "w-full h-full" }) => {
  const iconColor = "#10b981"; // Emerald green

  // Güvenlik kontrolü - category undefined ise default döndür
  if (!category) {
    return (
      <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="25" fill={iconColor} fillOpacity="0.1" stroke={iconColor} strokeWidth="2"/>
        <path d="M40 40 L60 40 M40 50 L60 50 M40 60 L60 60" stroke={iconColor} strokeWidth="2"/>
      </svg>
    );
  }

  switch (category) {
    case 'kisisel-finans':
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Wallet with money */}
          <rect x="20" y="35" width="60" height="40" rx="8" fill={iconColor} fillOpacity="0.1" stroke={iconColor} strokeWidth="2"/>
          <rect x="25" y="40" width="15" height="10" rx="2" fill={iconColor}/>
          <rect x="45" y="40" width="15" height="10" rx="2" fill={iconColor}/>
          <rect x="65" y="40" width="10" height="10" rx="2" fill={iconColor}/>
          <circle cx="35" cy="60" r="8" fill={iconColor} fillOpacity="0.2"/>
          <text x="35" y="65" textAnchor="middle" fontSize="8" fill={iconColor} fontWeight="bold">₺</text>
          <circle cx="55" cy="60" r="6" fill={iconColor} fillOpacity="0.3"/>
          <text x="55" y="64" textAnchor="middle" fontSize="6" fill={iconColor} fontWeight="bold">₺</text>
          {/* Coins scattered */}
          <circle cx="25" cy="25" r="4" fill={iconColor} fillOpacity="0.4"/>
          <circle cx="75" cy="25" r="3" fill={iconColor} fillOpacity="0.4"/>
          <circle cx="70" cy="80" r="3" fill={iconColor} fillOpacity="0.4"/>
        </svg>
      );

    case 'yatirim':
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Growth chart with arrow */}
          <path d="M15 75 L30 60 L45 65 L60 45 L75 35 L85 25" stroke={iconColor} strokeWidth="3" fill="none"/>
          <circle cx="30" cy="60" r="3" fill={iconColor}/>
          <circle cx="45" cy="65" r="3" fill={iconColor}/>
          <circle cx="60" cy="45" r="3" fill={iconColor}/>
          <circle cx="75" cy="35" r="3" fill={iconColor}/>
          {/* Arrow pointing up */}
          <path d="M80 30 L85 25 L90 30" stroke={iconColor} strokeWidth="2" fill="none"/>
          <path d="M85 25 L85 35" stroke={iconColor} strokeWidth="2"/>
          {/* Background bars */}
          <rect x="20" y="70" width="4" height="15" fill={iconColor} fillOpacity="0.2"/>
          <rect x="30" y="65" width="4" height="20" fill={iconColor} fillOpacity="0.2"/>
          <rect x="40" y="60" width="4" height="25" fill={iconColor} fillOpacity="0.2"/>
          <rect x="50" y="50" width="4" height="35" fill={iconColor} fillOpacity="0.2"/>
          <rect x="60" y="45" width="4" height="40" fill={iconColor} fillOpacity="0.2"/>
          <rect x="70" y="35" width="4" height="50" fill={iconColor} fillOpacity="0.2"/>
        </svg>
      );

    case 'kripto-para':
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Bitcoin symbol */}
          <circle cx="50" cy="50" r="25" fill={iconColor} fillOpacity="0.1" stroke={iconColor} strokeWidth="2"/>
          <path d="M40 35 L40 65 M45 35 L45 65" stroke={iconColor} strokeWidth="2"/>
          <path d="M40 40 L55 40 Q60 40 60 45 Q60 50 55 50 L40 50" stroke={iconColor} strokeWidth="2" fill="none"/>
          <path d="M40 50 L58 50 Q63 50 63 55 Q63 60 58 60 L40 60" stroke={iconColor} strokeWidth="2" fill="none"/>
          {/* Blockchain nodes */}
          <circle cx="20" cy="20" r="6" fill={iconColor} fillOpacity="0.3"/>
          <circle cx="80" cy="20" r="6" fill={iconColor} fillOpacity="0.3"/>
          <circle cx="20" cy="80" r="6" fill={iconColor} fillOpacity="0.3"/>
          <circle cx="80" cy="80" r="6" fill={iconColor} fillOpacity="0.3"/>
          {/* Connection lines */}
          <path d="M26 20 L44 35" stroke={iconColor} strokeWidth="1" strokeDasharray="2,2"/>
          <path d="M74 20 L56 35" stroke={iconColor} strokeWidth="1" strokeDasharray="2,2"/>
          <path d="M26 80 L44 65" stroke={iconColor} strokeWidth="1" strokeDasharray="2,2"/>
          <path d="M74 80 L56 65" stroke={iconColor} strokeWidth="1" strokeDasharray="2,2"/>
        </svg>
      );

    case 'bankacilik':
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Bank building */}
          <rect x="25" y="45" width="50" height="35" fill={iconColor} fillOpacity="0.1" stroke={iconColor} strokeWidth="2"/>
          {/* Columns */}
          <rect x="30" y="45" width="4" height="35" fill={iconColor}/>
          <rect x="40" y="45" width="4" height="35" fill={iconColor}/>
          <rect x="50" y="45" width="4" height="35" fill={iconColor}/>
          <rect x="60" y="45" width="4" height="35" fill={iconColor}/>
          <rect x="66" y="45" width="4" height="35" fill={iconColor}/>
          {/* Roof */}
          <path d="M20 45 L50 25 L80 45" stroke={iconColor} strokeWidth="2" fill="none"/>
          <rect x="20" y="43" width="60" height="4" fill={iconColor}/>
          {/* Base */}
          <rect x="15" y="80" width="70" height="5" fill={iconColor}/>
          {/* Door */}
          <rect x="45" y="65" width="10" height="15" fill={iconColor} fillOpacity="0.3"/>
          {/* Dollar sign on top */}
          <circle cx="50" cy="35" r="6" fill={iconColor} fillOpacity="0.2"/>
          <text x="50" y="39" textAnchor="middle" fontSize="8" fill={iconColor} fontWeight="bold">$</text>
        </svg>
      );

    case 'emeklilik':
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Shield with clock */}
          <path d="M50 15 L70 25 L70 50 Q70 65 50 80 Q30 65 30 50 L30 25 Z" fill={iconColor} fillOpacity="0.1" stroke={iconColor} strokeWidth="2"/>
          {/* Clock face */}
          <circle cx="50" cy="45" r="15" fill="white" stroke={iconColor} strokeWidth="2"/>
          <circle cx="50" cy="45" r="2" fill={iconColor}/>
          {/* Clock hands */}
          <path d="M50 45 L50 35" stroke={iconColor} strokeWidth="2"/>
          <path d="M50 45 L58 45" stroke={iconColor} strokeWidth="2"/>
          {/* Hour markers */}
          <circle cx="50" cy="32" r="1" fill={iconColor}/>
          <circle cx="50" cy="58" r="1" fill={iconColor}/>
          <circle cx="37" cy="45" r="1" fill={iconColor}/>
          <circle cx="63" cy="45" r="1" fill={iconColor}/>
          {/* Piggy bank elements */}
          <circle cx="25" cy="75" r="8" fill={iconColor} fillOpacity="0.3"/>
          <rect x="23" y="73" width="4" height="2" fill={iconColor}/>
          <circle cx="75" cy="75" r="6" fill={iconColor} fillOpacity="0.3"/>
          <rect x="73" y="73" width="4" height="2" fill={iconColor}/>
        </svg>
      );

    case 'fintech':
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Smartphone */}
          <rect x="35" y="20" width="30" height="50" rx="6" fill={iconColor} fillOpacity="0.1" stroke={iconColor} strokeWidth="2"/>
          <rect x="38" y="25" width="24" height="35" fill="white" stroke={iconColor} strokeWidth="1"/>
          <circle cx="50" cy="65" r="3" fill={iconColor} fillOpacity="0.3"/>
          {/* Digital elements */}
          <rect x="40" y="30" width="8" height="2" fill={iconColor}/>
          <rect x="40" y="35" width="12" height="2" fill={iconColor}/>
          <rect x="40" y="40" width="6" height="2" fill={iconColor}/>
          {/* Credit card */}
          <rect x="15" y="45" width="20" height="12" rx="2" fill={iconColor} fillOpacity="0.2" stroke={iconColor} strokeWidth="1"/>
          <rect x="17" y="47" width="4" height="3" fill={iconColor}/>
          <rect x="17" y="52" width="16" height="1" fill={iconColor} fillOpacity="0.5"/>
          {/* Digital connections */}
          <circle cx="75" cy="35" r="4" fill={iconColor} fillOpacity="0.3"/>
          <circle cx="85" cy="45" r="3" fill={iconColor} fillOpacity="0.3"/>
          <circle cx="75" cy="55" r="3" fill={iconColor} fillOpacity="0.3"/>
          <path d="M71 35 L65 40" stroke={iconColor} strokeWidth="1" strokeDasharray="1,1"/>
          <path d="M82 45 L65 45" stroke={iconColor} strokeWidth="1" strokeDasharray="1,1"/>
          <path d="M72 55 L65 50" stroke={iconColor} strokeWidth="1" strokeDasharray="1,1"/>
          {/* WiFi symbol */}
          <path d="M45 75 Q50 70 55 75" stroke={iconColor} strokeWidth="1" fill="none"/>
          <path d="M42 78 Q50 67 58 78" stroke={iconColor} strokeWidth="1" fill="none"/>
          <circle cx="50" cy="80" r="1" fill={iconColor}/>
        </svg>
      );

    default:
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Default financial icon */}
          <circle cx="50" cy="50" r="25" fill={iconColor} fillOpacity="0.1" stroke={iconColor} strokeWidth="2"/>
          <path d="M40 40 L60 40 M40 50 L60 50 M40 60 L60 60" stroke={iconColor} strokeWidth="2"/>
          <circle cx="30" cy="30" r="3" fill={iconColor} fillOpacity="0.4"/>
          <circle cx="70" cy="30" r="3" fill={iconColor} fillOpacity="0.4"/>
          <circle cx="30" cy="70" r="3" fill={iconColor} fillOpacity="0.4"/>
          <circle cx="70" cy="70" r="3" fill={iconColor} fillOpacity="0.4"/>
        </svg>
      );
  }
}; 