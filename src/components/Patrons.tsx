import React from 'react';
import { PATRONS, PatronItem } from '../data/hackathonData';

export default function Patrons() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">LEADERSHIP & PATRONS</h2>
          <p className="section-description">
            Guided by academic pioneers and IEM-ACM leadership to foster research-backed hackathon innovation.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '30px'
        }}>
          {PATRONS.map((patron: PatronItem, idx: number) => (
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
                  gap: '16px',
                  marginBottom: '20px'
                }}>
                  <img
                    src={patron.image}
                    alt={patron.name}
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '1px solid var(--accent-primary)'
                    }}
                  />
                  <div>
                    <h3 style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.25rem',
                      fontWeight: '800',
                      color: '#FFF',
                      marginBottom: '2px'
                    }}>
                      {patron.name}
                    </h3>
                    <div style={{
                      fontSize: '0.82rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--accent-primary)',
                      fontWeight: '700'
                    }}>
                      {patron.title}
                    </div>
                    <div style={{
                      fontSize: '0.78rem',
                      color: 'var(--text-muted)'
                    }}>
                      {patron.organization}
                    </div>
                  </div>
                </div>

                <blockquote style={{
                  padding: '16px',
                  borderRadius: '8px',
                  background: '#0B0A0F',
                  borderLeft: '2px solid var(--accent-primary)',
                  fontSize: '0.88rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  fontStyle: 'italic'
                }}>
                  "{patron.quote}"
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
