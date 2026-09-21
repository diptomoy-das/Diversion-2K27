import React from 'react';
import { STATS, StatItem } from '../data/hackathonData';
import { Users, Flame, Trophy, Handshake, ShieldCheck, Cpu } from 'lucide-react';

export default function StatsGrid() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users': return <Users size={22} color="var(--accent-primary)" />;
      case 'Flame': return <Flame size={22} color="var(--accent-primary)" />;
      case 'Trophy': return <Trophy size={22} color="var(--accent-primary)" />;
      case 'Handshake': return <Handshake size={22} color="var(--accent-primary)" />;
      case 'ShieldCheck': return <ShieldCheck size={22} color="var(--accent-primary)" />;
      default: return <Cpu size={22} color="var(--accent-primary)" />;
    }
  };

  return (
    <section className="section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">DIVERSION IN NUMBERS</h2>
          <p className="section-description">
            Building upon years of explosive growth to deliver West Bengal's largest developer congregation.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px'
        }}>
          {STATS.map((stat: StatItem, idx: number) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '32px 24px',
                textAlign: 'center'
              }}
            >
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '8px',
                background: 'rgba(255, 0, 127, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px auto',
                border: '1px solid var(--border-accent)'
              }}>
                {getIcon(stat.icon)}
              </div>

              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2.4rem',
                fontWeight: '900',
                lineHeight: 1,
                marginBottom: '8px',
                color: 'var(--accent-primary)'
              }}>
                {stat.value}
              </div>

              <div style={{
                fontSize: '1rem',
                fontWeight: '800',
                color: '#FFF',
                marginBottom: '4px'
              }}>
                {stat.label}
              </div>

              <div style={{
                fontSize: '0.8rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-muted)'
              }}>
                {stat.subtitle}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
