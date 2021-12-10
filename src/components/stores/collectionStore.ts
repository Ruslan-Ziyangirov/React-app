import Minary from '../../Minary.jpg';
import Sun from '../../Sun.png';
import Mank from '../../Mank.png';
import Girl from '../../Girl.png';
import Earth from '../../Earth.png';
import Father from '../../Father.png';
import Drunk from '../../Drunk.png';
import Soul from '../../Soul.png';
import Godzilla from '../../Godzilla.png';
import {makeObservable, observable} from 'mobx';
import {FilmModel} from "../../models/FilmModel";




export class CollectionStore {
    @observable collectionMock: Array<FilmModel> = [
        {
            id: 1,
            title: 'Минари',
            rate: 6.9,
            img: Minary,
            description: 'Протагонист пытается обезвредить террориста с помощью уникальной технологии. Блокбастер-пазл Кристофера Нолана',
            genre: 'Фантастика'
        },
        {
            id: 2,
            title: 'Солнццестояние',
            rate: 6.6,
            img: Sun,
            description: 'Протагонист пытается обезвредить террориста с помощью уникальной технологии. Блокбастер-пазл Кристофера Нолана',
            genre: 'Фантастика'
        },
        {
            id: 3,
            title: 'Манк',
            rate: 7.1,
            img: Mank,
            description: 'Протагонист пытается обезвредить террориста с помощью уникальной технологии. Блокбастер-пазл Кристофера Нолана',
            genre: 'Фантастика'
        },
        {
            id: 4,
            title: 'Девушка пода...',
            rate: 6.8,
            img: Girl,
            description: 'Протагонист пытается обезвредить террориста с помощью уникальной технологии. Блокбастер-пазл Кристофера Нолана',
            genre: 'Фантастика'
        },
        {
            id: 5,
            title: 'Земля кочевни...',
            rate: 7.3,
            img: Earth,
            description: 'Протагонист пытается обезвредить террориста с помощью уникальной технологии. Блокбастер-пазл Кристофера Нолана',
            genre: 'Фантастика'
        },
        {
            id: 6,
            title: 'Отец',
            rate: 7.9,
            img: Father,
            description: 'Протагонист пытается обезвредить террориста с помощью уникальной технологии. Блокбастер-пазл Кристофера Нолана',
            genre: 'Фантастика'
        },
        {
            id: 7,
            title: 'Еще по одной',
            rate: 7.5,
            img: Drunk,
            description: 'Протагонист пытается обезвредить террориста с помощью уникальной технологии. Блокбастер-пазл Кристофера Нолана',
            genre: 'Фантастика'
        },
        {
            id: 8,
            title: 'Душа',
            rate: 8.3,
            img: Soul,
            description: 'Протагонист пытается обезвредить террориста с помощью уникальной технологии. Блокбастер-пазл Кристофера Нолана',
            genre: 'Фантастика'
        },
        {
            id: 9,
            title: 'Годзилла',
            rate: 6.1,
            img: Godzilla,
            description: 'Протагонист пытается обезвредить террориста с помощью уникальной технологии. Блокбастер-пазл Кристофера Нолана',
            genre: 'Фантастика'
        }
    ]
}




