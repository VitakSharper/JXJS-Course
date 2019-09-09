import {interval} from 'rxjs'
import {map, filter, tap, take, takeLast, takeWhile, scan, reduce} from 'rxjs/operators'

const stream$ = interval(800)
    .pipe(
        tap(v => console.log('Tap: ', v)),
        // map((v) => v * 2),
        // filter(v => v % 2 === 0),
        // take(10),
        // takeLast(5)
        // takeWhile(v => v <= 7)

        // scan((acc, val) => acc + val, 0)
        reduce((acc, val) => acc + val, 0)
    );


stream$.subscribe({
    next: v => console.log('Next: ', v),
    complete: () => console.log('Complete')
});
