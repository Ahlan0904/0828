import './style.css';
import { 
  trackPageView, 
  setupScrollDepthTracking, 
  setupFeatureClickTracking,
  setupCtaClickTracking,
  setupConversionTracking
} from './tracker.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Track Page View on initial load
  trackPageView();

  // 2. Set up Scroll Depth tracking
  setupScrollDepthTracking();

  // 3. Set up Feature Click tracking
  setupFeatureClickTracking();

  // 4. Set up CTA Click tracking
  setupCtaClickTracking();

  // 5. Set up Conversion tracking
  setupConversionTracking();
});