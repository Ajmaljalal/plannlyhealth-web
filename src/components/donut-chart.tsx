import React, { useEffect, useRef } from 'react';

const DonutChart = ({ segments }: { segments: any[] }) => {
  const radius = 15.91549430918954;
  const circumference = 2 * Math.PI * radius;

  const segmentsRef: any = useRef([]);

  useEffect(() => {
    let cumulativeValues = 0;
    const maxStrokeWidth = 7;
    const minStrokeWidth = 4;

    const totalSegmentValues = segments?.reduce((sum, segment) => sum + segment.value, 0);
    const maxSegmentValue = Math.max(...segments.map(segment => segment.value));
    const minSegmentValue = Math.min(...segments.map(segment => segment.value));

    segments?.forEach((segment, i) => {
      const segmentEl: any = segmentsRef.current[i];

      const normalizedValue = (segment.value / totalSegmentValues) * circumference;
      const dasharray = `${normalizedValue} ${circumference}`;
      segmentEl?.setAttribute('stroke-dasharray', dasharray);

      const dashoffset = -cumulativeValues;
      segmentEl?.setAttribute('stroke-dashoffset', dashoffset);

      const strokeWidth = ((segment.value - minSegmentValue) / (maxSegmentValue - minSegmentValue) * (maxStrokeWidth - minStrokeWidth)) + minStrokeWidth;
      segmentEl?.setAttribute('stroke-width', strokeWidth);

      segmentEl?.setAttribute('stroke', segment.color);

      cumulativeValues += normalizedValue;
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
