import { makeObservable, observable, action } from 'mobx';

class Admin {
    isAdminMode = false;

    constructor() {
        makeObservable(this, {
            isAdminMode: observable,
            enterAdminMode: action,
            exitAdminMode: action,
        });
    }

    enterAdminMode() {
        this.isAdminMode = true;
        console.log("enter");
    }

    exitAdminMode() {
        this.isAdminMode = false;
    }
}

const adminStore = new Admin();
export default adminStore;