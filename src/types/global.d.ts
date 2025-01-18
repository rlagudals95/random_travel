declare global {
  interface Window {
    Kakao: {
      init: (params: unknown) => void;
      Share: {
        sendDefault: (params: unknown) => void;
      };
      Link: {
        sendDefault: (params: unknown) => void;
      };
      isInitialized: () => boolean;
    };
    
  }
}

export {}; 