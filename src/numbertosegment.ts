/**
 * The Numbertosegment class make from all the segments numbers.
 * 
 * To use this piece of code you can import it to other classes with this command's: 
 * ```ts
 * import {Numbertosegment} from './numbertosegment'
 *
 * const cijfers = new Numbertosegment()
 * cijfers.segmentzero()
 * cijfers.segmentone()
 * cijfers.segmenttwo()
 * cijfers.segmentthree()
 * cijfers.segmentfour()
 * cijfers.segmentfive()
 * cijfers.segmentsix()
 * cijfers.segmentseven()
 * cijfers.segmenteight()
 * cijfers.segmentnine()
 * cijfers.segmentdot()
 * cijfers.segmentcelcius()
 * cijfers.segmentnan()
 * ```
 *
 */


import {Segments} from './segments'

export class Numbertosegment{
    /**
     * In this methode make the number 0 with the segments
     * 
     * @return the 0 but in a digit
     */
    segmentzero(){
        const seg = new Segments()
        console.log('\n',seg.segmenthorizontaal(),'\n',seg.segmentverticaalcombo(),'\n',seg.segmentverticaalcombo(),'\n',seg.segmenthorizontaal())
        return " "
    }
    /**
     * In this methode make the number 1 with the segments
     * 
     * @return the 1 but in a digit
     */
    segmentone(){
        const seg = new Segments()
        console.log('\n',seg.segmentverticaalrechts(),'\n',seg.segmentverticaalrechts())
        return " "
    } 
    /**
    * In this methode make the number 2 with the segments
    * 
    * @return the 2 but in a digit
    */
    segmenttwo(){
        const seg = new Segments()
        console.log('\n',seg.segmenthorizontaal(),'\n',seg.segmentverticaalrechts(),'\n',seg.segmenthorizontaal(),'\n',seg.segmentverticaallinks(),'\n',seg.segmenthorizontaal())
        return " "
    }
    /**
     * In this methode make the number 3 with the segments
     * 
     * @return the 3 but in a digit
     */
    segmentthree(){
        const seg = new Segments()
        console.log('\n',seg.segmenthorizontaal(),'\n',seg.segmentverticaalrechts(),'\n',seg.segmenthorizontaal(),'\n',seg.segmentverticaalrechts(),'\n',seg.segmenthorizontaal())
        return " "
    }
    /**
     * In this methode make the number 4 with the segments
     * 
     * @return the 4 but in a digit
     */
    segmentfour(){
        const seg = new Segments()
        console.log('\n',seg.segmentverticaalcombo(),'\n',seg.segmenthorizontaal(),'\n',seg.segmentverticaalrechts())
        return " "
    }
    /**
     * In this methode make the number 5 with the segments
     * 
     * @return the 5 but in a digit
     */
    segmentfive(){
        const seg = new Segments()
        console.log('\n',seg.segmenthorizontaal(),'\n',seg.segmentverticaallinks(),'\n',seg.segmenthorizontaal(),'\n',seg.segmentverticaalrechts(),'\n',seg.segmenthorizontaal())
        return " "
    }
    /**
     * In this methode make the number 6 with the segments
     * 
     * @return the 6 but in a digit
     */
    segmentsix(){
        const seg = new Segments()
        console.log('\n',seg.segmenthorizontaal(),'\n',seg.segmentverticaallinks(),'\n',seg.segmenthorizontaal(),'\n',seg.segmentverticaalcombo(),'\n',seg.segmenthorizontaal())
        return " "
    }
    /**
     * In this methode make the number 7 with the segments
     * 
     * @return the 7 but in a digit
     */
    segmentseven(){
        const seg = new Segments()
        console.log('\n',seg.segmenthorizontaal(),'\n',seg.segmentverticaalrechts(),'\n',seg.segmentverticaalrechts())
        return " "
    }
    /**
     * In this methode make the number 8 with the segments
     * 
     * @return the 8 but in a digit
     */
    segmenteight(){
        const seg = new Segments()
        console.log('\n',seg.segmenthorizontaal(),'\n',seg.segmentverticaalcombo(),'\n',seg.segmenthorizontaal(),'\n',seg.segmentverticaalcombo(),'\n',seg.segmenthorizontaal())
        return " "
    }
    /**
     * In this methode make the number 9 with the segments
     * 
     * @return the 9 but in a digit
     */
    segmentnine(){
        const seg = new Segments()
        console.log('\n',seg.segmenthorizontaal(),'\n',seg.segmentverticaalcombo(),'\n',seg.segmenthorizontaal(),'\n',seg.segmentverticaalrechts(),'\n',seg.segmenthorizontaal())
        return " "
    }
    /**
     * In this methode make the dot with the segments
     * 
     * @return the dot but in a digit
     */
    segmentdot(){
        const seg = new Segments()
        console.log('\n',seg.segmenthorizontaal(),'\n',seg.segmentverticaalcombo(),'\n',seg.segmenthorizontaal())
        return " "
    }
    /**
     * In this methode make the character C with the segments
     * 
     * @return the C but in a digit
     */
    segmentcelcius(){
        const seg = new Segments()
        console.log('\n',seg.segmenthorizontaal(),'\n',seg.segmentverticaallinks(),'\n',seg.segmentverticaallinks(),'\n',seg.segmenthorizontaal())
        return " "
    }
    /**
     * In this methode make the decimalpoint with the segments
     * 
     * @return the decimalpoint but in a digit
     */
    segmentnan(){
        const seg = new Segments()
        console.log('\n','\n',seg.segmentcomma())
        return " "
    }
    

}