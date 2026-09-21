import React from 'react';
import { MENTORS, MentorItem } from '../data/hackathonData';
import { Linkedin } from 'lucide-react';

export default function Mentors() {
  return (
    <section id="mentors" className="section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">MENTORS & JUDGES</h2>
          <p className="section-description">
            Get 1-on-1 guidance, architecture reviews, and code debugging from leading tech leaders and veteran engineers.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '28px'
        }}>
          {MENTORS.map((mentor: MentorItem, idx: number) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '28px 24px',
                textAlign: 'center'
              }}
            >
              {/* Avatar Image */}
              <div style={{
                width: '96px',
                height: '96px',
                borderRadius: '16px',
                overflow: 'hidden',
                margin: '0 auto 20px auto',
                border: '1px solid var(--accent-primary)'
              }}>
                <img
                  src={mentor.avatar}
                  alt={mentor.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>

              {/* Domain Tag */}
              <span style={{
                padding: '4px 12px',
                borderRadius: '4px',
                background: 'rgba(255, 0, 127, 0.08)',
                border: '1px solid var(--border-accent)',
                color: 'var(--accent-primary)',
                fontSize: '0.72rem',
                fontFamily: 'var(--font-mono)',
                fontWeight: '700',
                display: 'inline-block',
                marginBottom: '12px'
              }}>
                {mentor.domain}
              </span>

              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.3rem',
                fontWeight: '900',
                color: '#FFF',
                marginBottom: '4px'
              }}>
                {mentor.name}
              </h3>

              <div style={{
                fontSize: '0.85rem',
                fontWeight: '700',
                color: 'var(--accent-primary)',
                marginBottom: '2px'
              }}>
                {mentor.role}
              </div>

              <div style={{
                fontSize: '0.8rem',
                color: 'var(--text-muted)',
                marginBottom: '20px'
              }}>
                {mentor.organization}
              </div>

              {/* Social Connect */}
              <div style={{
                paddingTop: '14px',
                borderTop: '1px solid rgba(255,255,255,0.06)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <a
                  href={mentor.linkedin}
                  style={{
                    color: 'var(--accent-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-mono)',
                    textDecoration: 'none',
                    fontWeight: '700'
                  }}
                >
                  <Linkedin size={14} /> LINKEDIN PROFILE
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
