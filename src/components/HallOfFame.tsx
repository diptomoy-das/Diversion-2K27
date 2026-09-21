import React from 'react';
import { HALL_OF_FAME, HallOfFameItem } from '../data/hackathonData';
import { Trophy } from 'lucide-react';

export default function HallOfFame() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">SPOTLIGHT WINNER STORIES</h2>
          <p className="section-description">
            From 48-hour hackathon prototypes to funded tech ventures. Meet the champions of previous Diversion editions.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '30px'
        }}>
          {HALL_OF_FAME.map((story: HallOfFameItem, idx: number) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '36px 28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '16px'
                }}>
                  <span style={{
                    padding: '4px 10px',
                    borderRadius: '4px',
                    background: 'rgba(255, 0, 127, 0.1)',
                    border: '1px solid var(--border-accent)',
                    color: 'var(--accent-primary)',
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: '700'
                  }}>
                    <Trophy size={12} style={{ display: 'inline', marginRight: '4px' }} />
                    {story.edition}
                  </span>

                  <span style={{
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-muted)'
                  }}>
                    {story.track}
                  </span>
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.5rem',
                  fontWeight: '900',
                  color: '#FFF',
                  marginBottom: '12px'
                }}>
                  {story.teamName}
                </h3>

                <p style={{
                  fontSize: '0.92rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  marginBottom: '24px'
                }}>
                  {story.description}
                </p>

                <blockquote style={{
                  padding: '16px',
                  borderRadius: '8px',
                  background: '#0B0A0F',
                  borderLeft: '2px solid var(--accent-primary)',
                  fontSize: '0.85rem',
                  fontStyle: 'italic',
                  color: 'var(--text-secondary)',
                  marginBottom: '20px'
                }}>
                  "{story.quote}"
                </blockquote>
              </div>

              <div style={{
                paddingTop: '16px',
                borderTop: '1px solid rgba(255,255,255,0.06)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '0.8rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-muted)'
              }}>
                <span>TEAM:</span>
                <span style={{ color: '#FFF', fontWeight: '600' }}>
                  {story.members.join(', ')}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
