import React, { useState, useEffect } from 'react';
import { Menu, X, Zap, ChevronRight, Calendar, Sparkles } from 'lucide-react';
import { EVENT_DETAILS } from '../data/hackathonData';

export default function Header() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#pillars' },
    { name: 'Past Editions', href: '#chapters' },
    { name: 'Tracks', href: '#tracks' },
    { name: 'Prizes', href: '#prizes' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Mentors', href: '#mentors' },
    { name: 'FAQ', href: '#faq' }
  ];

  return (
    <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 999 }}>
      {/* Ticker Banner */}
      <div className="header-ticker" style={{
        background: '#120F1A',
        borderBottom: '1px solid rgba(255, 0, 127, 0.2)',
        padding: '6px 0',
        fontSize: '0.76rem',
        fontWeight: '700',
        fontFamily: 'var(--font-mono)',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        color: 'var(--accent-primary)',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div style={{ display: 'inline-flex', animation: 'neonTicker 28s linear infinite', gap: '30px' }}>
          <span>🎡 DIVERSION 2K27 • REGISTRATION IS LIVE ON DEVFOLIO</span>
          <span>⚡ WEST BENGAL'S FLAGSHIP MLH HACKATHON</span>
          <span>🔥 FEB 28 - MAR 1 AT IEM GURUKUL CAMPUS</span>
          <span>🚀 INDIA'S 1ST AI-POWERED HACKATHON</span>
          <span>🎡 DIVERSION 2K27 • REGISTRATION IS LIVE ON DEVFOLIO</span>
          <span>⚡ WEST BENGAL'S FLAGSHIP MLH HACKATHON</span>
        </div>
      </div>

      {/* Main Glass Navbar */}
      <nav style={{
        background: scrolled ? 'rgba(11, 10, 15, 0.96)' : 'rgba(18, 15, 26, 0.88)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--border-subtle)',
        transition: 'all 0.3s ease'
      }}>
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: scrolled ? '64px' : '72px',
          transition: 'height 0.3s ease'
        }}>
          {/* Logo */}
          <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '6px',
              background: 'var(--accent-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '900',
              fontSize: '1.25rem',
              color: '#0B0A0F',
              flexShrink: 0
            }}>
              D
            </div>
            <div>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontWeight: '900',
                fontSize: '1.25rem',
                letterSpacing: '-0.02em',
                lineHeight: 1,
                color: '#FFF'
              }}>
                DIVERSION <span style={{ color: 'var(--accent-primary)' }}>2K27</span>
              </div>
              <div className="header-logo-subtext" style={{
                fontSize: '0.62rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-muted)',
                letterSpacing: '0.05em',
                marginTop: '2px'
              }}>
                BY IEM-ACM STUDENT CHAPTER
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="desktop-links" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontSize: '0.82rem',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  transition: 'color 0.2s ease',
                  padding: '6px 4px',
                  whiteSpace: 'nowrap'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a
              href={EVENT_DETAILS.devfolioUrl}
              className="btn-gta-primary header-cta-btn"
              style={{ padding: '8px 16px', fontSize: '0.8rem', whiteSpace: 'nowrap' }}
            >
              <Zap size={14} /> <span className="btn-text">REGISTER NOW</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-toggle-btn"
              aria-label="Toggle navigation menu"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid var(--border-subtle)',
                color: '#FFF',
                padding: '8px',
                borderRadius: '6px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {mobileMenuOpen ? <X size={22} color="var(--accent-primary)" /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Full Screen / Slide Dropdown Overlay */}
        {mobileMenuOpen && (
          <div style={{
            position: 'fixed',
            top: scrolled ? '64px' : '72px',
            left: 0,
            right: 0,
            bottom: 0,
            height: 'calc(100vh - 64px)',
            background: 'rgba(11, 10, 15, 0.98)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            borderTop: '1px solid var(--border-subtle)',
            padding: '24px 20px 40px 20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            overflowY: 'auto',
            zIndex: 1000
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{
                fontSize: '0.7rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-muted)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '12px',
                paddingBottom: '8px',
                borderBottom: '1px solid var(--border-subtle)'
              }}>
                NAVIGATION MENU
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    color: '#FFF',
                    textDecoration: 'none',
                    fontSize: '1.05rem',
                    fontWeight: '800',
                    textTransform: 'uppercase',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 14px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <span>{link.name}</span>
                  <ChevronRight size={18} color="var(--accent-primary)" />
                </a>
              ))}
            </div>

            <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <a
                href={EVENT_DETAILS.devfolioUrl}
                className="btn-gta-primary"
                onClick={() => setMobileMenuOpen(false)}
                style={{ width: '100%', justifyContent: 'center', padding: '14px', fontSize: '0.92rem' }}
              >
                <Zap size={16} /> APPLY WITH DEVFOLIO
              </a>
              <div style={{
                textAlign: 'center',
                fontSize: '0.72rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-muted)'
              }}>
                FEB 28 - MAR 1, 2027 • IEM GURUKUL CAMPUS
              </div>
            </div>
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 1100px) {
          .desktop-links {
            display: none !important;
          }
        }
        @media (min-width: 1101px) {
          .mobile-toggle-btn {
            display: none !important;
          }
        }
        @media (max-width: 576px) {
          .header-logo-subtext {
            display: none !important;
          }
          .header-cta-btn .btn-text {
            display: inline;
          }
          .header-cta-btn {
            padding: 8px 12px !important;
            font-size: 0.75rem !important;
          }
        }
      `}</style>
    </header>
  );
}

