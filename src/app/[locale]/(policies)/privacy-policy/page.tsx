import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { PolicyHero } from '@/features/policies/ui/policy-hero';
import { PolicyList } from '@/features/policies/ui/policy-list';
import { PolicyMain } from '@/features/policies/ui/policy-main';
import { PolicySection } from '@/features/policies/ui/policy-section';
import { PolicyText } from '@/features/policies/ui/policy-text';

export const metadata: Metadata = {
  title: 'Privacy Policy | Renvex',
  openGraph: {
    title: 'Privacy Policy | Renvex',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Renvex',
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default async function PrivacyPolicy() {
  const t = await getTranslations('privacyPolicy');

  return (
    <>
      <PolicyHero title={t('title', { fallback: 'Privacy Policy' })} />
      <PolicyMain>
        <PolicyText>
          {t('0', {
            fallback:
              'Welcome to Renvex. Your privacy and the protection of your personal data are fundamental to how we operate. This Privacy Policy explains how we collect, use, and safeguard your information when you interact with our Website.',
          })}
        </PolicyText>
        <PolicySection
          title={t('1.0', { fallback: 'Our Role as a Data Processor' })}
        >
          <PolicyText>
            {t('1.1', {
              fallback:
                "Renvex acts as a data processor for personal data collected through our Website. This means we handle our clients' information in accordance with applicable data protection laws.",
            })}
          </PolicyText>
        </PolicySection>
        <PolicySection title={t('2.0', { fallback: 'Company Information' })}>
          <PolicyText>
            {t('2.1', {
              fallback:
                'Renvex is responsible for managing personal data under this Privacy Policy and in line with applicable data agreements.',
            })}
          </PolicyText>
        </PolicySection>
        <PolicySection
          title={t('3.0', { fallback: 'Our Commitments to Data Protection' })}
        >
          <PolicyText>
            {t('3.1', {
              fallback:
                'We adhere to the following principles when processing personal information:',
            })}
          </PolicyText>
          <br />
          <PolicyList
            values={[
              <span key="processing-under-direction">
                <span className="font-bold">
                  {t('3.2', { fallback: 'Processing Under Direction' })}
                </span>{' '}
                –{' '}
                {t('3.3', {
                  fallback:
                    'Data is handled strictly according to client instructions and within agreed legal frameworks.',
                })}
              </span>,
              <span key="data-security">
                <span className="font-bold">
                  {t('3.4', { fallback: 'Data Security' })}
                </span>{' '}
                –{' '}
                {t('3.5', {
                  fallback:
                    'We maintain technical and organizational safeguards to protect against unauthorized access, loss, or alteration.',
                })}
              </span>,
              <span key="data-subject-rights">
                <span className="font-bold">
                  {t('3.6', { fallback: 'Data Subject Rights' })}
                </span>{' '}
                –{' '}
                {t('3.7', {
                  fallback:
                    'We support requests related to access, correction, or deletion of personal data in compliance with privacy regulations.',
                })}
              </span>,
            ]}
          />
        </PolicySection>
        <PolicySection
          title={t('4.0', { fallback: 'Third-Party Service Partners' })}
        >
          <PolicyText>
            {t('4.1', {
              fallback:
                'To support our operations, Renvex may engage vetted third-party providers under strict contractual obligations. These partners are required to maintain confidentiality and apply equivalent levels of data protection.',
            })}
          </PolicyText>
        </PolicySection>
        <PolicySection
          title={t('5.0', { fallback: 'Data Processing Agreements' })}
        >
          <PolicyText>
            {t('5.1', {
              fallback:
                'All processing activities are governed by formal Data Processing Agreements (DPAs) that define how personal data is handled, stored, and protected according to relevant laws and industry standards.',
            })}
          </PolicyText>
        </PolicySection>
        <PolicySection title={t('6.0', { fallback: 'Data We Collect' })}>
          <PolicyText>
            {t('6.1', {
              fallback: 'When using the Renvex Website, we may collect:',
            })}
          </PolicyText>
          <PolicyList
            values={[
              <span key="personal-information">
                <span className="font-bold">
                  {t('6.2', { fallback: 'Personal Information' })}
                </span>{' '}
                –{' '}
                {t('6.3', {
                  fallback:
                    'such as your name, email address, phone number, or details provided via contact forms.',
                })}
              </span>,
              <span key="technical-information">
                <span className="font-bold">
                  {t('6.4', { fallback: 'Technical Information' })}
                </span>{' '}
                –{' '}
                {t('6.5', {
                  fallback:
                    'including browser type, IP address, device identifiers, and general location data to enhance performance and usability.',
                })}
              </span>,
            ]}
          />
        </PolicySection>
        <PolicySection title={t('7.0', { fallback: 'How We Use Your Data' })}>
          <PolicyText>
            {t('7.1', {
              fallback: 'We process the collected data to:',
            })}
          </PolicyText>
          <PolicyList
            values={[
              <span key="respond-to-inquiries">
                <span className="font-bold">
                  {t('7.2', { fallback: 'Respond to Inquiries' })}
                </span>{' '}
                –{' '}
                {t('7.3', {
                  fallback:
                    'Provide customer support and respond to service-related questions.',
                })}
              </span>,
              <span key="improve-performance">
                <span className="font-bold">
                  {t('7.4', { fallback: 'Improve Performance' })}
                </span>
                –{' '}
                {t('7.5', {
                  fallback:
                    'Analyze usage trends and optimize the Website experience.',
                })}
              </span>,
              <span key="ensure-security-compliance">
                <span className="font-bold">
                  {t('7.6', { fallback: 'Ensure Security & Compliance' })}
                </span>{' '}
                –{' '}
                {t('7.7', {
                  fallback:
                    'Detect and prevent unauthorized activity or potential threats.',
                })}
              </span>,
            ]}
          />
        </PolicySection>
        <PolicySection
          title={t('8.0', { fallback: 'Sharing of Personal Data' })}
        >
          <PolicyText>
            {t('8.1', {
              fallback:
                'Renvex does not sell or rent personal information. However, data may be shared in limited cases with:',
            })}
          </PolicyText>
          <PolicyList
            values={[
              <span key="authorized-service-providers">
                <span className="font-bold">
                  {t('8.2', { fallback: 'Authorized Service Providers' })}
                </span>{' '}
                –{' '}
                {t('8.3', {
                  fallback:
                    'Trusted third parties that assist in operations, bound by confidentiality agreements.',
                })}
              </span>,
              <span key="legal-or-regulatory-bodies">
                <span className="font-bold">
                  {t('8.4', { fallback: 'Legal or Regulatory Bodies' })}
                </span>{' '}
                –{' '}
                {t('8.5', {
                  fallback:
                    'When disclosure is required by law or necessary to protect the rights and safety of Renvex or its users.',
                })}
              </span>,
            ]}
          />
        </PolicySection>
        <PolicySection
          title={t('9.0', { fallback: 'Protection of Your Data' })}
        >
          <PolicyText>
            {t('9.1', {
              fallback:
                'Renvex uses advanced technical and organizational measures to protect your personal information from unauthorized access, alteration, or misuse. These include encryption, restricted access protocols, and continuous system monitoring.',
            })}
            <br />
            <br />
            {t('9.2', {
              fallback:
                'While we maintain industry-level safeguards, no online system can guarantee absolute security. We encourage users to take precautions when submitting sensitive data online.',
            })}
          </PolicyText>
        </PolicySection>
        <PolicySection title={t('10.0', { fallback: 'Your Data Rights' })}>
          <PolicyText>
            {t('10.1', {
              fallback:
                'Depending on applicable data protection laws, you may have the right to:',
            })}
          </PolicyText>
          <br />
          <PolicyList
            values={[
              <span key="access">
                <span className="font-bold">
                  {t('10.2', { fallback: 'Access' })}
                </span>{' '}
                –{' '}
                {t('10.3', {
                  fallback:
                    'Obtain a copy of the personal data held about you.',
                })}
              </span>,
              <span key="correction">
                <span className="font-bold">
                  {t('10.4', { fallback: 'Correction' })}
                </span>{' '}
                –{' '}
                {t('10.5', {
                  fallback:
                    'Request rectification of inaccurate or incomplete information.',
                })}
              </span>,
              <span key="deletion">
                <span className="font-bold">
                  {t('10.6', { fallback: 'Deletion' })}
                </span>{' '}
                –{' '}
                {t('10.7', {
                  fallback:
                    'Request removal of your personal data, subject to legal or contractual retention obligations.',
                })}
              </span>,
              <span key="objection">
                <span className="font-bold">
                  {t('10.8', { fallback: 'Objection' })}
                </span>{' '}
                –{' '}
                {t('10.9', {
                  fallback:
                    'Restrict or object to specific data processing activities.',
                })}
              </span>,
            ]}
          />
        </PolicySection>
        <PolicySection
          title={t('11.0', { fallback: 'Updates to This Policy' })}
        >
          <PolicyText>
            {t('11.1', {
              fallback:
                'Renvex may update this Privacy Policy from time to time to reflect changes in legal, operational, or regulatory requirements. Revised versions will be published on our Website with an updated effective date.',
            })}
            <br />
            <br />
            {t('11.2', {
              fallback:
                'Continued use of the Website after changes are posted constitutes acceptance of the revised Policy.',
            })}
          </PolicyText>
        </PolicySection>
      </PolicyMain>
    </>
  );
}
