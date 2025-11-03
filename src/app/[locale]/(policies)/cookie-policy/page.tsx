import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

import { PolicyHero } from '@/features/policies/ui/policy-hero';
import { PolicyList } from '@/features/policies/ui/policy-list';
import { PolicyMain } from '@/features/policies/ui/policy-main';
import { PolicySection } from '@/features/policies/ui/policy-section';
import { PolicyText } from '@/features/policies/ui/policy-text';

export default async function CookiePolicy() {
  const t = await getTranslations('cookiePolicy');

  return (
    <>
      <PolicyHero title={t('title', { fallback: 'Cookie Policy' })} />
      <PolicyMain>
        <PolicyText>
          {t('0.0', { fallback: 'This Cookie Policy describes how Renvex' })}{' '}
          <Link href="https://renvex.es/" className="underline">
            https://renvex.es/
          </Link>{' '}
          {t('0.1', {
            fallback:
              'uses cookies and similar technologies to improve functionality, analyze performance, and enhance your experience on our Website.',
          })}
        </PolicyText>
        <PolicySection title={t('1.0', { fallback: 'What Are Cookies' })}>
          <PolicyText>
            {t('1.1', {
              fallback:
                'Cookies are small text files placed on your device when you visit a website. They help websites remember user preferences, improve navigation, and collect analytical information.',
            })}
            <br />
            <br />
            {t('1.2', {
              fallback:
                'Cookies play a key role in ensuring that our platform operates efficiently and provides a more personalized user experience.',
            })}
          </PolicyText>
          <br />
          <PolicyText>
            {t('1.3', { fallback: 'Cookies may be used to:' })}
          </PolicyText>
          <PolicyList
            values={[
              t('1.4', {
                fallback: 'Support website functionality and security;',
              }),
              t('1.5', {
                fallback: 'Measure traffic, engagement, and performance;',
              }),
              t('1.6', {
                fallback: 'Deliver relevant content and marketing messages.',
              }),
            ]}
          />
          <br />
          <PolicyText>
            {t('1.7', {
              fallback:
                'Cookies can be categorized by their function, duration, or source.',
            })}
          </PolicyText>
        </PolicySection>
        <PolicySection
          title={t('2.0', { fallback: 'Types of Cookies Used by Renvex' })}
        >
          <PolicyText className="font-bold">
            {t('2.1', { fallback: '1. Essential Cookies' })}
          </PolicyText>
          <br />
          <PolicyText>
            {t('2.2', {
              fallback:
                'These cookies are required for the website to function properly. They support features such as:',
            })}
          </PolicyText>
          <PolicyList
            values={[
              t('2.3', {
                fallback: 'Page navigation and secure access;',
              }),
              t('2.4', {
                fallback: 'Session management;',
              }),
              t('2.5', {
                fallback: 'Authentication of restricted areas.',
              }),
            ]}
          />
          <br />
          <PolicyText>
            {t('2.6', {
              fallback:
                'Without these cookies, certain parts of the site may not operate as intended.',
            })}
          </PolicyText>
          <br />
          <PolicyText className="font-bold">
            {t('2.7', { fallback: '2. Analytical / Performance Cookies' })}
          </PolicyText>
          <PolicyText>
            {t('2.8', {
              fallback:
                'These cookies collect aggregated, anonymous information on how users interact with the Website — such as:',
            })}
          </PolicyText>
          <PolicyList
            values={[
              t('2.9', {
                fallback: 'Most visited sections;',
              }),
              t('2.10', {
                fallback: 'Navigation patterns;',
              }),
              t('2.11', {
                fallback: 'Loading errors or slow pages.',
              }),
            ]}
          />
          <br />
          <PolicyText>
            {t('2.12', {
              fallback:
                'The data helps us improve the platform’s performance and usability. No personal information is stored.',
            })}
          </PolicyText>
          <br />
          <PolicyText className="font-bold">
            {t('2.13', { fallback: '3. Functionality Cookies' })}
          </PolicyText>
          <br />
          <PolicyText>
            {t('2.14', {
              fallback:
                'Functionality cookies store user preferences to make your experience more consistent and personalized, for example:',
            })}
          </PolicyText>
          <PolicyList
            values={[
              t('2.15', {
                fallback: 'Remembering language or region settings;',
              }),
              t('2.16', {
                fallback: 'Saving display preferences or form inputs.',
              }),
            ]}
          />
          <br />
          <PolicyText className="font-bold">
            {t('2.17', { fallback: '4. Targeting / Advertising Cookies' })}
          </PolicyText>
          <PolicyText>
            {t('2.18', {
              fallback:
                'These cookies support the delivery of content and ads relevant to your interests. They help us:',
            })}
          </PolicyText>
          <br />
          <PolicyList
            values={[
              t('2.19', {
                fallback:
                  'Understand user interaction with our marketing materials;',
              }),
              t('2.20', {
                fallback: 'Measure the effectiveness of campaigns;',
              }),
              t('2.21', {
                fallback:
                  'Improve the relevance of displayed ads across other websites.',
              }),
            ]}
          />
        </PolicySection>
        <PolicySection title={t('3.0', { fallback: 'Managing Cookies' })}>
          <PolicyText>
            {t('3.1', {
              fallback:
                'You can manage or disable cookies through your browser settings at any time. Most browsers allow you to:',
            })}
          </PolicyText>
          <br />
          <PolicyList
            values={[
              t('3.2', {
                fallback: 'View which cookies are stored;',
              }),
              t('3.3', {
                fallback: 'Delete existing cookies;',
              }),
              t('3.4', {
                fallback: 'Block future cookies from being placed;',
              }),
              t('3.5', {
                fallback: 'Receive notifications before a cookie is stored.',
              }),
            ]}
          />
          <br />
          <PolicyText>
            {t('3.6', {
              fallback:
                'Please note that disabling certain cookies may limit website functionality or degrade your browsing experience.',
            })}
          </PolicyText>
          <PolicyText>
            {t('3.7', {
              fallback:
                'For more detailed instructions on managing cookies, refer to your browser’s help documentation.',
            })}
          </PolicyText>
        </PolicySection>
        <PolicySection
          title={t('4.0', { fallback: 'Third-Party Cookies and Services' })}
        >
          <PolicyText>
            {t('4.1', {
              fallback:
                'Some cookies on the Renvex Website may be set by third-party analytics or advertising providers. These cookies help us measure performance, track engagement, or deliver relevant advertising content.',
            })}
          </PolicyText>
          <PolicyText>
            {t('4.2', {
              fallback:
                'Renvex does not control these third-party cookies directly and encourages users to review the privacy and cookie policies of respective providers for more information.',
            })}
          </PolicyText>
        </PolicySection>
        <PolicySection title={t('5.0', { fallback: 'Policy Updates' })}>
          <PolicyText>
            {t('5.1', {
              fallback:
                'Renvex may update this Cookie Policy from time to time to reflect changes in technology, regulations, or our business operations.',
            })}
          </PolicyText>
          <PolicyText>
            {t('5.2', {
              fallback:
                'Any revisions will be published on this page with an updated effective date. Continued use of the Website after such updates constitutes acceptance of the revised Policy.',
            })}
          </PolicyText>
        </PolicySection>
      </PolicyMain>
    </>
  );
}
