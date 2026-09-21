import React from 'react';
import { PAST_CHAPTERS, ChapterItem } from '../data/hackathonData';
import { Layers } from 'lucide-react';

export default function PastChapters() {
  return (
    <section id="chapters" className="section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">PAST EDITIONS</h2>
          <p className="section-description">
            Trace the evolution of Diversion from a local hackathon into West Bengal's flagship MLH event.
          </p>
        </div>

        {/* Horizontal Card Scroll Container */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
          gap: '24px'
        }}>
          {PAST_CHAPTERS.map((chapter: ChapterItem) => (
            <div
              key={chapter.year}
              className="glass-card"
              style={{
                padding: '32px 24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderColor: chapter.isCurrent ? 'var(--accent-primary)' : 'var(--border-subtle)'
              }}
            >
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '20px'
                }}>
                  <span style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '2rem',
                    fontWeight: '900',
                    color: '#FFF',
                    letterSpacing: '-0.02em'
                  }}>
                    {chapter.year}
                  </span>

                  {chapter.isCurrent ? (
                    <span className="status-pill" style={{ fontSize: '0.72rem' }}>
                      NOW LIVE
                    </span>
                  ) : (
                    <span style={{
                      padding: '4px 12px',
                      borderRadius: '4px',
                      background: 'rgba(255,255,255,0.05)',
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-muted)'
                    }}>
                      ARCHIVED
                    </span>
                  )}
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.35rem',
                  fontWeight: '800',
                  color: chapter.isCurrent ? 'var(--accent-primary)' : '#FFF',
                  marginBottom: '8px'
                }}>
                  {chapter.title}
                </h3>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  fontWeight: '700',
                  color: 'var(--accent-primary)',
                  marginBottom: '16px'
                }}>
                  <Layers size={14} /> {chapter.hackers}
                </div>

                <p style={{
                  fontSize: '0.88rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.5,
                  marginBottom: '20px'
                }}>
                  {chapter.highlight}
                </p>
              </div>

              <div style={{
                paddingTop: '16px',
                borderTop: '1px solid rgba(255,255,255,0.06)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '0.78rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-muted)'
              }}>
                <span>SUBMISSIONS:</span>
                <span style={{ color: '#FFF', fontWeight: '700' }}>{chapter.projects}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
