window.onload = () => {
    InformationService.getInstance().loadInfo();
    InformationEvent.getInstance().addEventPhotoChangeClick();
    InformationEvent.getInstance().addEventPhotoChange();
    InformationEvent.getInstance().addEventModifyAboutMeClick();
    InformationEvent.getInstance().addEventSaveAboutMeClick();
    InformationEvent.getInstance().addEventModifyIntroduceClick();
    InformationEvent.getInstance().addEventSaveIntroduceClick();
    InformationEvent.getInstance().addEventShowHomeButton();
    AsideEvent.getInstance().addEventShowAsideButton();
    AsideEvent.getInstance().addEventMainChange();
    AsideService.getInstance().loadAside();
    TodoEvent.getInstance().addWelcomeMessage();
    TodoEvent.getInstance().addEventAddTodoClick();
    TodoEvent.getInstance().addEventAddTodoKeyUp();
    TodoService.getInstance();
}