import React from 'react';
import { SPONSORS, TitlePartner, PartnerItem } from '../data/hackathonData';
import { Sparkles } from 'lucide-react';

export default function Sponsors() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">SPONSORS & PARTNERS</h2>
          <p className="section-description">
            Backing global student developers with bounties, infrastructure, and fast-track opportunities.
          </p>
        </div>

        {/* Title Partners */}
        <div style={{ marginBottom: '48px' }}>
          <h3 style={{
            fontSize: '1rem',
            fontFamily: 'var(--font-mono)',
            fontWeight: '700',
            color: 'var(--accent-primary)',
            marginBottom: '20px',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            TITLE & SANCTIONING PARTNERS
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px'
          }}>
            {SPONSORS.viceTier.map((partner: TitlePartner, idx: number) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '36px',
                  textAlign: 'center',
                  border: '1px solid var(--accent-primary)'
                }}
              >
                <div style={{
                  padding: '4px 12px',
                  borderRadius: '4px',
                  background: 'var(--accent-primary)',
                  color: '#0B0A0F',
                  fontFamily: 'var(--font-display)',
                  fontWeight: '900',
                  fontSize: '0.78rem',
                  display: 'inline-block',
                  marginBottom: '16px'
                }}>
                  {partner.badge}
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2.2rem',
                  fontWeight: '900',
                  color: '#FFF',
                  marginBottom: '6px'
                }}>
                  {partner.name}
                </h3>

                <p style={{
                  fontSize: '0.88rem',
                  color: 'var(--text-muted)',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: '700'
                }}>
                  {partner.role}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Gold Partners */}
        <div style={{ marginBottom: '48px' }}>
          <h3 style={{
            fontSize: '1rem',
            fontFamily: 'var(--font-mono)',
            fontWeight: '700',
            color: 'var(--text-secondary)',
            marginBottom: '20px',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            GOLD PARTNERS
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '20px'
          }}>
            {SPONSORS.sunsettier.map((partner: PartnerItem, idx: number) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '24px 20px',
                  textAlign: 'center'
                }}
              >
                <h4 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.3rem',
                  fontWeight: '800',
                  color: '#FFF',
                  marginBottom: '4px'
                }}>
                  {partner.name}
                </h4>
                <div style={{
                  fontSize: '0.78rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-muted)'
                }}>
                  {partner.role}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Silver Partners */}
        <div style={{ marginBottom: '48px' }}>
          <h3 style={{
            fontSize: '1rem',
            fontFamily: 'var(--font-mono)',
            fontWeight: '700',
            color: 'var(--text-muted)',
            marginBottom: '20px',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            SILVER PARTNERS
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '16px'
          }}>
            {SPONSORS.cyberTier.map((partner: PartnerItem, idx: number) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '20px 16px',
                  textAlign: 'center'
                }}
              >
                <h5 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.15rem',
                  fontWeight: '800',
                  color: '#FFF',
                  marginBottom: '2px'
                }}>
                  {partner.name}
                </h5>
                <div style={{
                  fontSize: '0.72rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-muted)'
                }}>
                  {partner.role}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Community Partners Cloud */}
        <div className="glass-card" style={{ padding: '32px', textAlign: 'center' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            fontSize: '0.85rem',
            fontFamily: 'var(--font-mono)',
            color: 'var(--accent-primary)',
            fontWeight: '700',
            marginBottom: '12px'
          }}>
            <Sparkles size={16} /> 30+ COMMUNITY & STUDENT CHAPTER PARTNERS
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', maxWidth: '600px', margin: '0 auto' }}>
            Diversion 2K27 unites developer communities across 21+ Indian cities including IEEE, ACM, GDSC, and Tech Guilds nationwide.
          </p>
        </div>
      </div>
    </section>
  );
}
