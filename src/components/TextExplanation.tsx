// TextExplanation.tsx
import React from 'react';


interface TextExplanationProps {
title?: string;
text?: string;
trendTitle?: string;
}


const TextExplanation: React.FC<TextExplanationProps> = ({ title, text, trendTitle }) => {
return (
<div className="dashboard-card">
{title && <h2 className="dashboard-title">{title}</h2>}
{text && <p className="text-gray-700 mb-2">{text}</p>}
{trendTitle && <h3 className="dashboard-subtitle">{trendTitle}</h3>}
</div>
);
};


export default TextExplanation;