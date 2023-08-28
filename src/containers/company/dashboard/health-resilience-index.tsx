import React from 'react';

function CircularProgressBar({ value, colors }: any) {
  const radius = 16.91549430918954;
  const circumference = 2 * Math.PI * radius;

  const fillPercent = value; // This value can be anything from 0 to 100
  const filledStroke = (fillPercent / 100) * circumference;
  const emptyStroke = circumference - filledStroke;

  // change the fill color based on the value, if it is it is less than 25 it is green, between 25 and 50 it is yellow, and above 50 it is red
  let fillColor = '';
  if (value > 50) {
    fillColor = '#E0F4E7';
  } else if (value >= 25 && value <= 50) {
    fillColor = '#FFF2D8';
  } else {
    fillColor = '#FDE7EE';
  }

  let strokeColor = '';
  if (value > 50) {
    strokeColor = '#42C76F ';
  } else if (value >= 25 && value <= 50) {
    strokeColor = '#FFB92E';
  } else {
    strokeColor = '#FE3E51';
  }


  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 42 42">
      <circle cx="21" cy="21" r={radius} fill={fillColor} />
      <circle
        cx="21"
        cy="21"
        r={radius - 1}
        fill="transparent"
        stroke={strokeColor}
        strokeWidth="3"
        strokeDasharray={`${filledStroke} ${emptyStroke}`}
        strokeDashoffset={31} // To start at the top
        strokeLinecap='round'
      />
      <text x="50%" y="45%" textAnchor="middle" fill="black" dy=".3em" fontSize="6" fontWeight='bold'>{value}%</text>
      <text x="50%" y="60%" textAnchor="middle" fill="black" dy=".3em" fontSize="2.5" letterSpacing={0.1} color='#5D5574'>Health & Resilience</text>
      <text x="50%" y="70%" textAnchor="middle" fill="black" dy=".3em" fontSize="2.5" letterSpacing={0.1} color='#5D5574'>Index</text>
    </svg>
  );
}

export default CircularProgressBar;
