import React from 'react';
import { PRIZES, PrizeItem, SpecialBounty } from '../data/hackathonData';
import { Trophy, Gift, CheckCircle2, Award } from 'lucide-react';

export default function Prizes() {
  return (
    <section id="prizes" className="section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">PRIZES & REWARDS</h2>
          <p className="section-description">
            Over ₹500,000+ in total rewards including non-dilutive cash prizes, cloud credits, hardware grants, and official MLH swag.
          </p>
        </div>

        {/* Overall Winners Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          marginBottom: '60px'
        }}>
          {PRIZES.overall.map((item: PrizeItem, idx: number) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '40px 28px',
                textAlign: 'center',
                borderColor: idx === 0 ? 'var(--accent-primary)' : 'var(--border-subtle)'
              }}
            >
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '12px',
                background: 'rgba(255, 0, 127, 0.08)',
                border: '1px solid var(--border-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px auto'
              }}>
                <Trophy size={28} color="var(--accent-primary)" />
              </div>

              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.82rem',
                fontWeight: '700',
                color: 'var(--accent-primary)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '8px'
              }}>
                {item.tag}
              </div>

              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.6rem',
                fontWeight: '900',
                color: '#FFF',
                marginBottom: '12px'
              }}>
                {item.rank}
              </h3>

              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2.4rem',
                fontWeight: '900',
                color: 'var(--accent-primary)',
                marginBottom: '12px'
              }}>
                {item.prize}
              </div>

              <p style={{
                fontSize: '0.88rem',
                color: 'var(--text-muted)'
              }}>
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* Special Bounties & Participant Perks Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '30px'
        }} className="prizes-subgrid">
          {/* Special Track Bounties */}
          <div className="glass-card" style={{ padding: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
              <Award size={22} color="var(--accent-primary)" />
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: '900', color: '#FFF' }}>
                SPECIAL CATEGORY BOUNTIES
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {PRIZES.specialBounties.map((bounty: SpecialBounty, idx: number) => (
                <div key={idx} style={{
                  padding: '16px',
                  borderRadius: '8px',
                  background: '#0B0A0F',
                  border: '1px solid var(--border-subtle)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ fontWeight: '800', color: '#FFF', fontSize: '0.95rem' }}>{bounty.title}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontWeight: '700', color: 'var(--accent-primary)', fontSize: '0.88rem' }}>{bounty.prize}</span>
                  </div>
                  <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>{bounty.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Perks For All Participants */}
          <div className="glass-card" style={{ padding: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
              <Gift size={22} color="var(--accent-primary)" />
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: '900', color: '#FFF' }}>
                PERKS FOR ALL HACKERS
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {PRIZES.perks.map((perk: string, idx: number) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <CheckCircle2 size={18} color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {perk}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .prizes-subgrid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
