import React from 'react';
import { PILLARS, PillarItem } from '../data/hackathonData';
import { Zap, Trophy, Rocket } from 'lucide-react';

export default function ArenaPillars() {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Zap size={24} color="var(--accent-primary)" />;
      case 1: return <Trophy size={24} color="var(--accent-primary)" />;
      default: return <Rocket size={24} color="var(--accent-primary)" />;
    }
  };

  return (
    <section id="pillars" className="section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">WHAT TO EXPECT</h2>
          <p className="section-description">
            Designed for fast iteration, high-stakes bounties, and direct venture elevation.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '30px'
        }}>
          {PILLARS.map((pillar: PillarItem, idx: number) => (
            <div
              key={pillar.number}
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
                  marginBottom: '24px'
                }}>
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '1.8rem',
                    fontWeight: '900',
                    color: 'var(--accent-primary)'
                  }}>
                    {pillar.number}
                  </div>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '8px',
                    background: 'rgba(255, 0, 127, 0.08)',
                    border: '1px solid var(--border-accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {getIcon(idx)}
                  </div>
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.6rem',
                  fontWeight: '900',
                  color: '#FFF',
                  letterSpacing: '0.02em',
                  marginBottom: '6px'
                }}>
                  {pillar.title}
                </h3>

                <div style={{
                  fontSize: '0.85rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--accent-primary)',
                  fontWeight: '700',
                  marginBottom: '16px',
                  textTransform: 'uppercase'
                }}>
                  {pillar.tagline}
                </div>

                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.96rem',
                  lineHeight: 1.6
                }}>
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
