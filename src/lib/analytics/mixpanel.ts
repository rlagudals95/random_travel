import mixpanel from 'mixpanel-browser';

export const initMixpanel = () => {
  const MIXPANEL_TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;

  if (MIXPANEL_TOKEN) {
    mixpanel.init(MIXPANEL_TOKEN, {
      debug: process.env.NODE_ENV !== 'production',
      track_pageview: true,
      persistence: 'localStorage'
    });
  } else {
    console.warn('Mixpanel token not found. Tracking will be disabled.');
  }
};

// 이벤트 트래킹 헬퍼 함수
export const track = (eventName: string, properties?: Record<string, unknown>) => {
  mixpanel.track(eventName, properties);
};

// 사용자 식별
export const identify = (userId: string) => {
  mixpanel.identify(userId);
};

// 사용자 프로퍼티 설정
export const setPeople = (properties: Record<string, unknown>) => {
  mixpanel.people.set(properties);
};

export default mixpanel; 