const LocalStorage = {
    get: (key) => {
        try {
            const value = localStorage.getItem(key);
            return JSON.parse(value)
        } catch (error) {
            return null;
        }
    },
    set: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
    clear: () => localStorage.clear()
}

export default LocalStorage;