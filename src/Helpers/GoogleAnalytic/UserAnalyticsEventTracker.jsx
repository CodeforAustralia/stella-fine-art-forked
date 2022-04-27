//useAnalyticsEventTracker.jsx
import ReactGA from 'react-ga';

const UseAnalyticsEventTracker = (category = 'Contact From') => {
  const eventTracker = (action = 'Submit', label = 'Contact') => {
    ReactGA.event({ category, action, label });
  };
  return eventTracker;
};
export default UseAnalyticsEventTracker;
