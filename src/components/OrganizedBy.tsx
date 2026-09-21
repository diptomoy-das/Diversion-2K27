import React from 'react';
import { ShieldCheck, Award, Users, MapPin, ExternalLink, Sparkles } from 'lucide-react';

export default function OrganizedBy() {
  const organizers = [
    {
      name: "IEM-ACM Student Chapter",
      role: "Lead Host & Organizer",
      badge: "ACM STUDENT CHAPTER",
      description: "Premier student developer community of IEM Kolkata, driving open-source culture, hackathons, and technical excellence across India.",
      stat: "5,000+ Hackers Built",
      icon: <Award size={24} color="var(--accent-primary)" />
    },
    {
      name: "Institute of Engineering & Management",
      role: "Venue & Academic Partner",
      badge: "IEM GURUKUL CAMPUS",
      description: "West Bengal's top private engineering & management institution, providing state-of-the-art campus infrastructure and innovation labs.",
      stat: "Salt Lake, Sector V",
      icon: <MapPin size={24} color="var(--accent-primary)" />
    },
    {
      name: "Major League Hacking",
      role: "Global Sanctioning Body",
      badge: "MLH SANCTIONED 2027",
      description: "The official student hackathon league, upholding global competition standards, mentor support, and hacker safety.",
      stat: "Official MLH Flagship",
      icon: <ShieldCheck size={24} color="var(--accent-primary)" />
    }
  ];

  return (
    <section id="organized-by" className="section-padding" style={{ background: '#0B0A0F', position: 'relative' }}>
      <div className="container">
        <h2 className="section-title">ORGANIZED BY</h2>
        <p className="section-description">
          Diversion 2K27 is conceptualized, engineered, and executed by student leaders from the IEM-ACM Student Chapter at IEM Gurukul Campus.
        </p>
      </div>

      {/* Organizers Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '28px'
      }}>
        {organizers.map((org, idx) => (
          <div
            key={idx}
            className="glass-card"
            style={{
              padding: '36px 28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              borderColor: idx === 0 ? 'var(--accent-primary)' : 'var(--border-subtle)'
            }}
          >
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '20px'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '8px',
                  background: 'rgba(255, 0, 127, 0.08)',
                  border: '1px solid var(--border-accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {org.icon}
                </div>
                <span style={{
                  padding: '4px 10px',
                  borderRadius: '4px',
                  background: idx === 0 ? 'var(--accent-primary)' : 'rgba(255, 255, 255, 0.05)',
                  color: idx === 0 ? '#0B0A0F' : 'var(--text-muted)',
                  fontSize: '0.7rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: '900',
                  letterSpacing: '0.05em'
                }}>
                  {org.badge}
                </span>
              </div>

              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.4rem',
                fontWeight: '900',
                color: '#FFF',
                marginBottom: '6px',
                lineHeight: 1.2
              }}>
                {org.name}
              </h3>

              <div style={{
                fontSize: '0.82rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--accent-primary)',
                fontWeight: '700',
                marginBottom: '14px'
              }}>
                {org.role}
              </div>

              <p style={{
                color: 'var(--text-secondary)',
                fontSize: '0.9rem',
                lineHeight: 1.55
              }}>
                {org.description}
              </p>
            </div>

            <div style={{
              marginTop: '24px',
              paddingTop: '16px',
              borderTop: '1px solid rgba(255,255,255,0.06)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '0.8rem',
              fontFamily: 'var(--font-mono)',
              color: 'var(--text-muted)'
            }}>
              <span>KEY HIGHLIGHT:</span>
              <span style={{ color: '#FFF', fontWeight: '700' }}>{org.stat}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section >
  );
}
