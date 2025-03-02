export interface VideoInfo {
    title: string;
    formats: Array<{
      quality: string;
      url: string;
    }>;
  }