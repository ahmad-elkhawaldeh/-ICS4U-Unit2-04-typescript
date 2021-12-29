/*
* This program Solves the tower of hanoi.
*
* @author  Ahmad El-khawaldeh
* @version 1.0
* @since   2021-12-08
*/

import * as readline from 'readline'

function hanoi (nOfDisks: number, startPeg: number,
  endPeg: number) {
  // this function solves the tower of hanoi.
  const pegNum: number = 6
  if (nOfDisks === 1) {
    console.log('Move disk 1 from peg ' + startPeg + ' to peg ' + endPeg)
  } else {
    hanoi(nOfDisks - 1, startPeg, pegNum - startPeg - endPeg)
    console.log('Move disk ' + nOfDisks + ' from peg ' +
                    startPeg + ' to peg ' + endPeg)
    hanoi(nOfDisks - 1, pegNum - startPeg - endPeg, endPeg)
  }
}

console.log('Tower of Hanoi.')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('\nHow many disks do you want?: ', function (input) {
  const diskNum: number = parseInt(input)
  if (Number.isInteger(diskNum)) {
    if (diskNum > 0) {
      hanoi(diskNum, 1, 3)
    } else {
      console.log('\nPlease insert a positive integer.')
    }
  } else {
    console.log('\nPlease input an integer.')
  }
  rl.close()
  console.log('\nDone.')
})
