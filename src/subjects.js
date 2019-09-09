import {Subject, BehaviorSubject, ReplaySubject} from 'rxjs'

document.addEventListener('click', () => {
    const stream$ = new ReplaySubject(2);


    stream$.next('Some data');
    stream$.next('RX');
    stream$.next('JS');
    stream$.subscribe(v => console.log('Value: ', v));
});