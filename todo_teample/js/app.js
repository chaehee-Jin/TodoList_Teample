window.onload = () => {
    AsideEvent.getInstance().addEventShowAsideButton();
    AsideEvent.getInstance().addEventMainChange();
    InformationService.getInstance().loadInfo();
    InformationEvent.getInstance().addEventPhotoChangeClick();
    InformationEvent.getInstance().addEventPhotoChange();
    InformationEvent.getInstance().addEventModifyAboutMeClick();
    InformationEvent.getInstance().addEventSaveAboutMeClick();
    InformationEvent.getInstance().addEventModifyIntroduceClick();
    InformationEvent.getInstance().addEventSaveIntroduceClick();
    // TodoEvent.getInstance().addEventAddTodoClick();
    // TodoEvent.getInstance().addEventAddTodoKeyUp();
    // TodoService.getInstance();
}