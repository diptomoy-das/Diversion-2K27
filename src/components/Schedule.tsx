import React, { useState } from 'react';
import { SCHEDULE, ScheduleDay, ScheduleEvent } from '../data/hackathonData';
import { Clock, Filter } from 'lucide-react';

export default function Schedule() {
  const [activeDayIdx, setActiveDayIdx] = useState<number>(0);
  const [stageFilter, setStageFilter] = useState<string>('All');

  const stages = ['All', 'Hacking', 'Workshops', 'Food', 'Judging', 'Keynotes'];

  const currentDay = SCHEDULE[activeDayIdx];

  const filteredEvents = currentDay.events.filter((event: ScheduleEvent) => {
    if (stageFilter === 'All') return true;
    return event.stage === stageFilter;
  });

  return (
    <section id="schedule" className="section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">SCHEDULE</h2>
          <p className="section-description">
            48 hours of uninterrupted hacking, mentor check-ins, workshops, midnight gaming, and demo pitches.
          </p>
        </div>

        {/* Day Navigation Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '12px',
          marginBottom: '28px',
          flexWrap: 'wrap'
        }}>
          {SCHEDULE.map((day: ScheduleDay, idx: number) => (
            <button
              key={day.day}
              onClick={() => setActiveDayIdx(idx)}
              style={{
                padding: '10px 20px',
                borderRadius: '6px',
                border: activeDayIdx === idx ? '1px solid var(--accent-primary)' : '1px solid var(--border-subtle)',
                background: activeDayIdx === idx ? 'var(--accent-primary)' : 'var(--surface-card)',
                color: activeDayIdx === idx ? '#0B0A0F' : '#FFF',
                fontFamily: 'var(--font-display)',
                fontWeight: '900',
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                minHeight: '44px'
              }}
            >
              {day.day} <span style={{ opacity: 0.8, fontSize: '0.78rem' }}>({day.date})</span>
            </button>
          ))}
        </div>

        {/* Category Stage Filters */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          marginBottom: '40px',
          flexWrap: 'wrap'
        }}>
          <Filter size={15} color="var(--text-muted)" style={{ marginRight: '4px' }} />
          {stages.map(stage => (
            <button
              key={stage}
              onClick={() => setStageFilter(stage)}
              style={{
                padding: '8px 14px',
                borderRadius: '4px',
                background: stageFilter === stage ? 'rgba(255, 0, 127, 0.12)' : 'transparent',
                border: stageFilter === stage ? '1px solid var(--accent-primary)' : '1px solid var(--border-subtle)',
                color: stageFilter === stage ? 'var(--accent-primary)' : 'var(--text-secondary)',
                fontSize: '0.78rem',
                fontFamily: 'var(--font-mono)',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                minHeight: '36px'
              }}
            >
              {stage}
            </button>
          ))}
        </div>

        {/* Timeline Event Node Stream */}
        <div style={{
          maxWidth: '840px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          {filteredEvents.length === 0 ? (
            <div style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '40px' }}>
              No scheduled events found for this filter category.
            </div>
          ) : (
            filteredEvents.map((event: ScheduleEvent, idx: number) => (
              <div
                key={idx}
                className="glass-card schedule-event-card"
                style={{
                  padding: '20px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  borderLeft: '3px solid var(--accent-primary)'
                }}
              >
                <div style={{
                  minWidth: '100px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.88rem',
                  fontWeight: '800',
                  color: 'var(--accent-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  flexShrink: 0
                }}>
                  <Clock size={15} /> {event.time}
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px', marginBottom: '4px' }}>
                    <h4 style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.1rem',
                      fontWeight: '800',
                      color: '#FFF'
                    }}>
                      {event.title}
                    </h4>
                    <span style={{
                      padding: '2px 8px',
                      borderRadius: '4px',
                      background: 'rgba(255, 0, 127, 0.08)',
                      border: '1px solid var(--border-accent)',
                      color: 'var(--accent-primary)',
                      fontSize: '0.66rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: '700',
                      textTransform: 'uppercase'
                    }}>
                      {event.stage}
                    </span>
                  </div>

                  <p style={{
                    fontSize: '0.86rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.4
                  }}>
                    {event.description}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 576px) {
          .schedule-event-card {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 8px !important;
          }
        }
      `}</style>
    </section>
  );
}

