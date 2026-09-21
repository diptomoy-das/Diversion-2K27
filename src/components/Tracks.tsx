import React, { useState } from 'react';
import { TRACKS, TrackItem } from '../data/hackathonData';
import { Cpu, ShieldCheck, Globe, Server, HeartHandshake, ArrowRight } from 'lucide-react';
import TrackModal from './TrackModal';

export default function Tracks() {
  const [selectedTrack, setSelectedTrack] = useState<TrackItem | null>(null);

  const getTrackIcon = (id: string) => {
    switch(id) {
      case 'ai-agents': return <Cpu size={24} color="var(--accent-primary)" />;
      case 'web3': return <ShieldCheck size={24} color="var(--accent-primary)" />;
      case 'fullstack': return <Globe size={24} color="var(--accent-primary)" />;
      case 'cloud-devops': return <Server size={24} color="var(--accent-primary)" />;
      default: return <HeartHandshake size={24} color="var(--accent-primary)" />;
    }
  };

  return (
    <section id="tracks" className="section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">HACKATHON TRACKS</h2>
          <p className="section-description">
            Choose your challenge area. Click any track card to inspect technical requirements, sponsor bounties, and project scopes.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '28px'
        }}>
          {TRACKS.map((track: TrackItem) => (
            <div
              key={track.id}
              className="glass-card"
              onClick={() => setSelectedTrack(track)}
              style={{
                padding: '36px 28px',
                cursor: 'pointer',
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
                  marginBottom: '20px'
                }}>
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
                    {getTrackIcon(track.id)}
                  </div>
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.45rem',
                  fontWeight: '900',
                  color: '#FFF',
                  marginBottom: '10px',
                  lineHeight: 1.2
                }}>
                  {track.title}
                </h3>

                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.92rem',
                  lineHeight: 1.6,
                  marginBottom: '24px'
                }}>
                  {track.shortDesc}
                </p>
              </div>

              <div>
                <div style={{
                  padding: '12px 16px',
                  borderRadius: '6px',
                  background: '#0B0A0F',
                  border: '1px solid var(--border-subtle)',
                  marginBottom: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                    BOUNTY POOL:
                  </span>
                  <span style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)', fontWeight: '700' }}>
                    {track.bounties.split('+')[0]}
                  </span>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  color: 'var(--accent-primary)',
                  fontWeight: '700',
                  fontSize: '0.85rem',
                  fontFamily: 'var(--font-mono)'
                }}>
                  <span>VIEW DETAILS & IDEAS</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Render Track Detail Modal */}
      <TrackModal track={selectedTrack} onClose={() => setSelectedTrack(null)} />
    </section>
  );
}
