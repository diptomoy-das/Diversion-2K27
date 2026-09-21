import React from 'react';
import { X, Trophy, CheckCircle2, Zap } from 'lucide-react';
import { TrackItem, EVENT_DETAILS } from '../data/hackathonData';

interface TrackModalProps {
  track: TrackItem | null;
  onClose: () => void;
}

export default function TrackModal({ track, onClose }: TrackModalProps) {
  if (!track) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 10000,
      background: 'rgba(8, 6, 14, 0.85)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px'
    }} onClick={onClose}>
      <div
        className="glass-card"
        style={{
          width: '100%',
          maxWidth: '680px',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '40px 32px',
          border: '1px solid var(--accent-primary)',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid var(--border-subtle)',
            color: '#FFF',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <X size={20} />
        </button>

        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.8rem',
          fontWeight: '900',
          color: '#FFF',
          lineHeight: 1.15,
          marginBottom: '12px',
          marginTop: '12px'
        }}>
          {track.title}
        </h2>

        <p style={{
          color: 'var(--text-secondary)',
          fontSize: '1rem',
          lineHeight: 1.6,
          marginBottom: '28px'
        }}>
          {track.fullDesc}
        </p>

        {/* Bounty Box */}
        <div style={{
          padding: '20px',
          borderRadius: '8px',
          background: '#0B0A0F',
          border: '1px solid var(--border-accent)',
          marginBottom: '28px',
          display: 'flex',
          alignItems: 'center',
          gap: '16px'
        }}>
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '6px',
            background: 'var(--accent-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#0B0A0F',
            flexShrink: 0
          }}>
            <Trophy size={20} />
          </div>
          <div>
            <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)', fontWeight: '700' }}>
              TRACK BOUNTY POOL
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: '900', color: '#FFF' }}>
              {track.bounties}
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              {track.sponsor}
            </div>
          </div>
        </div>

        {/* Sample Project Ideas */}
        <div style={{ marginBottom: '32px' }}>
          <h4 style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.85rem',
            color: 'var(--accent-primary)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: '16px'
          }}>
            SUGGESTED PROJECT SCOPES & IDEAS:
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {track.ideas.map((idea: string, idx: number) => (
              <div key={idx} style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
                fontSize: '0.9rem',
                color: 'var(--text-secondary)'
              }}>
                <CheckCircle2 size={16} color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>{idea}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Action */}
        <div style={{ display: 'flex', gap: '16px' }}>
          <a
            href={EVENT_DETAILS.devfolioUrl}
            className="btn-gta-primary"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            <Zap size={18} /> REGISTER FOR THIS TRACK ON DEVFOLIO
          </a>
        </div>
      </div>
    </div>
  );
}
