import React, { useState, useEffect } from 'react';
import { Zap, Compass, Calendar, MapPin, Sparkles, Shield, Clock } from 'lucide-react';
import { EVENT_DETAILS } from '../data/hackathonData';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date(EVENT_DETAILS.targetDate).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" style={{
      paddingTop: 'clamp(115px, 14vw, 168px)',
      paddingBottom: 'clamp(48px, 8vw, 96px)',
      position: 'relative'
    }}>
      <div className="container">
        {/* 12-Column Grid with 80px Gutters */}
        <div className="grid-12">
          {/* Asymmetric Hero Content (Columns 2 to 8) */}
          <div className="hero-asymmetric-content">
            {/* Main Headline */}
            <h1 style={{
              lineHeight: 1.05,
              marginBottom: '20px',
              color: '#FFF'
            }} className="display-title">
              WHERE THE BLUEPRINTS OF <span className="accent-text-pink">IMAGINATION</span> ARE BUILT INTO <span className="accent-text-pink">REALITY.</span>
            </h1>

            {/* Editorial Subtagline */}
            <p style={{
              fontSize: 'clamp(0.96rem, 2vw, 1.15rem)',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              marginBottom: '36px'
            }}>
              {EVENT_DETAILS.subtagline}
            </p>

            {/* Date & Location Badges */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '20px',
              marginBottom: '36px',
              color: 'var(--text-secondary)',
              fontSize: '0.88rem',
              fontWeight: '600'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Calendar size={18} color="var(--accent-primary)" />
                <span>{EVENT_DETAILS.dates}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={18} color="var(--accent-primary)" />
                <span>{EVENT_DETAILS.location}</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="hero-cta-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
              <a
                href={EVENT_DETAILS.devfolioUrl}
                className="btn-gta-primary"
              >
                <Zap size={18} /> REGISTER ON DEVFOLIO
              </a>
              <a
                href="#tracks"
                className="btn-gta-secondary"
              >
                <Compass size={18} /> EXPLORE TRACKS
              </a>
            </div>
          </div>

          {/* Asymmetric Side Aside (Columns 9 to 12) */}
          <div className="hero-asymmetric-aside" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Countdown Box */}
            <div className="glass-card" style={{
              padding: '20px',
              border: '1px solid var(--border-accent)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '16px'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  fontWeight: '700',
                  color: 'var(--accent-primary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em'
                }}>
                  <Clock size={14} /> COUNTDOWN TO KICKOFF
                </div>
                <span className="status-pill" style={{ fontSize: '0.7rem', padding: '2px 8px' }}>LIVE</span>
              </div>

              {/* Timer Digits */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '6px',
                textAlign: 'center'
              }}>
                {[
                  { label: 'DAYS', value: timeLeft.days },
                  { label: 'HOURS', value: timeLeft.hours },
                  { label: 'MINS', value: timeLeft.minutes },
                  { label: 'SECS', value: timeLeft.seconds }
                ].map((item, idx) => (
                  <div key={idx} style={{
                    background: '#0B0A0F',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '6px',
                    padding: '10px 2px'
                  }}>
                    <div style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
                      fontWeight: '900',
                      color: '#FFF',
                      lineHeight: 1
                    }}>
                      {String(item.value).padStart(2, '0')}
                    </div>
                    <div style={{
                      fontSize: '0.58rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-muted)',
                      marginTop: '4px',
                      letterSpacing: '0.05em'
                    }}>
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mascot Box */}
            <div className="glass-card" style={{
              padding: '20px',
              border: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              gap: '16px'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '8px',
                background: 'var(--accent-primary)',
                color: '#0B0A0F',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.6rem',
                flexShrink: 0
              }}>
                🤖
              </div>
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--accent-primary)',
                  fontWeight: '700'
                }}>
                  <Sparkles size={13} /> OFFICIAL MASCOT
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.1rem',
                  fontWeight: '800',
                  margin: '2px 0',
                  color: '#FFF'
                }}>
                  MEET LIGO
                </h3>
                <p style={{
                  fontSize: '0.78rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.4
                }}>
                  Your AI guide across the 48-hour hackathon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 576px) {
          .hero-cta-container {
            flex-direction: column !important;
          }
          .hero-cta-container a {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
