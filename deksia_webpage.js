/*
    Rebecca Arango
    Deksia Webpage Javascript
    11/25/2020
*/
/*Opens FAQ Questions/ only created an object for the third question so far.*/
class FAQ
{
    constructor (widgetClass, answerClass)
    {
        this.widget = $(widgetClass);
        this.answer = $(answerClass);
        this.answerShown = false;
    }
    closeWidget()
    {
        $(this.widget).text("+");
    }
    openWidget()
    {
        $(this.widget).text("-");
    }
    showAnswer()
    {
        $(this.answer).css("display","block");
        this.answerShown = true;
    }
    hideAnswer()
    {
        $(this.answer).css("display","none");
        this.answerShown = false;
    }
    operate()
    {
        $(this.widget).click(function(){
            if (this.answerShown == false)
            {
                this.showAnswer();
                this.openWidget();
            }
            else
            {
                this.hideAnswer();
                this.closeWidget();
            }
        }.bind(this));
    }
}
var FAQ3 = new FAQ(".clickable-widget", ".FAQ-answer");
FAQ3.operate();