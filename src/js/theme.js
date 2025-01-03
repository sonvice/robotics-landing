
export const getStoredTheme = () => {
    return localStorage.getItem('theme') || null;
  };
  
  export const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  };
  
  export const initTheme = () => {
    const userPreferredTheme = getStoredTheme() || 
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  
    setTheme(userPreferredTheme);
  
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      const newTheme = e.matches ? 'dark' : 'light';
      setTheme(newTheme);
    });
  };
  
  export const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };
  