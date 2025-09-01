import { supabase } from './supabaseClient';

// V4 UUID generator for session tracking
function generateUUID() { 
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

const sessionId = generateUUID();
let trackedScrollMilestones = new Set();

// Generic tracking function
async function trackEvent(eventType, details = {}) {
  try {
    const { data, error } = await supabase
      .from('user_actions')
      .insert([
        { 
          event_type: eventType, 
          details: details,
          session_id: sessionId
        },
      ]);

    if (error) {
      console.error('Error logging event:', error);
    } else {
      console.log('Event logged successfully:', eventType, details);
    }
  } catch (error) {
    console.error('Unexpected error in trackEvent:', error);
  }
}

// --- Specific Event Trackers ---

/**
 * Tracks a page view event when the user first lands on the page.
 */
export function trackPageView() {
  trackEvent('page_view', {
    path: window.location.pathname,
    referrer: document.referrer,
    user_agent: navigator.userAgent,
    screen_width: window.screen.width,
    screen_height: window.screen.height
  });
}

/**
 * Sets up a scroll listener to track scroll depth milestones.
 */
export function setupScrollDepthTracking() {
  const milestones = [25, 50, 75, 100];

  const handleScroll = () => {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (scrollableHeight <= 0) return; // Avoid division by zero on non-scrollable pages

    const scrollPercentage = (window.scrollY / scrollableHeight) * 100;

    for (const milestone of milestones) {
      if (scrollPercentage >= milestone && !trackedScrollMilestones.has(milestone)) {
        trackedScrollMilestones.add(milestone);
        trackEvent('scroll_depth', { depth: milestone });
      }
    }

    // If 100% is reached, we can remove the listener to save resources
    if (trackedScrollMilestones.has(100)) {
      window.removeEventListener('scroll', handleScroll);
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
}

/**
 * Sets up a click listener to track feature button clicks.
 */
export function setupFeatureClickTracking() {
  const featuresSection = document.getElementById('features');
  if (!featuresSection) return;

  featuresSection.addEventListener('click', (e) => {
    // Use .closest() to find the button, allows clicking on text inside button
    const button = e.target.closest('.feature-button');
    if (button) {
      // Find the parent card and get the feature name from its dataset
      const card = button.closest('.card');
      if (card && card.dataset.feature) {
        const featureName = card.dataset.feature;
        trackEvent('feature_click', { feature: featureName });
      }
    }
  });
}

/**
 * Sets up a click listener for the main CTA button.
 */
export function setupCtaClickTracking() {
  const ctaButton = document.getElementById('submit-button');
  if (!ctaButton) return;

  ctaButton.addEventListener('click', () => {
    // This event tracks the INTENT to convert.
    // The actual conversion is tracked on form submission.
    trackEvent('cta_click', { button_text: ctaButton.textContent });
  });
}

/**
 * Sets up a submit listener for the waitlist form to track conversions.
 */
export function setupConversionTracking() {
  const waitlistForm = document.getElementById('waitlist-form');
  if (!waitlistForm) return;

  waitlistForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page from reloading

    const emailInput = document.getElementById('email-input');
    const email = emailInput.value;

    // Basic validation
    if (email && email.includes('@')) {
      // This is the actual CONVERSION event.
      trackEvent('conversion', { form: 'waitlist' });

      // Provide user feedback by replacing the form
      const ctaSection = document.getElementById('cta');
      if(ctaSection) {
        ctaSection.innerHTML = '<h3>Thank you for joining the waitlist!</h3><p>We will be in touch soon.</p>';
      }
    } else {
      alert('Please enter a valid email address.');
    }
  });
}
