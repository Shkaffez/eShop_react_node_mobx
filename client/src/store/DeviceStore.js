import { makeAutoObservable } from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Холодильники'},
            {id: 2, name: 'Смартфоны'},
            {id: 3, name: 'Ноутбуки'},
            {id: 4, name: 'Телевизоры'},
        ]

        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'}
        ]

        this._devices = [
            {id: 1, name: 'Iphone 12 pro', price: 100000, rating:  5, img: 'https://www.google.com/search?q=iphone+foto&sxsrf=ALiCzsbC9LZxi16VzoKkCJLOIUCazsts8A:1660069342613&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiV5d-bsLr5AhWpXfEDHbXXCBoQ_AUoAXoECAMQAw&biw=1365&bih=694&dpr=1#imgrc=yHJE1nWArKdUgM'},
            {id: 2, name: 'Iphone 12 pro', price: 100000, rating:  5, img: 'https://www.google.com/search?q=iphone+foto&sxsrf=ALiCzsbC9LZxi16VzoKkCJLOIUCazsts8A:1660069342613&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiV5d-bsLr5AhWpXfEDHbXXCBoQ_AUoAXoECAMQAw&biw=1365&bih=694&dpr=1#imgrc=yHJE1nWArKdUgM'},
            {id: 3, name: 'Iphone 12 pro', price: 100000, rating:  5, img: 'https://www.google.com/search?q=iphone+foto&sxsrf=ALiCzsbC9LZxi16VzoKkCJLOIUCazsts8A:1660069342613&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiV5d-bsLr5AhWpXfEDHbXXCBoQ_AUoAXoECAMQAw&biw=1365&bih=694&dpr=1#imgrc=yHJE1nWArKdUgM'},
            {id: 4, name: 'Iphone 12 pro', price: 100000, rating:  5, img: 'https://www.google.com/search?q=iphone+foto&sxsrf=ALiCzsbC9LZxi16VzoKkCJLOIUCazsts8A:1660069342613&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiV5d-bsLr5AhWpXfEDHbXXCBoQ_AUoAXoECAMQAw&biw=1365&bih=694&dpr=1#imgrc=yHJE1nWArKdUgM'}
        ]

        this._selectedType = {}
        makeAutoObservable(this);
    }
    
    setTypes (types) {
        this._types = types
    }

    setBrands (brands) {
        this._brands = brands
    }

    setDevices (devices) {
        this._devices = devices
    }

    setSelectedType (type) {
        this._selectedType = type
    }

    get selectedType () {
        return this._selectedType
    }

    get types () {
        return this._types
    }

    get brands () {
        return this._brands
    }

    get devices () {
        return this._devices
    }
}