import {of, from, Observable, fromEvent, range, timer, interval} from 'rxjs'
import {scan, map} from "rxjs/operators";

// simple stream creation
// const stream$ = of(1, 2, 3, 4, 5);
//
//
// stream$.subscribe(
//     val => {
//         console.log('Value: ', val)
//     }
// );

// stream with array creation
// const arr$ = from([1, 2, 3, 4, 5, 6]).pipe()
// scan((acc, value) => acc.concat(value), [])
// ;
// arr$.subscribe(value => console.log(value));

// const stream$ = new Observable(observer => {
//     observer.next('First Value');
//     setTimeout(() => {
//         return observer.next('After 1 sec')
//     }, 1000);
//     setTimeout(() => observer.complete(), 1000);
//     // setTimeout(() => observer.error('Something went wrong'), 2000);
//     setTimeout(() => observer.next('After 3 sec'), 3000)
// });


// stream$.subscribe(
//     (value) => console.log('Value: ', value),
//     (err) => console.log('Error: ', err),
//     () => console.log('Complete')
// );

// stream$.subscribe({
//     next(val) {
//         console.log(val)
//     },
//     error(err) {
//         console.log(err)
//     },
//     complete() {
//         console.log('Complete')
//     }
// });

// fromEvent(document.querySelector('canvas'), 'mousemove')
//     .pipe(
//         map(e => ({
//             x: e.offsetX,
//             y: e.offsetY,
//             ctx: e.target.getContext('2d')
//         }))
//     )
//     .subscribe(pos => {
//         pos.ctx.fillRect(pos.x, pos.y, 2, 2)
//     });
//
// const clear$ = fromEvent(document.getElementById('clear'), 'click');
// clear$.subscribe(() => {
//     const canvas = document.querySelector('canvas');
//     canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
// });
//

// const sub = interval(500).subscribe(v => console.log(v));
// setTimeout(() => {
//     sub.unsubscribe()
// }, 5000);
//
// timer(2500).subscribe(v => console.log(v));
// range(42, 10).subscribe(v => console.log(v));