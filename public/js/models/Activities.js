class Activities {
    constructor(ActivitiesID, ActivitiesName, ActivitiesDescription) {
        this.activitiesID = ActivitiesID;
        this.activitiesName = ActivitiesName;
        this.activitiesDescription = ActivitiesDescription;
    }
    /* ActivitiesID */
    get getActivitiesID() {
        return this.activitiesID;
    }
    set setActivitiesID(ActivitiesID) {
        this.activitiesID = ActivitiesID;
    }
    /* ActivitiesName */
    get getActivitiesName() {
        return this.activitiesName;
    }
    set setActivitiesName(ActivitiesName) {
        this.activitiesName = ActivitiesName;
    }
    /* ActivitiesDescription */
    get getActivitiesDescription() {
        return this.activitiesDescription
    }
    set setActivitiesDescription(ActivitiesDescription) {
        this.activitiesDescription = ActivitiesDescription;
    }
}