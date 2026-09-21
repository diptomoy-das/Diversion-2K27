import React, { useState } from 'react';
import { FAQS, FaqItem, EVENT_DETAILS } from '../data/hackathonData';
import { Plus, Minus, Shield } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">FREQUENTLY ASKED QUESTIONS</h2>
          <p className="section-description">
            Everything you need to know about registrations, team sizes, venue amenities, and MLH compliance.
          </p>
        </div>

        {/* Accordion FAQ Grid */}
        <div style={{
          maxWidth: '840px',
          margin: '0 auto 60px auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          {FAQS.map((faq: FaqItem, idx: number) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  border: isOpen ? '1px solid var(--accent-primary)' : '1px solid var(--border-subtle)',
                  background: isOpen ? 'rgba(255, 0, 127, 0.04)' : 'var(--surface-card)',
                  transition: 'all 0.25s ease'
                }}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  style={{
                    width: '100%',
                    padding: '24px 28px',
                    background: 'transparent',
                    border: 'none',
                    color: '#FFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  <span style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.15rem',
                    fontWeight: '800'
                  }}>
                    {faq.question}
                  </span>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: isOpen ? 'var(--accent-primary)' : 'rgba(255,255,255,0.06)',
                    color: isOpen ? '#0B0A0F' : '#FFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    transition: 'all 0.25s ease'
                  }}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                {isOpen && (
                  <div style={{
                    padding: '0 28px 24px 28px',
                    color: 'var(--text-secondary)',
                    fontSize: '0.95rem',
                    lineHeight: 1.6,
                    borderTop: '1px solid rgba(255,255,255,0.04)',
                    paddingTop: '16px'
                  }}>
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* MLH Code of Conduct Compliance Banner */}
        <div className="glass-card" style={{
          maxWidth: '840px',
          margin: '0 auto',
          padding: '32px',
          border: '1px solid var(--border-accent)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
          flexWrap: 'wrap'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{
              width: '46px',
              height: '46px',
              borderRadius: '8px',
              background: 'var(--accent-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#0B0A0F',
              flexShrink: 0
            }}>
              <Shield size={24} />
            </div>
            <div>
              <h4 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.2rem',
                fontWeight: '800',
                color: '#FFF',
                marginBottom: '4px'
              }}>
                MLH CODE OF CONDUCT COMPLIANT
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                We enforce a harassment-free hackathon experience for everyone.
              </p>
            </div>
          </div>

          <a
            href={EVENT_DETAILS.mlhCodeOfConduct}
            className="btn-gta-secondary"
            style={{ padding: '12px 20px', fontSize: '0.82rem' }}
          >
            READ MLH CODE OF CONDUCT
          </a>
        </div>
      </div>
    </section>
  );
}
