class Pattern {
    constructor(PatternID, ActivitiesID, Title, URL, PatternDetails, Answer) {
        this.patternID = PatternID;
        this.activitiesID = ActivitiesID;
        this.title = Title;
        this.Url = URL;
        this.patternDetails = PatternDetails;
        this.answer = Answer;
    }
    /* PatternID */
    get getPatternID() {
        return this.patternID;
    }
    set setPatternID(PatternID) {
        this.patternID = PatternID;
    }
    /* ActivitiesID */
    get getActivitiesID() {
        return this.activitiesID;
    }
    set setActivitiesID(ActivitiesID) {
        this.activitiesID = ActivitiesID;
    }
    /* Title */
    get getTitle() {
        return this.title;
    }
    set setTitle(Title) {
        this.title = Title;
    }
    /* URL */
    get getURL() {
        return this.Url;
    }
    set setURL(URL) {
        this.Url = URL;
    }
    /* PatternDetails */
    get getPatternDetails() {
        return this.patternDetails;
    }
    set setPatternDetails(PatternDetails) {
        this.patternDetails = PatternDetails;
    }
    /* Answer */
    get getAnswer() {
        return this.answer;
    }
    set setAnswer(Answer) {
        this.answer = Answer;
    }
}