window.onload = () => {
    // AsideEvent.getInstance().addEventShowMenuButton();
    // AsideEvent.getInstance().addEventMainChange();
    InformationService.getInstance().loadInfo();
    InformationEvent.getInstance().addEventPhotoChangeClick();
    InformationEvent.getInstance().addEventPhotoChange();
    InformationEvent.getInstance().addEventModifyAboutMeClick();
    InformationEvent.getInstance().addEventSaveAboutMeClick();
    InformationEvent.getInstance().addEventModifyIntroduceClick();
    InformationEvent.getInstance().addEventSaveIntroduceClick();
    // TodoEvent.getInstnace().addEventAddTodoClick();
    // TodoEvent.getInstnace().addEventAddTodoKeyUp();
    // TodoService.getInstnace();
}