import type { Metadata } from 'next';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

import { PolicyHero } from '@/features/policies/ui/policy-hero';
import { PolicyList } from '@/features/policies/ui/policy-list';
import { PolicyMain } from '@/features/policies/ui/policy-main';
import { PolicySection } from '@/features/policies/ui/policy-section';
import { PolicyText } from '@/features/policies/ui/policy-text';

export const metadata: Metadata = {
  title: 'Terms of Use | Renvex',
  openGraph: {
    title: 'Terms of Use | Renvex',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Use | Renvex',
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default async function TermsOfUse() {
  const t = await getTranslations('termsOfUse');

  return (
    <>
      <PolicyHero title={t('title', { fallback: 'Terms of Use' })} />
      <PolicyMain>
        <PolicyText>
          {t('0.0', {
            fallback:
              'These Terms of Use (“Terms”) govern the use of the Renvex website. By accessing or using this Website, you agree to comply with these Terms. Please read them carefully.',
          })}
        </PolicyText>
        <PolicySection
          title={t('1.0', { fallback: 'Coverage and Applicability' })}
        >
          <PolicyText>
            {t('1.1.0', {
              fallback:
                'These Terms govern your access to and use of the Renvex website and its related tools, services, and content available at',
            })}{' '}
            <Link href="https://renvex.es/" className="underline">
              https://renvex.es/
            </Link>{' '}
            {t('1.1.1', {
              fallback:
                '(“Website”). They outline the rights and obligations between Renvex (“we,” “us,” or “our”) and you as the user.',
            })}
          </PolicyText>
        </PolicySection>
        {/* <PolicySection title={t('2.0', { fallback: 'Company Information' })}>
          <PolicyText>
            {t('2.1', {
              fallback:
                'The Website is operated by Renvex, a registered private company. For questions, assistance, or collaboration inquiries, please contact us at [Insert: official email].',
            })}
          </PolicyText>
        </PolicySection> */}
        <PolicySection title={t('3.0', { fallback: 'Agreement to the Terms' })}>
          <PolicyText>
            {t('3.1.0', {
              fallback:
                'By using the Website or its services, you confirm that you have read, understood, and accepted these Terms and any referenced documents. If you disagree, you must stop using the Website.',
            })}
          </PolicyText>
          <PolicyText>
            {t('3.1.1', {
              fallback:
                'You are responsible for ensuring compliance by anyone accessing the Website via your connection.',
            })}
          </PolicyText>
          <PolicyText>
            {t('3.1.2', {
              fallback: 'To use the Website, you must:',
            })}
          </PolicyText>
          <PolicyList
            values={[
              t('3.1.3', { fallback: 'Be at least 18 years old.' }),
              t('3.1.4', {
                fallback:
                  'Not have previously violated these Terms or any applicable laws.',
              }),
            ]}
          />
        </PolicySection>
        <PolicySection title={t('4.0', { fallback: 'Related Policies' })}>
          <PolicyText>
            {t('4.1', {
              fallback: 'Your use of the Website is also subject to:',
            })}
            <br />
            <br />
          </PolicyText>
          <PolicyList
            values={[
              <span key="privacy-policy">
                <span className="font-bold">
                  {t('4.2.0', { fallback: 'Privacy Policy' })}
                </span>{' '}
                –{' '}
                {t('4.2.1', {
                  fallback:
                    'explains how Renvex collects and manages your data.',
                })}
              </span>,
              <span key="cookie-policy">
                <span className="font-bold">
                  {t('4.2.2', { fallback: 'Cookie Policy' })}
                </span>{' '}
                –{' '}
                {t('4.2.3', {
                  fallback:
                    'outlines how cookies are used to enhance experience.',
                })}
              </span>,
              <span key="acceptable-use-policy">
                <span className="font-bold">
                  {t('4.2.4', { fallback: 'Acceptable Use Policy' })}
                </span>{' '}
                –{' '}
                {t('4.2.5', {
                  fallback: 'details permitted and prohibited activities.',
                })}
              </span>,
            ]}
          />
          <br />
          <PolicyText>
            {t('4.3', {
              fallback: 'All referenced policies form part of this agreement.',
            })}
          </PolicyText>
        </PolicySection>
        <PolicySection title={t('5.0', { fallback: 'Changes to These Terms' })}>
          <PolicyText>
            {t('5.1', {
              fallback:
                'Renvex reserves the right to modify or update these Terms of Use at any time. Updated versions will be published on the Website with the revised effective date. All changes become effective upon posting.',
            })}
            <br /> <br />
            {t('5.2', {
              fallback:
                'We encourage users to review these Terms periodically. If you do not agree with any updates, you must stop using the Website immediately.',
            })}
          </PolicyText>
        </PolicySection>
        <PolicySection
          title={t('6.title', {
            fallback: 'Website Updates and Modifications',
          })}
        >
          <PolicyText>
            {t('6.0', {
              fallback:
                'Renvex may modify or expand the Website and its content to reflect operational, business, or regulatory needs. While we aim to maintain a seamless experience, we do not guarantee continuous or error-free access.',
            })}
            <br /> <br />
            {t('6.1', {
              fallback:
                'We may restrict or suspend access to certain parts of the Website for maintenance or other operational reasons. Where possible, advance notice will be provided. Renvex is not liable for any temporary or permanent unavailability of the Website.',
            })}
          </PolicyText>
        </PolicySection>
        <PolicySection title={t('7.0', { fallback: 'Assignment of Rights' })}>
          <PolicyText>
            {t('7.1', {
              fallback:
                'Renvex may transfer its rights and obligations under these Terms to another entity. If this occurs, users will be notified, and their rights will remain unaffected.',
            })}
            <br />
            <br />
            {t('7.2', {
              fallback:
                'You may not assign or transfer any of your rights or obligations under these Terms without prior written consent.',
            })}
          </PolicyText>
        </PolicySection>
        <PolicySection
          title={t('8.0', { fallback: 'Authorized Use of Website Content' })}
        >
          <PolicyText>
            {t('8.1', {
              fallback:
                'All intellectual property on the Website — including data, materials, software, algorithms, and design — is owned or licensed by Renvex and protected by copyright and intellectual property laws.',
            })}
            <br />
            <br />
          </PolicyText>
          <PolicyText>
            {t('8.2', {
              fallback:
                'You are granted a limited, non-transferable, personal license to view and download Website content for personal, non-commercial use, provided you comply with these Terms.',
            })}
            <br />
            <br />
          </PolicyText>
          <PolicyText className="font-bold">
            {t('8.3', { fallback: 'You may not:' })}
          </PolicyText>
          <PolicyList
            values={[
              t('8.4', {
                fallback: 'Copy, distribute, sell, or modify Website content.',
              }),
              t('8.5', {
                fallback:
                  'Use Website materials for commercial, educational, or promotional purposes without authorization.',
              }),
              t('8.6', {
                fallback: 'Embed or frame Website content within another site.',
              }),
              t('8.7', {
                fallback:
                  'Separate media (images, videos, graphics) from accompanying text.',
              }),
            ]}
          />
          <br />
          <PolicyText>
            {t('8.8', {
              fallback:
                'Any unauthorized use revokes your license and may require removal or destruction of misused materials.',
            })}
          </PolicyText>
        </PolicySection>
        <PolicySection
          title={t('9.title', {
            fallback: 'Restriction on Automated Data Collection',
          })}
        >
          <PolicyText>
            {t('9.0', {
              fallback:
                'Automated data extraction, including text mining, scraping, or the use of bots, spiders, or similar tools, is strictly prohibited. This restriction constitutes an explicit reservation of rights under Article 4(3) of the Digital Copyright Directive (EU 2019/790).',
            })}
            <br />
            <br />
            {t('9.1', {
              fallback:
                'These limitations do not apply where prohibited by applicable law.',
            })}
          </PolicyText>
        </PolicySection>
        <PolicySection title={t('10.0', { fallback: 'No Advisory Services' })}>
          <PolicyText>
            {t('10.1', {
              fallback:
                'All data, materials, and tools on the Renvex Website are provided for informational purposes only. Renvex does not offer investment, legal, tax, or financial advice and does not endorse any specific broker or financial product.',
            })}
            <br />
            <br />
          </PolicyText>
          <PolicyText>
            {t('10.2', {
              fallback:
                'Users are solely responsible for evaluating risks and should seek professional advice before making trading or investment decisions.',
            })}
            <br />
            <br />
          </PolicyText>
          <PolicyText>
            {t('10.3', {
              fallback:
                'While Renvex strives for accuracy and reliability, we do not guarantee that all content is complete, up to date, or error-free.',
            })}
          </PolicyText>
        </PolicySection>
        <PolicySection
          title={t('11.0', { fallback: 'Limitation of Liability' })}
        >
          <PolicyText>
            {t('11.1', { fallback: 'For Individual Users' })}
          </PolicyText>
          <PolicyText>
            {t('11.2', {
              fallback:
                'The Website is intended for personal, non-commercial use. Renvex is not liable for any:',
            })}
          </PolicyText>
          <PolicyList
            values={[
              t('11.3', { fallback: 'Loss of profits, income, or savings;' }),
              t('11.4', { fallback: 'Missed business opportunities;' }),
              t('11.5', { fallback: 'Indirect or consequential damages.' }),
            ]}
          />
          <br />
          <PolicyText>
            {t('11.6', { fallback: 'For Business Users' })}
          </PolicyText>
          <PolicyText>
            {t('11.7', { fallback: 'Renvex is not liable for:' })}
          </PolicyText>
          <PolicyList
            values={[
              t('11.8', { fallback: 'Financial or operational losses;' }),
              t('11.9', {
                fallback: 'Business interruption or reduced performance;',
              }),
              t('11.10', { fallback: 'Damage to reputation or goodwill.' }),
            ]}
          />
          <br />
          <PolicyText>{t('11.11', { fallback: 'For All Users' })}</PolicyText>
          <PolicyText>
            {t('11.12', {
              fallback:
                'Nothing in these Terms limits liability where it would be unlawful to do so, including liability for death, personal injury, or damages caused by negligence.',
            })}
          </PolicyText>
        </PolicySection>
        <PolicySection
          title={t('12.0', { fallback: 'Business User Indemnification' })}
        >
          <PolicyText>
            {t('12.1', {
              fallback:
                'Suppose you use the Renvex Website for business or professional purposes. In that case, you agree to indemnify and hold harmless Renvex, its affiliates, shareholders, officers, employees, and agents from any third-party claims, losses, or expenses arising from:',
            })}
            <br />
            <br />
          </PolicyText>
          <PolicyList
            values={[
              t('12.2', { fallback: 'Your use or misuse of the Website;' }),
              t('12.3', {
                fallback: 'Unauthorized access to your account or data;',
              }),
              t('12.4', { fallback: 'Violation of these Terms of Use;' }),
              t('12.5', {
                fallback:
                  'Infringement of third-party rights or intellectual property.',
              }),
            ]}
          />
          <PolicyText>
            {t('12.6', {
              fallback:
                'This indemnification includes all legal fees and related costs resulting from such actions.',
            })}
          </PolicyText>
        </PolicySection>
        <PolicySection
          title={t('13.0', { fallback: 'Website Security and Misuse' })}
        >
          <PolicyText className="font-bold">
            {t('13.1', { fallback: 'Security' })}
          </PolicyText>
          <PolicyText>
            {t('13.2', {
              fallback:
                'Renvex implements strict security measures but cannot guarantee that the Website is free from viruses or cyber threats. You are responsible for using reliable antivirus software and protecting your devices and systems when accessing our platform.',
            })}
          </PolicyText>
          <br />
          <PolicyText className="font-bold">
            {t('13.3', { fallback: 'Prohibited Conduct' })}
          </PolicyText>
          <PolicyText>{t('13.4', { fallback: 'You must not:' })}</PolicyText>
          <PolicyList
            values={[
              t('13.5', {
                fallback: 'Introduce viruses, malware, or harmful code;',
              }),
              t('13.6', {
                fallback:
                  'Attempt unauthorized access to our servers or databases;',
              }),
              t('13.7', {
                fallback:
                  'Launch denial-of-service (DoS) or distributed DoS attacks;',
              }),
              t('13.8', {
                fallback: 'Disrupt or compromise Website functionality.',
              }),
            ]}
          />
          <br />
          <PolicyText>
            {t('13.9', {
              fallback:
                'Any such actions may constitute a criminal offense. Renvex will report violations to relevant authorities and cooperate fully in investigations. Your access to the Website will be terminated immediately upon breach.',
            })}
          </PolicyText>
        </PolicySection>
        <PolicySection
          title={t('14.0', {
            fallback: 'External Links and Third-Party Content',
          })}
        >
          <PolicyText className="font-bold">
            {t('14.1', { fallback: 'External Links' })}
          </PolicyText>
          <PolicyText>
            {t('14.2', {
              fallback:
                'The Website may contain links to external resources or partner platforms. These links are provided for informational purposes only and do not imply endorsement by Renvex.',
            })}
          </PolicyText>
          <PolicyText>
            {t('14.3', {
              fallback:
                'Renvex has no control over third-party sites and assumes no responsibility for their content, accuracy, or security once you leave our domain.',
            })}
          </PolicyText>
          <br />
          <PolicyText className="font-bold">
            {t('14.4', { fallback: 'Third-Party Content' })}
          </PolicyText>
          <PolicyText>
            {t('14.5', {
              fallback:
                'Certain sections of the Website may include data, tools, or opinions supplied by third parties (“Third-Party Content”). Such materials reflect the views of their respective providers and not necessarily those of Renvex.',
            })}
          </PolicyText>
          <PolicyText>
            {t('14.6', {
              fallback:
                'We do not guarantee the accuracy or completeness of this information. Use of third-party content is at your own risk.',
            })}
          </PolicyText>
        </PolicySection>
        <PolicySection title={t('15.0', { fallback: 'Additional Provisions' })}>
          <PolicyText className="font-bold">
            {t('15.1', { fallback: 'Headings' })}
          </PolicyText>
          <PolicyText>
            {t('15.2', {
              fallback:
                'Section titles are for convenience only and do not affect interpretation.',
            })}
          </PolicyText>
          <br />
          <PolicyText className="font-bold">
            {t('15.3', { fallback: 'No Waiver' })}
          </PolicyText>
          <PolicyText>
            {t('15.4', {
              fallback:
                'Failure by Renvex to enforce any right or term does not constitute a waiver of that right.',
            })}
          </PolicyText>
          <br />
          <PolicyText className="font-bold">
            {t('15.5', { fallback: 'Force Majeure' })}
          </PolicyText>
          <PolicyText>
            {t('15.6', {
              fallback:
                'Renvex is not liable for failure to perform obligations due to causes beyond its control, including natural disasters, network outages, government actions, or other unforeseen events.',
            })}
          </PolicyText>
          <br />
          <PolicyText className="font-bold">
            {t('15.7', { fallback: 'Independent Relationship' })}
          </PolicyText>
          <PolicyText>
            {t('15.8', {
              fallback:
                'These Terms do not create any partnership, agency, or joint venture between you and Renvex. Neither party may act on behalf of the other.',
            })}
          </PolicyText>
          <br />
          <PolicyText className="font-bold">
            {t('15.9', { fallback: 'Severability' })}
          </PolicyText>
          <PolicyText>
            {t('15.10', {
              fallback:
                'If any clause is deemed unlawful or unenforceable, the remaining provisions remain valid and in effect.',
            })}
          </PolicyText>
        </PolicySection>
        <PolicySection
          title={t('16.0', { fallback: 'Appendix 1 – Acceptable Use Policy' })}
        >
          <PolicyText className="font-bold">
            {t('16.1', { fallback: 'Purpose' })}
          </PolicyText>
          <PolicyText>
            {t('16.2', {
              fallback:
                'This Policy defines acceptable behavior when using the Renvex Website and applies to all user activities, including communication, data use, and interaction with platform features.',
            })}
          </PolicyText>
          <br />
          <PolicyText className="font-bold">
            {t('16.3', { fallback: 'User Responsibilities' })}
          </PolicyText>
          <PolicyText>
            {t('16.4', {
              fallback: 'Users must:',
            })}
          </PolicyText>
          <br />
          <PolicyList
            values={[
              t('16.5', {
                fallback:
                  'Refrain from copying or reselling Website materials without authorization;',
              }),
              t('16.6', {
                fallback:
                  'Avoid unauthorized access to Renvex systems or networks;',
              }),
              t('16.7', {
                fallback:
                  'Ensure their actions do not harm other users or disrupt Website performance.',
              }),
            ]}
          />
          <br />
          <PolicyText className="font-bold">
            {t('16.8', { fallback: 'Violations and Consequences' })}
          </PolicyText>
          <PolicyText>
            {t('16.9', {
              fallback:
                'Renvex may take the following actions in response to violations:',
            })}
          </PolicyText>
          <br />
          <PolicyList
            values={[
              t('16.10', {
                fallback:
                  'Immediate suspension or permanent termination of access;',
              }),
              t('16.11', {
                fallback: 'Issuing formal warnings;',
              }),
              t('16.12', {
                fallback: 'Legal proceedings to recover damages and costs;',
              }),
              t('16.13', {
                fallback:
                  'Reporting violations to law enforcement authorities.',
              }),
            ]}
          />
          <br />
          <PolicyText>
            {t('16.14', {
              fallback:
                'These actions are not exhaustive. Renvex reserves the right to apply any other measures deemed appropriate.',
            })}
          </PolicyText>
        </PolicySection>
      </PolicyMain>
    </>
  );
}
