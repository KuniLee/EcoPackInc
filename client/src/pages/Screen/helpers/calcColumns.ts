export default function (n: number) {
  if (n <= 1) return 'grid-cols-[repeat(1,minmax(100px,50%))]'
  if (n === 2) return 'grid-cols-2'
  if (n === 3) return 'grid-cols-3'
  if (n === 4) return 'grid-cols-4'
  if (n >= 5 && n <= 6) return 'grid-cols-[repeat(3,minmax(100px,24%))]'
  if (n >= 7 && n <= 8) return 'grid-cols-[repeat(4,minmax(100px,24%))]'
  if (n >= 9 && n <= 10) return 'grid-cols-[repeat(5,minmax(100px,25%))]'
  if (n >= 11 && n <= 12) return 'grid-cols-[repeat(4,minmax(100px,15%))]'
  if (n >= 13 && n <= 15) return 'grid-cols-[repeat(5,minmax(100px,15%))]'
  if (n >= 16 && n <= 18) return 'grid-cols-[repeat(6,minmax(100px,17%))]'
  if (n >= 19 && n <= 21) return 'grid-cols-[repeat(7,minmax(100px,15%))]'
}
