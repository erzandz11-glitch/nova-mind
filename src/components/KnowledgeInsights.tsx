/**
 * NOVA MIND — KnowledgeInsights Component
 * D3-based real-time line chart visualizing user learning velocity:
 * Daily minutes synced vs. course completion growth.
 */

import React, { useEffect, useRef, useState, useMemo } from 'react';
import * as d3 from 'd3';
import {
  Activity,
  TrendingUp,
  Clock,
  Sparkles,
  Zap,
  Radio,
  BarChart3,
  Calendar,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { soundEngine } from '../lib/audio';

export interface VelocityDataPoint {
  date: Date;
  label: string;
  minutesSynced: number;
  completionRate: number; // percentage 0 - 100
}

interface KnowledgeInsightsProps {
  className?: string;
}

export const KnowledgeInsights: React.FC<KnowledgeInsightsProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const [timeRange, setTimeRange] = useState<'7D' | '14D' | '30D'>('14D');
  const [isLiveTelemetry, setIsLiveTelemetry] = useState<boolean>(true);
  const [hoveredData, setHoveredData] = useState<VelocityDataPoint | null>(null);

  // Generate synthetic yet realistic historical baseline data
  const baseHistoricalData = useMemo(() => {
    const points: VelocityDataPoint[] = [];
    const now = new Date();
    const daysCount = 30;

    // Progression curves: fluctuating minutes with compounding completion
    const minutesProfile = [
      42, 58, 65, 80, 45, 95, 110, 85, 92, 120, 105, 130, 90, 115, 140, 
      125, 135, 110, 148, 130, 160, 145, 120, 155, 168, 140, 175, 160, 185, 192
    ];

    let currentCompletion = 12.0;

    for (let i = daysCount - 1; i >= 0; i--) {
      const d = new Date(now);
      d.setDate(d.getDate() - i);
      const dayIndex = daysCount - 1 - i;
      const mins = minutesProfile[dayIndex] || Math.floor(60 + Math.random() * 80);
      
      // Completion grows faster when minutes are higher
      currentCompletion = Math.min(100, currentCompletion + (mins / 75));

      points.push({
        date: d,
        label: d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        minutesSynced: mins,
        completionRate: parseFloat(currentCompletion.toFixed(1)),
      });
    }

    return points;
  }, []);

  const [dataset, setDataset] = useState<VelocityDataPoint[]>(baseHistoricalData);

  // Filter based on active time range
  const filteredData = useMemo(() => {
    const sliceCount = timeRange === '7D' ? 7 : timeRange === '14D' ? 14 : 30;
    return dataset.slice(-sliceCount);
  }, [dataset, timeRange]);

  // Real-time telemetry simulation: increments current day's synced minutes every few seconds
  useEffect(() => {
    if (!isLiveTelemetry) return;

    const interval = setInterval(() => {
      setDataset((prev) => {
        const next = [...prev];
        const lastIdx = next.length - 1;
        const last = next[lastIdx];
        if (!last) return prev;

        // Subtle realistic increment
        const increment = Math.floor(1 + Math.random() * 2);
        const nextMins = last.minutesSynced + increment;
        const nextCompletion = Math.min(100, parseFloat((last.completionRate + 0.05).toFixed(2)));

        next[lastIdx] = {
          ...last,
          minutesSynced: nextMins,
          completionRate: nextCompletion,
        };

        return next;
      });
    }, 3500);

    return () => clearInterval(interval);
  }, [isLiveTelemetry]);

  // D3 Chart Rendering Logic
  useEffect(() => {
    if (!svgRef.current || !containerRef.current || filteredData.length === 0) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const containerWidth = containerRef.current.clientWidth || 800;
    const height = 320;
    const margin = { top: 28, right: 54, bottom: 36, left: 52 };
    const width = containerWidth;
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    svg.attr('viewBox', `0 0 ${width} ${height}`);

    // Create defs for high-tech cyber gradients and glow filters
    const defs = svg.append('defs');

    // Electric Cyan Area Gradient (Minutes)
    const cyanGradient = defs.append('linearGradient')
      .attr('id', 'cyanAreaGradient')
      .attr('x1', '0%')
      .attr('y1', '0%')
      .attr('x2', '0%')
      .attr('y2', '100%');

    cyanGradient.append('stop')
      .attr('offset', '0%')
      .attr('stop-color', '#06b6d4')
      .attr('stop-opacity', 0.28);

    cyanGradient.append('stop')
      .attr('offset', '100%')
      .attr('stop-color', '#06b6d4')
      .attr('stop-opacity', 0.0);

    // Deep Indigo Area Gradient (Completion)
    const indigoGradient = defs.append('linearGradient')
      .attr('id', 'indigoAreaGradient')
      .attr('x1', '0%')
      .attr('y1', '0%')
      .attr('x2', '0%')
      .attr('y2', '100%');

    indigoGradient.append('stop')
      .attr('offset', '0%')
      .attr('stop-color', '#6366f1')
      .attr('stop-opacity', 0.22);

    indigoGradient.append('stop')
      .attr('offset', '100%')
      .attr('stop-color', '#6366f1')
      .attr('stop-opacity', 0.0);

    // Glow Filter for lines
    const filter = defs.append('filter')
      .attr('id', 'cyberGlow')
      .attr('x', '-20%')
      .attr('y', '-20%')
      .attr('width', '140%')
      .attr('height', '140%');

    filter.append('feGaussianBlur')
      .attr('stdDeviation', '3')
      .attr('result', 'coloredBlur');

    const feMerge = filter.append('feMerge');
    feMerge.append('feMergeNode').attr('in', 'coloredBlur');
    feMerge.append('feMergeNode').attr('in', 'SourceGraphic');

    const g = svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // X Scale: Date
    const xScale = d3.scaleTime()
      .domain(d3.extent(filteredData, (d) => d.date) as [Date, Date])
      .range([0, innerWidth]);

    // Left Y Scale: Daily Minutes Synced
    const maxMinutes = d3.max(filteredData, (d) => d.minutesSynced) || 200;
    const yMinutesScale = d3.scaleLinear()
      .domain([0, Math.ceil(maxMinutes * 1.15)])
      .range([innerHeight, 0])
      .nice();

    // Right Y Scale: Course Completion Rate (%)
    const yCompletionScale = d3.scaleLinear()
      .domain([0, 100])
      .range([innerHeight, 0]);

    // Horizontal Grid Lines (subtle obsidian dashed)
    const yGrid = d3.axisLeft(yMinutesScale)
      .tickSize(-innerWidth)
      .tickFormat(() => '')
      .ticks(5);

    g.append('g')
      .attr('class', 'grid')
      .call(yGrid)
      .call((grid) => grid.select('.domain').remove())
      .call((grid) => grid.selectAll('.tick line')
        .attr('stroke', 'rgba(255, 255, 255, 0.05)')
        .attr('stroke-dasharray', '3,3')
      );

    // X Axis
    const xAxis = d3.axisBottom(xScale)
      .ticks(timeRange === '7D' ? 7 : timeRange === '14D' ? 7 : 8)
      .tickFormat((d) => d3.timeFormat('%b %d')(d as Date));

    g.append('g')
      .attr('transform', `translate(0,${innerHeight})`)
      .call(xAxis)
      .call((axis) => axis.select('.domain').attr('stroke', '#27272a'))
      .call((axis) => axis.selectAll('.tick line').attr('stroke', '#27272a'))
      .call((axis) => axis.selectAll('.tick text')
        .attr('fill', '#71717a')
        .attr('font-size', '11px')
        .attr('font-family', 'JetBrains Mono, monospace')
        .attr('dy', '10px')
      );

    // Left Y Axis (Minutes Synced in Cyan)
    const yMinutesAxis = d3.axisLeft(yMinutesScale)
      .ticks(5)
      .tickFormat((d) => `${d}m`);

    g.append('g')
      .call(yMinutesAxis)
      .call((axis) => axis.select('.domain').remove())
      .call((axis) => axis.selectAll('.tick line').remove())
      .call((axis) => axis.selectAll('.tick text')
        .attr('fill', '#22d3ee')
        .attr('font-size', '10px')
        .attr('font-family', 'JetBrains Mono, monospace')
        .attr('dx', '-6px')
      );

    // Right Y Axis (Completion Rate % in Indigo)
    const yCompletionAxis = d3.axisRight(yCompletionScale)
      .ticks(5)
      .tickFormat((d) => `${d}%`);

    g.append('g')
      .attr('transform', `translate(${innerWidth}, 0)`)
      .call(yCompletionAxis)
      .call((axis) => axis.select('.domain').remove())
      .call((axis) => axis.selectAll('.tick line').remove())
      .call((axis) => axis.selectAll('.tick text')
        .attr('fill', '#818cf8')
        .attr('font-size', '10px')
        .attr('font-family', 'JetBrains Mono, monospace')
        .attr('dx', '6px')
      );

    // Generator: Minutes Area & Line
    const minutesArea = d3.area<VelocityDataPoint>()
      .x((d) => xScale(d.date))
      .y0(innerHeight)
      .y1((d) => yMinutesScale(d.minutesSynced))
      .curve(d3.curveMonotoneX);

    const minutesLine = d3.line<VelocityDataPoint>()
      .x((d) => xScale(d.date))
      .y((d) => yMinutesScale(d.minutesSynced))
      .curve(d3.curveMonotoneX);

    // Generator: Completion Line & Area
    const completionArea = d3.area<VelocityDataPoint>()
      .x((d) => xScale(d.date))
      .y0(innerHeight)
      .y1((d) => yCompletionScale(d.completionRate))
      .curve(d3.curveMonotoneX);

    const completionLine = d3.line<VelocityDataPoint>()
      .x((d) => xScale(d.date))
      .y((d) => yCompletionScale(d.completionRate))
      .curve(d3.curveMonotoneX);

    // Render Area Fills
    g.append('path')
      .datum(filteredData)
      .attr('fill', 'url(#indigoAreaGradient)')
      .attr('d', completionArea);

    g.append('path')
      .datum(filteredData)
      .attr('fill', 'url(#cyanAreaGradient)')
      .attr('d', minutesArea);

    // Render Completion Line (Indigo, dashed trajectory)
    g.append('path')
      .datum(filteredData)
      .attr('fill', 'none')
      .attr('stroke', '#6366f1')
      .attr('stroke-width', 2.2)
      .attr('stroke-dasharray', '4,3')
      .attr('d', completionLine);

    // Render Minutes Synced Line (Electric Cyan, Glowing)
    g.append('path')
      .datum(filteredData)
      .attr('fill', 'none')
      .attr('stroke', '#06b6d4')
      .attr('stroke-width', 2.8)
      .attr('filter', 'url(#cyberGlow)')
      .attr('d', minutesLine);

    // Render Terminal Data Points for current active day
    const latest = filteredData[filteredData.length - 1];
    if (latest) {
      // Cyan Pulse Circle
      const latestX = xScale(latest.date);
      const latestYMin = yMinutesScale(latest.minutesSynced);
      const latestYComp = yCompletionScale(latest.completionRate);

      g.append('circle')
        .attr('cx', latestX)
        .attr('cy', latestYMin)
        .attr('r', 5)
        .attr('fill', '#22d3ee')
        .attr('stroke', '#083344')
        .attr('stroke-width', 2);

      g.append('circle')
        .attr('cx', latestX)
        .attr('cy', latestYComp)
        .attr('r', 4.5)
        .attr('fill', '#a5b4fc')
        .attr('stroke', '#1e1b4b')
        .attr('stroke-width', 2);
    }

    // Interactive Hover Overlay & Crosshair
    const crosshair = g.append('g')
      .attr('class', 'crosshair')
      .style('display', 'none');

    const verticalLine = crosshair.append('line')
      .attr('y1', 0)
      .attr('y2', innerHeight)
      .attr('stroke', 'rgba(6, 182, 212, 0.45)')
      .attr('stroke-width', 1.2)
      .attr('stroke-dasharray', '2,2');

    const focusCyanDot = crosshair.append('circle')
      .attr('r', 5.5)
      .attr('fill', '#06b6d4')
      .attr('stroke', '#ffffff')
      .attr('stroke-width', 1.5)
      .attr('filter', 'url(#cyberGlow)');

    const focusIndigoDot = crosshair.append('circle')
      .attr('r', 5)
      .attr('fill', '#6366f1')
      .attr('stroke', '#ffffff')
      .attr('stroke-width', 1.5);

    // Mouse Tracking Bisector
    const bisectDate = d3.bisector<VelocityDataPoint, Date>((d) => d.date).center;

    // Invisible mouse overlay rect
    svg.append('rect')
      .attr('transform', `translate(${margin.left},${margin.top})`)
      .attr('width', innerWidth)
      .attr('height', innerHeight)
      .attr('fill', 'transparent')
      .attr('cursor', 'crosshair')
      .on('mouseenter', () => crosshair.style('display', null))
      .on('mouseleave', () => {
        crosshair.style('display', 'none');
        setHoveredData(null);
      })
      .on('mousemove', (event) => {
        const [mouseX] = d3.pointer(event);
        const x0 = xScale.invert(mouseX);
        const index = bisectDate(filteredData, x0);
        const d = filteredData[index];

        if (d) {
          const xPos = xScale(d.date);
          const yMinPos = yMinutesScale(d.minutesSynced);
          const yCompPos = yCompletionScale(d.completionRate);

          verticalLine.attr('x1', xPos).attr('x2', xPos);
          focusCyanDot.attr('cx', xPos).attr('cy', yMinPos);
          focusIndigoDot.attr('cx', xPos).attr('cy', yCompPos);

          setHoveredData(d);
        }
      });

  }, [filteredData, timeRange]);

  // Compute key summary velocity metrics
  const metrics = useMemo(() => {
    if (!filteredData.length) {
      return { peakMinutes: 0, avgMinutes: 0, completionGrowth: 0, velocityIndex: '1.0x' };
    }

    const peakMinutes = Math.max(...filteredData.map((d) => d.minutesSynced));
    const totalMinutes = filteredData.reduce((acc, d) => acc + d.minutesSynced, 0);
    const avgMinutes = Math.round(totalMinutes / filteredData.length);

    const firstCompletion = filteredData[0]?.completionRate || 0;
    const lastCompletion = filteredData[filteredData.length - 1]?.completionRate || 0;
    const completionGrowth = parseFloat((lastCompletion - firstCompletion).toFixed(1));

    const velocityIndex = (avgMinutes / 60).toFixed(1);

    return {
      peakMinutes,
      avgMinutes,
      completionGrowth,
      velocityIndex: `${velocityIndex}x`,
    };
  }, [filteredData]);

  const activeFocus = hoveredData || filteredData[filteredData.length - 1];

  return (
    <div
      ref={containerRef}
      className={`relative p-6 sm:p-8 rounded-3xl bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 shadow-[0_0_50px_rgba(0,0,0,0.6)] space-y-6 ${className}`}
    >
      {/* Top Header: Title, Telemetry Pulse, & Range Switchers */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-800/80">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              <Activity className="w-4 h-4" />
            </span>
            <span className="text-xs font-mono text-cyan-400 uppercase font-semibold tracking-wider">
              Cognitive Velocity Matrix
            </span>
            <span className="flex items-center gap-1.5 text-[10px] font-mono px-2 py-0.5 rounded-full bg-zinc-950 border border-zinc-800 text-zinc-400">
              <span className={`w-1.5 h-1.5 rounded-full ${isLiveTelemetry ? 'bg-emerald-400 animate-pulse' : 'bg-zinc-600'}`} />
              {isLiveTelemetry ? 'Real-Time Stream Active' : 'Static Snapshot'}
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white mt-1">
            Learning Velocity &amp; Completion Dynamics
          </h2>
          <p className="text-xs text-zinc-400 mt-0.5">
            D3-powered telemetry mapping daily deep-study minutes against cumulative masterclass completion.
          </p>
        </div>

        {/* Action Controls: Live Toggle & Time Range Pills */}
        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={() => {
              soundEngine.playClick();
              setIsLiveTelemetry(!isLiveTelemetry);
            }}
            className={`px-3 py-1.5 text-xs font-mono rounded-xl border transition-all cursor-pointer flex items-center gap-1.5 ${
              isLiveTelemetry
                ? 'bg-cyan-950/40 text-cyan-300 border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                : 'bg-zinc-950 text-zinc-500 border-zinc-850 hover:text-zinc-300'
            }`}
            title="Toggle live telemetry simulation"
          >
            <Radio className={`w-3.5 h-3.5 ${isLiveTelemetry ? 'text-cyan-400 animate-pulse' : 'text-zinc-600'}`} />
            <span>{isLiveTelemetry ? 'Live Stream: ON' : 'Live Stream: PAUSED'}</span>
          </button>

          {/* Time Range Selector */}
          <div className="flex items-center p-1 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-mono">
            {(['7D', '14D', '30D'] as const).map((range) => (
              <button
                key={range}
                onClick={() => {
                  soundEngine.playClick();
                  setTimeRange(range);
                }}
                className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                  timeRange === range
                    ? 'bg-zinc-800 text-cyan-300 font-bold shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {range}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Summary KPI Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        
        {/* KPI 1 */}
        <div className="p-3.5 sm:p-4 rounded-2xl bg-zinc-950/60 border border-zinc-850">
          <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 mb-1">
            <span>PEAK VELOCITY</span>
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="font-mono text-xl sm:text-2xl font-extrabold text-white tabular-nums">
              {metrics.peakMinutes}
            </span>
            <span className="text-xs font-mono text-cyan-400">min/day</span>
          </div>
          <div className="text-[10px] text-zinc-500 mt-1">High-focus sovereign surge</div>
        </div>

        {/* KPI 2 */}
        <div className="p-3.5 sm:p-4 rounded-2xl bg-zinc-950/60 border border-zinc-850">
          <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 mb-1">
            <span>DAILY AVERAGE</span>
            <Clock className="w-3.5 h-3.5 text-indigo-400" />
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="font-mono text-xl sm:text-2xl font-extrabold text-white tabular-nums">
              {metrics.avgMinutes}
            </span>
            <span className="text-xs font-mono text-indigo-300">min/day</span>
          </div>
          <div className="text-[10px] text-zinc-500 mt-1">Consistent baseline study</div>
        </div>

        {/* KPI 3 */}
        <div className="p-3.5 sm:p-4 rounded-2xl bg-zinc-950/60 border border-zinc-850">
          <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 mb-1">
            <span>NODE SURGE GAIN</span>
            <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="font-mono text-xl sm:text-2xl font-extrabold text-emerald-400 tabular-nums">
              +{metrics.completionGrowth}%
            </span>
            <span className="text-xs font-mono text-zinc-400">in {timeRange}</span>
          </div>
          <div className="text-[10px] text-zinc-500 mt-1">Accelerated mastery delta</div>
        </div>

        {/* KPI 4 */}
        <div className="p-3.5 sm:p-4 rounded-2xl bg-zinc-950/60 border border-zinc-850">
          <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 mb-1">
            <span>VELOCITY COEFF.</span>
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="font-mono text-xl sm:text-2xl font-extrabold text-cyan-300 tabular-nums">
              {metrics.velocityIndex}
            </span>
            <span className="text-xs font-mono text-zinc-400">Multiplier</span>
          </div>
          <div className="text-[10px] text-zinc-500 mt-1">Output per nominal hour</div>
        </div>

      </div>

      {/* Main D3 Chart Canvas Area */}
      <div className="relative rounded-2xl bg-zinc-950/90 border border-zinc-850 p-4 sm:p-6 overflow-hidden">
        
        {/* Legend and Active Point HUD */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 text-xs font-mono">
          {/* Chart Series Legend */}
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <span className="w-3 h-1 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
              <span className="text-zinc-300">Daily Minutes Synced (Left Axis)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-0.5 rounded-full border-t border-dashed border-indigo-400" />
              <span className="text-zinc-400">Course Completion % (Right Axis)</span>
            </div>
          </div>

          {/* Real-time Dynamic Value Inspector */}
          {activeFocus && (
            <div className="flex items-center gap-3 px-3 py-1 rounded-xl bg-zinc-900 border border-zinc-800 text-[11px]">
              <span className="text-zinc-500">{activeFocus.label}:</span>
              <span className="text-cyan-300 font-semibold tabular-nums">
                {activeFocus.minutesSynced} min
              </span>
              <span className="text-zinc-600">·</span>
              <span className="text-indigo-300 font-semibold tabular-nums">
                {activeFocus.completionRate}% Done
              </span>
            </div>
          )}
        </div>

        {/* SVG Container rendered by D3 */}
        <div className="w-full overflow-x-auto scrollbar-none">
          <svg
            ref={svgRef}
            className="w-full h-80 block select-none"
            style={{ minWidth: '480px' }}
          />
        </div>

        {/* Chart Footnote / Invariant Statement */}
        <div className="mt-4 pt-3 border-t border-zinc-900 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] font-mono text-zinc-500">
          <span>SOURCE: Decentralized Session Invariants &amp; Client Video Scrubber Log</span>
          <span className="text-cyan-400/90 flex items-center gap-1">
            <ArrowUpRight className="w-3 h-3" />
            <span>Optimal Sovereign Trajectory: Tier 3 Mastery in 14 Days</span>
          </span>
        </div>
      </div>
    </div>
  );
};
