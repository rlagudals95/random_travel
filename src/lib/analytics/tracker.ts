import mixpanel from './mixpanel';
import { EventName, EventProperties, EventNameType } from './types';

class AnalyticsTracker {
  private static instance: AnalyticsTracker;

  private constructor() {}

  public static getInstance(): AnalyticsTracker {
    if (!this.instance) {
      this.instance = new AnalyticsTracker();
    }
    return this.instance;
  }

  // 타입 안전한 이벤트 트래킹 메서드
  public track<E extends EventNameType>(
    eventName: E,
    properties: EventProperties[E]
  ): void {

    console.log("NODE_ENV", process.env.NODE_ENV);
    console.log("tracking info: ",eventName, properties);
    
    mixpanel.track(eventName, properties);

    if (process.env.NODE_ENV !== 'production') {
      console.log(`[Analytics] ${eventName}:`, properties);
    }
  }

  // 자주 사용하는 이벤트들을 위한 헬퍼 메서드들
  public trackPageView(path: string, title?: string): void {
    this.track(EventName.PAGE_VIEW, { path, title });
  }

  public trackButtonClick(buttonId: string, buttonName: string, location: string): void {
    this.track(EventName.BUTTON_CLICK, { buttonId, buttonName, location });
  }

  public trackSearch(query: string, resultCount: number, filters?: Record<string, unknown>): void {
    this.track(EventName.SEARCH, { query, resultCount, filters });
  }

  public trackPlaceSelect(
    placeId: string,
    placeName: string,
    category: string,
    source: EventProperties[typeof EventName.PLACE_SELECT]['source']
  ): void {
    this.track(EventName.PLACE_SELECT, { placeId, placeName, category, source });
  }

  public trackError(errorType: string, message: string, path: string, stack?: string): void {
    this.track(EventName.ERROR, { errorType, message, path, stack });
  }
}

export const analytics = AnalyticsTracker.getInstance(); 