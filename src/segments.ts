/**
 * The Segments class is the base to make digits here you set which charachter you want vertical or horizontal
 * 
 * To use this piece of code you can import it to other classes with this command's: 
 * ```ts
 * import {Segments} from './segments'
 *
 * const cijfers = new Numbertosegment()
 * const segments = new Segments()
 * segments.segmenthorizontaal()
 * segments.segmenthorizontaalbig()
 * segments.segmentverticaalrechts()
 * segments.segmentverticaalrechtsbig()
 * segments.segmentverticaallinks()
 * segments.segmentverticaallinksbig()
 * segments.segmentverticaalcombo()
 * segments.segmentverticaalcombobig()
 * segments.segmentcomma()
 * segments.segmentcommabig()
 * segments.segmentfullhorizontaal()
 * segments.segmentemptyhorizontaal()
 * ```
 *
 */

export class Segments{ 
    /**
     * In this methode make the horizontal segment
     * 
     * @return return a small horizontal segment
     */
    segmenthorizontaal(){
      const adg = " - "
      //const adg = [" ","-",""]
      return adg
    }
    /**
     * In this methode make the big horizontal segment
     * 
     * @return return a big horizontal segment
     */
    segmenthorizontaalbig(){
      const adg = " -- "
      //const adg = [" ","-",""]
      return adg
    }
    /**
     * In this methode make the right vertical segment
     * 
     * @return return a small right vertical segment
     */
    segmentverticaalrechts(){
        const bc = "  |"
       // const bc = [" ","-",""]
        return bc
    }
    /**
     * In this methode make the big right vertical segment
     * 
     * @return return a big right vertical segment
     */
    segmentverticaalrechtsbig(){
      const bc = "   |"
     // const bc = [" ","-",""]
      return bc
    }
    /**
     * In this methode make the left vertical segment
     * 
     * @return return a small left vertical segment
     */
    segmentverticaallinks(){
        const ef = "|  "
        //const ef = [" ","-",""]
        return ef
    }
    /**
     * In this methode make the big left vertical segment
     * 
     * @return return a big left vertical segment
     */
    segmentverticaallinksbig(){
      const ef = "|   "
      //const ef = [" ","-",""]
      return ef
    }
    /**
     * In this methode make the left and right vertical segment
     * 
     * @return return a small left and right vertical segment
     */
    segmentverticaalcombo(){
        const ef = "| |"
        //const ef = [" ","-",""]
        return ef
    }
    /**
     * In this methode make the big left and right vertical segment
     * 
     * @return return a big left and right vertical segment
     */
    segmentverticaalcombobig(){
      const ef = "|  |"
      //const ef = [" ","-",""]
      return ef
    }
    /**
     * In this methode make the decimalpoint segment
     * 
     * @return return a small decimalpoint segment
     */
    segmentcomma(){
        const comma = " / "
        //const comma = [" ","-",""]
        return comma
    }
    /**
     * In this methode make the big decimalpoint segment
     * 
     * @return return a big decimalpoint segment
     */
    segmentcommabig(){
      const comma = "  / "
      //const comma = [" ","-",""]
      return comma
    }
    /**
     * In this methode make the full horizontal segment
     * 
     * @return return a full horizontal segment
     */
    segmentfullhorizontaal(){
        const adg = " ------- "
        //const adg = [" ","-",""]
        return adg
      }
      /**
     * In this methode make the empty horizontal segment
     * 
     * @return return a empty horizontal segment
     */
      segmentemptyhorizontaal(){
        const adg = "   "
        //const adg = [" ","-",""]
        return adg
      }
      /**
     * In this methode make the empty horizontal segment
     * 
     * @return return a big empty horizontal segment
     */
      segmentemptyhorizontaalbig(){
        const adg = "    "
        //const adg = [" ","-",""]
        return adg
      }
}