export const EventName = {
  PAGE_VIEW: 'Page View',
  BUTTON_CLICK: 'Button Click',
  SEARCH: 'Search',
  PLACE_SELECT: 'Place Select',
  ERROR: 'Error',
  SCREEN_CAPTURE: 'Screen Capture',
} as const;

export type EventNameType = typeof EventName[keyof typeof EventName];

export interface EventProperties {
  [EventName.PAGE_VIEW]: {
    path: string;
    title?: string;
  };
  [EventName.BUTTON_CLICK]: {
    buttonId: string;
    buttonName: string;
    location: string;
  };
  [EventName.SEARCH]: {
    query: string;
    resultCount: number;
    filters?: Record<string, unknown>;
  };
  [EventName.PLACE_SELECT]: {
    placeId: string;
    placeName: string;
    category: string;
    source: 'search' | 'recommendation' | 'history';
  };
  [EventName.ERROR]: {
    errorType: string;
    message: string;
    path: string;
    stack?: string;
  };
  [EventName.SCREEN_CAPTURE]: {
    type: 'desktop' | 'mobile';
    source: string;
    href: string;
  };
} 

export const PageName = {
  HOME: 'Home',
  MAP_PAGE: 'Map Page',
} as const;

export type PageNameType = typeof PageName[keyof typeof PageName];