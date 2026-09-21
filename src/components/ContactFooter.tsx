import React from 'react';
import { EVENT_DETAILS } from '../data/hackathonData';
import { MessageSquare, Mail, Phone, MapPin, Heart } from 'lucide-react';

export default function ContactFooter() {
  return (
    <footer style={{
      background: 'var(--bg-dark-primary)',
      borderTop: '1px solid var(--border-subtle)',
      paddingTop: '80px',
      paddingBottom: '40px'
    }}>
      <div className="container">
        {/* Discord & Community Callout */}
        <div className="glass-card" style={{
          padding: '40px',
          marginBottom: '60px',
          border: '1px solid var(--accent-primary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '30px',
          flexWrap: 'wrap'
        }}>
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '4px 12px',
              borderRadius: '4px',
              background: 'rgba(255, 0, 127, 0.1)',
              color: 'var(--accent-primary)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              fontWeight: '700',
              marginBottom: '12px'
            }}>
              <MessageSquare size={14} /> 5,000+ DISCORD HACKERS
            </div>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.8rem',
              fontWeight: '900',
              color: '#FFF',
              marginBottom: '8px'
            }}>
              JOIN OUR DISCORD COMMUNITY
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '560px' }}>
              Find teammates, get live mentor support, ask organizers questions, and participate in mini-games!
            </p>
          </div>

          <a
            href={EVENT_DETAILS.discordUrl}
            className="btn-gta-primary"
          >
            <MessageSquare size={16} /> JOIN OFFICIAL DISCORD SERVER
          </a>
        </div>

        {/* Footer Info Columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '40px',
          marginBottom: '60px'
        }}>
          {/* Brand Info */}
          <div>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.5rem',
              fontWeight: '900',
              marginBottom: '12px',
              color: '#FFF'
            }}>
              DIVERSION <span style={{ color: 'var(--accent-primary)' }}>2K27</span>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '20px' }}>
              West Bengal's premier MLH hackathon organized by the IEM-ACM Student Chapter at IEM Gurukul Campus, Kolkata.
            </p>
            <div style={{
              fontSize: '0.78rem',
              fontFamily: 'var(--font-mono)',
              color: 'var(--accent-primary)'
            }}>
              #BuildYourAdventure #Diversion2K27
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
              color: 'var(--accent-primary)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '16px'
            }}>
              NAVIGATION
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['Home', 'Past Editions', 'Tracks', 'Prizes', 'Schedule', 'Mentors', 'FAQ'].map((item, idx) => (
                <a
                  key={idx}
                  href={`#${item.toLowerCase().split(' ')[0]}`}
                  style={{
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    fontSize: '0.88rem',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-primary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Venue & Location */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
              color: 'var(--accent-primary)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '16px'
            }}>
              VENUE LOCATION
            </h4>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '12px' }}>
              <MapPin size={16} color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span>IEM Gurukul Campus, Y-12, Block EP, Sector V, Salt Lake, Kolkata, West Bengal 700091</span>
            </div>
          </div>

          {/* Support Hotline */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
              color: 'var(--accent-primary)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '16px'
            }}>
              CONTACT ORGANIZERS
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
                <Mail size={15} color="var(--accent-primary)" />
                <span>diversion@iem.edu.in</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
                <Phone size={15} color="var(--accent-primary)" />
                <span>+91 98300 00000 / +91 98311 11111</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div style={{
          paddingTop: '24px',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
          fontSize: '0.8rem',
          color: 'var(--text-muted)',
          fontFamily: 'var(--font-mono)'
        }}>
          <div>
            © 2K27 DIVERSION. CRAFTED WITH <Heart size={12} color="var(--accent-primary)" style={{ display: 'inline', margin: '0 2px' }} /> BY IEM-ACM TECH TEAM.
          </div>
          <div>
            MAJOR LEAGUE HACKING SANCTIONED HACKATHON
          </div>
        </div>
      </div>
    </footer>
  );
}
