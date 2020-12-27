/**
 * Arraytosigledigit class gets the array from Temptoarray and make slices from it.
 * 
 * To use this piece of code you can import it to other classes with this command's: 
 * ```ts
 * import {Arraytosigledigit} from './arraytosigledigit'
 *
 * const waarde = new Arraytosigledigit()
 * waarde.digitone()
 * waarde.digittwo()
 * waarde.digitthree()
 * waarde.digitfore()
 * waarde.digitfive()
 * ```
 *
 */

import {Temptoarray} from './temptoarray'

export class Arraytosigledigit{
/**
  * Get the array and take the first character
  *  
  * @return A number that sit in place 0 from the temperature array
  */
    digitone(){
        const waarde = new Temptoarray()
        const temptiental = waarde.slicer()
        const waardeeen = temptiental[0]
        return waardeeen
    }
    /**
  * Get the array and take the second character
  *  
  * @return A number that sit in place 1 from the temperature array
  */
    digittwo(){
        const waarde = new Temptoarray()
        const temptiental = waarde.slicer()
        const waardeeen = temptiental[1]
        return waardeeen
    }
    /**
  * Get the array and take the 3th character 
  *  
  * @return A number that sit in place 2 from the temperature array
  */
    digitthree(){
        const waarde = new Temptoarray()
        const temptiental = waarde.slicer()
        const waardeeen = temptiental[2]
        return waardeeen
    }
    /**
  * Get the array and take the 4th character 
  *  
  * @return A number that sit in place 3 from the temperature array
  */
    digitfore(){
        const waarde = new Temptoarray()
        const temptiental = waarde.slicer()
        const waardeeen = temptiental[3]
        return waardeeen
    }
    /**
  * Get the array and take the 5th character 
  *  
  * @return A number that sit in place 4 from the temperature array
  */
    digitfive(){
        const waarde = new Temptoarray()
        const temptiental = waarde.slicer()
        const waardeeen = temptiental[4]
        return waardeeen
    }
}