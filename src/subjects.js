import {Subject, BehaviorSubject} from 'rxjs'

document.addEventListener('click', () => {
    const stream$ = new Subject();
    stream$.subscribe(v => console.log('Value: ', v));
    stream$.next('Some data');
    stream$.next('RX');
    stream$.next('JS');
});