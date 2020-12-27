/**
 * The Temptoarray class the class that have the current temperature and make a array from it with in all small piece in the string 1 number
 * 
 * To use this piece of code you can import it to other classes with this command's: 
 * ```ts
 * import {Temptoarray} from './temptoarray'
 *
 * const temperatuurarray = new Temptoarray()
 * const temp = temperatuurarray.slicer()
 * ```
 *
 */

import {Temperatuur} from './temperatuur'

export class Temptoarray{
    /**
     * In this methode you put a number in it and make an array from it
     * 
     * @return the current temperature in array form
     */
    slicer(){
        const tempnu = new Temperatuur()
        const warmte = tempnu.tempWaarde()
        const arrayOfDigits = Array.from(String(warmte), Number)
        return arrayOfDigits
    }
}