

/**
 * Description placeholder
 * @date 1/22/2024 - 3:04:09 PM
 *
 * @export
 * @param {string} txt
 * @param {number} [max=50]
 * @returns {string}
 */
export function descSlice (txt:string , max:number=50){

if(txt.length >= max) 
return `${txt.slice(0,max)}...`;
return txt;


}