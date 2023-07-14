import React, { useEffect, useRef } from 'react';

const DonutChart = ({ segments }: { segments: any[] }) => {
  const radius = 15.91549430918954;
  const circumference = 2 * Math.PI * radius;

  const segmentsRef: any = useRef([]);

  useEffect(() => {
    let cumulativeValues = 0;
    const maxStrokeWidth = 7;
    const minStrokeWidth = 4;

    const segmentValues = segments?.map(segment => segment.value);
    const maxSegmentValue = Math.max(...segmentValues);
    const minSegmentValue = Math.min(...segmentValues);

    segments?.forEach((segment, i) => {
      const segmentEl: any = segmentsRef.current[i];

      const adjustedValue = (segment.value / 100) * circumference;
      const dasharray = `${adjustedValue} ${circumference}`;
      segmentEl?.setAttribute('stroke-dasharray', dasharray);

      const dashoffset = -cumulativeValues;
      segmentEl?.setAttribute('stroke-dashoffset', dashoffset);

      const strokeWidth = ((segment.value - minSegmentValue) / (maxSegmentValue - minSegmentValue) * (maxStrokeWidth - minStrokeWidth)) + minStrokeWidth;
      segmentEl?.setAttribute('stroke-width', strokeWidth);

      segmentEl?.setAttribute('stroke', segment.color);

      cumulativeValues += adjustedValue;
    });
  }, [segments]);

  return (
    <div className="w-[224px] h-[224px] pt-[10px] flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42">
        {segments?.map((segment, i) => (
          <circle
            key={i}
            ref={el => segmentsRef.current[i] = el}
            cx="21"
            cy="21"
            r={radius}
            fill="transparent"
          />
        ))}
      </svg>
    </div>
  );
}

export default DonutChart;
