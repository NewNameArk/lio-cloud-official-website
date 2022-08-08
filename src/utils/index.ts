const toString = Object.prototype.toString;

export const isPromise = (obj: any): boolean =>
  !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';

export const isArray = (val: any) : boolean => {
  return Array.isArray(val);
}

export function isUndef (v: any): boolean {
  return v === undefined || v === null
}

export function isDef (v: any) : boolean{
  return v !== undefined && v !== null
}

export function isTrue (v: any) : boolean{
  return v === true
}

export function isFalse (v: any): boolean {
  return v === false
}

export const isUndefined = (val: any) : boolean => {
  return typeof val === 'undefined';
}

export function isString(val: any) : boolean {
  return typeof val === 'string';
}

export function isNumber(val: any) : boolean{
  return typeof val === 'number';
}

export function isObject(val: any): boolean {
  return val !== null && typeof val === 'object';
}

export function isPlainObject (obj: any) : boolean {
  return toString.call(obj) === '[object Object]'
}

export function isFormData(val: any) : boolean{
  return toString.call(val) === '[object FormData]';
}

export function isDate(val: any): boolean {
  return toString.call(val) === '[object Date]';
}

export function isMap(val: any): boolean {
  return toString.call(val) === '[object Map]';
}

export function isSet(val: any): boolean {
  return toString.call(val) === '[object Set]';
}

export function isFile(val: any) : boolean {
  return toString.call(val) === '[object File]';
}

export function isBlob(val: any): boolean {
  return toString.call(val) === '[object Blob]';
}

export function isFunction(val: any): boolean {
  return toString.call(val) === '[object Function]';
}

export function isURLSearchParams(val: any): boolean {
  return toString.call(val) === '[object URLSearchParams]';
}

export function isRegExp (val: any): boolean {
  return toString.call(val) === '[object RegExp]'
}

export function trim(str: string):string {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
}

export function forEach(obj: any, fn: any) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /* eslint no-param-reassign:0 */
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (let i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (let key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

export function isPrimitive (value:any): boolean {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

// 转换时间
export const formateTime = (data: number) : string => {
  const da = data || new Date().getTime();
  const dt = new Date(da);
  const y = dt.getFullYear();
  const m = (`${dt.getMonth() + 1}`).padStart(2, '0');
  const d = (`${dt.getDate()}`).padStart(2, '0');
  const hh = (`${dt.getHours()}`).padStart(2, '0');
  const mm = (`${dt.getMinutes()}`).padStart(2, '0');
  const ss = (`${dt.getSeconds()}`).padStart(2, '0');
  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
};

// 转换日期
export const formateDate = (data: number) : string => {
  const da = data || new Date().getTime();
  const dt = new Date(da);
  const y = dt.getFullYear();
  const m = (`${dt.getMonth() + 1}`).padStart(2, '0');
  const d = (`${dt.getDate()}`).padStart(2, '0');
  return `${y}-${m}-${d}`;
};

// 秒转换成时分秒
export const calcTimes = (data: number) => {
  // eslint-disable-next-line radix
  const h = parseInt(data / 3600 as unknown as string) > 10 ? parseInt(data / 3600 as unknown as string) : `0${parseInt(data / 3600 as unknown as string)}`;
  // eslint-disable-next-line radix
  const m = parseInt((data % 3600 ) / 60 as unknown as string) > 10 ? parseInt((data % 3600) / 60 as unknown as string) : `0${parseInt((data % 3600) / 60 as unknown as string)}`;
  const s = (data % 3600) % 60 > 10 ? (data % 3600) % 60 : `0${(data % 3600) % 60}`;
  return `${h}:${m}:${s}`;
};

// 时分秒转换成秒
export const calcSeconds = (data: string) : number => {
  const [h, m, s] = data.split(':');
  return (Number(h) * 60 + Number(m)) * 60 +Number(s);
};