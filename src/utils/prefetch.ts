interface CacheItem {
  data: any;
  timestamp: number;
  expiry: number;
}

class PrefetchManager {
  private static instance: PrefetchManager;
  private cache: Map<string, CacheItem>;
  private readonly DEFAULT_EXPIRY = 5 * 60 * 1000; // 5 minutes

  private constructor() {
    this.cache = new Map();
    this.loadFromStorage();
  }

  public static getInstance(): PrefetchManager {
    if (!PrefetchManager.instance) {
      PrefetchManager.instance = new PrefetchManager();
    }
    return PrefetchManager.instance;
  }

  private loadFromStorage(): void {
    try {
      const stored = localStorage.getItem('prefetch_cache');
      if (stored) {
        const parsed = JSON.parse(stored);
        this.cache = new Map(Object.entries(parsed));
      }
    } catch (error) {
      console.error('Error loading prefetch cache:', error);
    }
  }

  private saveToStorage(): void {
    try {
      const obj = Object.fromEntries(this.cache);
      localStorage.setItem('prefetch_cache', JSON.stringify(obj));
    } catch (error) {
      console.error('Error saving prefetch cache:', error);
    }
  }

  public async prefetch<T>(key: string, fetchFn: () => Promise<T>, expiry?: number): Promise<T> {
    const cached = this.cache.get(key);
    const now = Date.now();

    if (cached && now - cached.timestamp < cached.expiry) {
      return cached.data;
    }

    try {
      const data = await fetchFn();
      this.cache.set(key, {
        data,
        timestamp: now,
        expiry: expiry || this.DEFAULT_EXPIRY
      });
      this.saveToStorage();
      return data;
    } catch (error) {
      console.error('Prefetch error:', error);
      if (cached) {
        return cached.data;
      }
      throw error;
    }
  }

  public clearCache(): void {
    this.cache.clear();
    localStorage.removeItem('prefetch_cache');
  }

  public removeItem(key: string): void {
    this.cache.delete(key);
    this.saveToStorage();
  }
}

export const prefetchManager = PrefetchManager.getInstance(); 