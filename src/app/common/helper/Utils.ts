
/**
 * helper function for the App
 * @param  
 * @param  
 * @returns 
 */

/**
 * Get value from local storage
 * @returns 
 */
export function lsGet(
  key: string,
  defaultV: string | null = null
): string | null {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    return defaultV;
  }
}

/**
 * Set value to the local storage
 * @returns 
 */
export function lsSet(key: string, value: string): void {
  try {
    return localStorage.setItem(key, value);
  } catch (error) {}
}


/**
 * Remove value from local storage
 * @returns 
 */
export function lsRemove(key: string): void {
  try {
    localStorage.removeItem(key);
  } catch (error) {}
}

/**
 * Set and replace char
 * @returns 
 */
function setCharAt(str: string, index: number, chr: string) {
  if (index > str.length - 1) {
    return chr;
  }
  return str.substring(0, index) + chr + str.substring(index + 1);
}

export function replaceChar(val: string, i: number, chr: string) {
  var str = "";
  str = setCharAt(val, i, chr);
  return str;
}
