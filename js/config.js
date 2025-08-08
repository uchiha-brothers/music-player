/**
 * Konfigurasi sederhana untuk Music Player
 * Lebih direct dan mudah dipahami
 */

// API URLs - Basic configuration
const API_URL = {
    SEARCH: 'https://jerrycoder.oggyapi.workers.dev/yt-search',
    DOWNLOAD_MP3: 'https://jerrycoder.oggyapi.workers.dev/ytmp3'
};

// App defaults
const APP_DEFAULTS = {
    DEFAULT_SEARCH: 'popular songs 2025',
    MAX_RECENT_ITEMS: 10,
    MAX_QUEUE_ITEMS: 5,
    STORAGE_KEY: 'recentlyPlayed'
};

// Utility functions
const UTILS = {
    // Format seconds to MM:SS
    formatTime: function(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs.toString().padStart(2, '0')}`;
    },
    
    // Check if text needs scrolling
    needsScrolling: function(text, maxLength = 20) {
        return text && text.length > maxLength;
    },
    
    // Format song object from API response
    formatSong: function(item) {
    return {
        id: item.link?.split('v=')[1] || '', // Extracts video ID from the link
        title: item.title || 'Unknown Title',
        artist: item.channel || 'Unknown Artist',
        thumbnail: item.imageUrl || '/api/placeholder/300/300',
        duration: 0, // Optional: convert timestamp to seconds if needed
        timestamp: item.duration || '0:00',
        videoUrl: item.link || ''
    };
 },
    
    // Format search results
    formatSearchResults: function(items) {
        if (!Array.isArray(items)) return [];
        return items.map(item => this.formatSong(item));
    },
    
    // Get download URL from API response
    getDownloadUrl: function(data) {
        return data && data.status && data.url ? data.url : null;
    }
};
